/**
 * Login request service.
 * Uses Fetch API to execute authentication.
 */

export interface LoginPayload {
  username: string;
  password: string;
}

export async function loginRequest(payload: LoginPayload): Promise<boolean> {
  const endpoint = import.meta.env.VITE_API_URL + "/auth/login";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return response.ok;
}
 export async function resetPasswordRequest(data: { password: string; token: string }): Promise<boolean> {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    return res.ok;
  } catch {
    return false;
  }
}
