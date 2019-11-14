export interface Auth {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface AuthResponse {
  idToken: string;
  expireIn: string;
}
