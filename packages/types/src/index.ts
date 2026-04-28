export interface UserResponse {
  id: number;
  name: string;
  email: string;
}

export interface ApiStatus {
  status: "ok" | "error";
  message?: string;
}
