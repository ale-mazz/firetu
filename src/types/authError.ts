/**
 * The possible error codes that can be returned when using the auth
 * module.
 * These are the error codes that can be returned by the server.
 */
export enum AuthError {
  /**
   * Indicates the email used to attempt a sign up is already in use.
   */
  EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",

  /**
   * Indicates the email used is invalid.
   */
  INVALID_EMAIL = "auth/invalid-email",

  /**
   * Idicates the email is missing.
   */
  MISSING_EMAIL = "auth/missing-email",

  /**
   * Indicates that email/password accounts are not enabled.
   */
  OPERATION_NOT_ALLOWED = "auth/operation-not-allowed",

  /**
   * Indicates the password used is not strong enough.
   */
  WEAK_PASSWORD = "auth/weak-password",

  /**
   * Indicates the user attempted sign in with a wrong password.
   */
  WRONG_PASSWORD = "auth/wrong-password",

  /**
   * Indicates there is no user corresponding to the given email.
   */
  USER_NOT_FOUND = "auth/user-not-found",

  /**
   * Indicates the user account has been disabled by an administrator.
   */
  USER_DISABLED = "auth/user-disabled",

  /**
   * Indicates the user has attemped to change email or password too many
   * times.
   */
  TOO_MANY_REQUESTS = "auth/too-many-requests",
}
