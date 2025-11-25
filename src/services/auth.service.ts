// src/services/auth.service.ts
/**
 * auth.service.ts
 * Unified auth service: calls real API when VITE_API_URL is defined,
 * otherwise uses a localStorage-based mock (for frontend-only demos).
 *
 * Exports:
 * - loginRequest
 * - registerRequest
 * - forgotPasswordRequest
 * - resetPasswordRequest
 * - updateUserRequest
 * - deleteUserRequest
 *
 * All functions return data or boolean similar to the real API shape.
 */

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
}

const API = import.meta.env.VITE_API_URL ?? "";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password?: string;
};

/* -------------------------
   Helper: Mock storage utils
   ------------------------- */
function getMockUsers(): User[] {
  const raw = localStorage.getItem("uv_mock_users");
  if (!raw) {
    // default demo user
    const demo: User[] = [
      { id: "1", firstName: "Demo", lastName: "User", age: 30, email: "demo@uv.com", password: "demo123" }
    ];
    localStorage.setItem("uv_mock_users", JSON.stringify(demo));
    return demo;
  }
  try {
    return JSON.parse(raw) as User[];
  } catch {
    return [];
  }
}
function saveMockUsers(users: User[]) {
  localStorage.setItem("uv_mock_users", JSON.stringify(users));
}
function generateId() {
  return String(Date.now() + Math.floor(Math.random() * 1000));
}

/* -------------------------
   Network helpers
   ------------------------- */
async function postJson(path: string, body: any) {
  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

async function putJson(path: string, body: any) {
  const res = await fetch(`${API}${path}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("uv_token") ?? ""}` },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
async function del(path: string) {
  const res = await fetch(`${API}${path}`, { method: "DELETE", headers: { "Authorization": `Bearer ${localStorage.getItem("uv_token") ?? ""}` } });
  if (!res.ok) throw new Error(await res.text());
  return true;
}

/* -------------------------
   Public API
   ------------------------- */

/**
 * loginRequest
 * - If API configured: calls POST /auth/login and expects { token, user }
 * - Mock: checks users in localStorage, returns { token, user }
 */
export async function loginRequest(payload: LoginPayload): Promise<{ token: string; user: User } | null> {
  if (API) {
    return postJson("/auth/login", payload);
  }

  // Mock path
  const users = getMockUsers();
  const found = users.find(u => u.email === payload.email && u.password === payload.password);
  if (!found) return null;
  const token = `mock-token-${found.id}-${Date.now()}`;
  return { token, user: { ...found, password: undefined } };
}

/**
 * registerRequest
 * - If API configured: POST /users
 * - Mock: creates user and returns user (without password)
 */
export async function registerRequest(data: RegisterPayload): Promise<User> {
  if (API) {
    return postJson("/users", data);
  }

  const users = getMockUsers();
  if (users.find(u => u.email === data.email)) throw new Error("Email already exists (mock).");
  const newUser: User = { id: generateId(), firstName: data.firstName, lastName: data.lastName, age: data.age, email: data.email, password: data.password };
  users.push(newUser);
  saveMockUsers(users);
  return { ...newUser, password: undefined };
}

/**
 * forgotPasswordRequest
 * - If API configured: POST /auth/forgot-password
 * - Mock: simply returns true and stores a reset token in localStorage for demo
 */
export async function forgotPasswordRequest(email: string): Promise<boolean> {
  if (API) {
    const res = await postJson("/auth/forgot-password", { email });
    return !!res;
  }

  const users = getMockUsers();
  const found = users.find(u => u.email === email);
  if (!found) return false;
  const token = `mock-reset-${found.id}-${Date.now()}`;
  localStorage.setItem(`uv_reset_${found.id}`, token);
  // in real app you'd email the token; here we show it in console for demo
  // eslint-disable-next-line no-console
  console.info("Mock reset token for demo (use in /ressetpasword?token=...):", token);
  return true;
}

/**
 * resetPasswordRequest
 * - If API configured: POST /auth/reset-password
 * - Mock: validates token stored in localStorage and updates password
 */
export async function resetPasswordRequest(data: { password: string; token: string }): Promise<boolean> {
  if (API) {
    const res = await postJson("/auth/reset-password", data);
    return !!res;
  }

  // find token in stored resets
  const users = getMockUsers();
  for (const u of users) {
    const key = `uv_reset_${u.id}`;
    const t = localStorage.getItem(key);
    if (t && t === data.token) {
      u.password = data.password;
      saveMockUsers(users);
      localStorage.removeItem(key);
      return true;
    }
  }
  return false;
}

/**
 * updateUserRequest
 * - If API configured: PUT /users/:id
 * - Mock: update localStorage user
 */
export async function updateUserRequest(id: string, update: Partial<User>): Promise<User> {
  if (API) {
    return putJson(`/users/${id}`, update);
  }

  const users = getMockUsers();
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) throw new Error("User not found (mock)");
  users[idx] = { ...users[idx], ...update };
  // if password removed, keep it unchanged unless provided
  saveMockUsers(users);
  return { ...users[idx], password: undefined };
}

/**
 * deleteUserRequest
 * - If API configured: DELETE /users/:id
 * - Mock: removes user and returns true
 */
export async function deleteUserRequest(id: string): Promise<boolean> {
  if (API) {
    return del(`/users/${id}`);
  }

  let users = getMockUsers();
  users = users.filter(u => u.id !== id);
  saveMockUsers(users);
  return true;
}
