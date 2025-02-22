/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_API_PROTOCOL: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_FRONTEND_PROTOCOL: string;
  readonly VITE_FRONTEND_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
