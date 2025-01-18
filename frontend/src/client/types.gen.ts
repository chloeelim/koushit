// This file is auto-generated by @hey-api/openapi-ts

export type BodyCreateFileFilesPost = {
  file: Blob | File;
};

export type BodyLogInAuthLoginPost = {
  grant_type?: string | null;
  username: string;
  password: string;
  scope?: string;
  client_id?: string | null;
  client_secret?: string | null;
};

export type HttpValidationError = {
  detail?: Array<ValidationError>;
};

export type SignUpData = {
  username: string;
  email: string;
  password: string;
};

export type Token = {
  access_token: string;
  token_type: string;
  user: UserPublic;
};

export type UserPublic = {
  id: number;
  email: string;
  username: string;
};

export type ValidationError = {
  loc: Array<string | number>;
  msg: string;
  type: string;
};

export type SignUpAuthSignupPostData = {
  body: SignUpData;
  path?: never;
  query?: never;
  url: "/auth/signup";
};

export type SignUpAuthSignupPostErrors = {
  /**
   * Validation Error
   */
  422: HttpValidationError;
};

export type SignUpAuthSignupPostError =
  SignUpAuthSignupPostErrors[keyof SignUpAuthSignupPostErrors];

export type SignUpAuthSignupPostResponses = {
  /**
   * Successful Response
   */
  200: Token;
};

export type SignUpAuthSignupPostResponse =
  SignUpAuthSignupPostResponses[keyof SignUpAuthSignupPostResponses];

export type LogInAuthLoginPostData = {
  body: BodyLogInAuthLoginPost;
  path?: never;
  query?: never;
  url: "/auth/login";
};

export type LogInAuthLoginPostErrors = {
  /**
   * Validation Error
   */
  422: HttpValidationError;
};

export type LogInAuthLoginPostError =
  LogInAuthLoginPostErrors[keyof LogInAuthLoginPostErrors];

export type LogInAuthLoginPostResponses = {
  /**
   * Successful Response
   */
  200: Token;
};

export type LogInAuthLoginPostResponse =
  LogInAuthLoginPostResponses[keyof LogInAuthLoginPostResponses];

export type GetUserAuthSessionGetData = {
  body?: never;
  path?: never;
  query?: never;
  url: "/auth/session";
};

export type GetUserAuthSessionGetErrors = {
  /**
   * Validation Error
   */
  422: HttpValidationError;
};

export type GetUserAuthSessionGetError =
  GetUserAuthSessionGetErrors[keyof GetUserAuthSessionGetErrors];

export type GetUserAuthSessionGetResponses = {
  /**
   * Successful Response
   */
  200: UserPublic;
};

export type GetUserAuthSessionGetResponse =
  GetUserAuthSessionGetResponses[keyof GetUserAuthSessionGetResponses];

export type LogoutAuthLogoutGetData = {
  body?: never;
  path?: never;
  query?: never;
  url: "/auth/logout";
};

export type LogoutAuthLogoutGetErrors = {
  /**
   * Validation Error
   */
  422: HttpValidationError;
};

export type LogoutAuthLogoutGetError =
  LogoutAuthLogoutGetErrors[keyof LogoutAuthLogoutGetErrors];

export type LogoutAuthLogoutGetResponses = {
  /**
   * Successful Response
   */
  200: unknown;
};

export type CreateFileFilesPostData = {
  body: BodyCreateFileFilesPost;
  path?: never;
  query?: never;
  url: "/files";
};

export type CreateFileFilesPostErrors = {
  /**
   * Validation Error
   */
  422: HttpValidationError;
};

export type CreateFileFilesPostError =
  CreateFileFilesPostErrors[keyof CreateFileFilesPostErrors];

export type CreateFileFilesPostResponses = {
  /**
   * Successful Response
   */
  200: unknown;
};
