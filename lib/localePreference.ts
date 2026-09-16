export const LOCALE_STORAGE_KEY = "altrone-docs-locale";

/**
 * Also set as a cookie under the same name — `proxy.ts` redirects a
 * locale-less URL server-side, before any client JS (or localStorage) runs,
 * so it needs the preference somewhere a request can carry it.
 */
export function rememberLocale(locale: string) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Storage unavailable (private mode, quota, etc.) — locale just won't persist.
  }
  document.cookie = `${LOCALE_STORAGE_KEY}=${locale}; path=/; max-age=31536000; samesite=lax`;
}
