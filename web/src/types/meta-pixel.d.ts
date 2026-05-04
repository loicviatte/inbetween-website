// Global type declaration for Meta Pixel (fbq)
// Loaded by the inline script in src/app/layout.tsx
export {};

declare global {
  interface Window {
    fbq?: (
      command: "init" | "track" | "trackCustom" | "consent" | string,
      eventNameOrId?: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq?: unknown;
  }
}
