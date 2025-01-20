// This file is auto-generated by @hey-api/openapi-ts

export type AttemptPublic = {
    id: number;
    user_id: number;
    video_id: number;
    submission?: SubmissionPublic | null;
    created_at: string;
};

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

export type CommentPublic = {
    topic: string;
    explanation: string;
};

export type HttpValidationError = {
    detail?: Array<ValidationError>;
};

export type SignUpData = {
    username: string;
    email: string;
    password: string;
};

export type SubmissionPublic = {
    file: string;
    text: string;
    comments: Array<CommentPublic>;
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

export type VideoAttemptCreate = {
    file: string;
};

export type VideoCreate = {
    title: string;
    description: string;
    file: string;
    summary: string;
    points: Array<VideoPointCreate>;
};

export type VideoPointCreate = {
    point: string;
};

export type VideoPointPublic = {
    id: number;
    video_id: number;
    point: string;
};

export type VideoPublic = {
    id: number;
    title: string;
    description: string;
    file: string;
    summary: string;
    points: Array<VideoPointPublic>;
    attempts: Array<AttemptPublic>;
};

export type SignUpAuthSignupPostData = {
    body: SignUpData;
    path?: never;
    query?: never;
    url: '/auth/signup';
};

export type SignUpAuthSignupPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type SignUpAuthSignupPostError = SignUpAuthSignupPostErrors[keyof SignUpAuthSignupPostErrors];

export type SignUpAuthSignupPostResponses = {
    /**
     * Successful Response
     */
    200: Token;
};

export type SignUpAuthSignupPostResponse = SignUpAuthSignupPostResponses[keyof SignUpAuthSignupPostResponses];

export type LogInAuthLoginPostData = {
    body: BodyLogInAuthLoginPost;
    path?: never;
    query?: never;
    url: '/auth/login';
};

export type LogInAuthLoginPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type LogInAuthLoginPostError = LogInAuthLoginPostErrors[keyof LogInAuthLoginPostErrors];

export type LogInAuthLoginPostResponses = {
    /**
     * Successful Response
     */
    200: Token;
};

export type LogInAuthLoginPostResponse = LogInAuthLoginPostResponses[keyof LogInAuthLoginPostResponses];

export type GetUserAuthSessionGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/auth/session';
};

export type GetUserAuthSessionGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type GetUserAuthSessionGetError = GetUserAuthSessionGetErrors[keyof GetUserAuthSessionGetErrors];

export type GetUserAuthSessionGetResponses = {
    /**
     * Successful Response
     */
    200: UserPublic;
};

export type GetUserAuthSessionGetResponse = GetUserAuthSessionGetResponses[keyof GetUserAuthSessionGetResponses];

export type LogoutAuthLogoutGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/auth/logout';
};

export type LogoutAuthLogoutGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type LogoutAuthLogoutGetError = LogoutAuthLogoutGetErrors[keyof LogoutAuthLogoutGetErrors];

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
    url: '/files';
};

export type CreateFileFilesPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type CreateFileFilesPostError = CreateFileFilesPostErrors[keyof CreateFileFilesPostErrors];

export type CreateFileFilesPostResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type GetAllVideosVideosGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/videos/';
};

export type GetAllVideosVideosGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type GetAllVideosVideosGetError = GetAllVideosVideosGetErrors[keyof GetAllVideosVideosGetErrors];

export type GetAllVideosVideosGetResponses = {
    /**
     * Successful Response
     */
    200: Array<VideoPublic>;
};

export type GetAllVideosVideosGetResponse = GetAllVideosVideosGetResponses[keyof GetAllVideosVideosGetResponses];

export type CreateVideoVideosPostData = {
    body: VideoCreate;
    path?: never;
    query?: never;
    url: '/videos/';
};

export type CreateVideoVideosPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type CreateVideoVideosPostError = CreateVideoVideosPostErrors[keyof CreateVideoVideosPostErrors];

export type CreateVideoVideosPostResponses = {
    /**
     * Successful Response
     */
    200: VideoPublic;
};

export type CreateVideoVideosPostResponse = CreateVideoVideosPostResponses[keyof CreateVideoVideosPostResponses];

export type GetVideoVideosVideoIdGetData = {
    body?: never;
    path: {
        video_id: number;
    };
    query?: never;
    url: '/videos/{video_id}';
};

export type GetVideoVideosVideoIdGetErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type GetVideoVideosVideoIdGetError = GetVideoVideosVideoIdGetErrors[keyof GetVideoVideosVideoIdGetErrors];

export type GetVideoVideosVideoIdGetResponses = {
    /**
     * Successful Response
     */
    200: VideoPublic;
};

export type GetVideoVideosVideoIdGetResponse = GetVideoVideosVideoIdGetResponses[keyof GetVideoVideosVideoIdGetResponses];

export type CreateAttemptVideosVideoIdAttemptsPostData = {
    body?: never;
    path: {
        video_id: number;
    };
    query?: never;
    url: '/videos/{video_id}/attempts';
};

export type CreateAttemptVideosVideoIdAttemptsPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type CreateAttemptVideosVideoIdAttemptsPostError = CreateAttemptVideosVideoIdAttemptsPostErrors[keyof CreateAttemptVideosVideoIdAttemptsPostErrors];

export type CreateAttemptVideosVideoIdAttemptsPostResponses = {
    /**
     * Successful Response
     */
    200: AttemptPublic;
};

export type CreateAttemptVideosVideoIdAttemptsPostResponse = CreateAttemptVideosVideoIdAttemptsPostResponses[keyof CreateAttemptVideosVideoIdAttemptsPostResponses];

export type CreateSubmissionVideosVideoIdAttemptsAttemptIdSubmissionsPostData = {
    body: VideoAttemptCreate;
    path: {
        video_id: number;
        attempt_id: number;
    };
    query?: never;
    url: '/videos/{video_id}/attempts/{attempt_id}/submissions';
};

export type CreateSubmissionVideosVideoIdAttemptsAttemptIdSubmissionsPostErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type CreateSubmissionVideosVideoIdAttemptsAttemptIdSubmissionsPostError = CreateSubmissionVideosVideoIdAttemptsAttemptIdSubmissionsPostErrors[keyof CreateSubmissionVideosVideoIdAttemptsAttemptIdSubmissionsPostErrors];

export type CreateSubmissionVideosVideoIdAttemptsAttemptIdSubmissionsPostResponses = {
    /**
     * Successful Response
     */
    200: SubmissionPublic;
};

export type CreateSubmissionVideosVideoIdAttemptsAttemptIdSubmissionsPostResponse = CreateSubmissionVideosVideoIdAttemptsAttemptIdSubmissionsPostResponses[keyof CreateSubmissionVideosVideoIdAttemptsAttemptIdSubmissionsPostResponses];