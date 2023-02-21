import { AuthError } from "../types/authError";

export const getAuthErrorMessage = (errorCode: string) => {
  console.log(errorCode);
  switch (errorCode) {
    case AuthError.EMAIL_ALREADY_IN_USE:
      return "Email already in use";
    case AuthError.INVALID_EMAIL:
      return "Invalid email";
    case AuthError.MISSING_EMAIL:
      return "Missing email";
    case AuthError.OPERATION_NOT_ALLOWED:
      return "Operation not allowed";
    case AuthError.WEAK_PASSWORD:
      return "Password is too weak";
    case AuthError.WRONG_PASSWORD:
      return "Wrong password";
    case AuthError.USER_NOT_FOUND:
      return "User not found";
    case AuthError.USER_DISABLED:
      return "User disabled";
    case AuthError.TOO_MANY_REQUESTS:
      return "Too many requests, try again later";
    default:
      return "An error occurred";
  }
};
