import { useEffect } from "react";

export const useCookies = <T>(cookieName: string, onCookieRetrieved: (cookie: T | null) => void) => {
  useEffect(() => {
    (() => {
      const stringifiedCookie = localStorage.getItem(cookieName);
      const parsedCookie: T | null = stringifiedCookie ? JSON.parse(stringifiedCookie) : null;
      onCookieRetrieved(parsedCookie);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};