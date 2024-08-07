import { NextRequest, NextResponse } from "next/server";
import { i18n, Locale } from "./i18n-config";

export function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("language")?.value as Locale;
  const isValidCookie = i18n.locales.find(lang => lang === cookieLocale);
  if (cookieLocale && isValidCookie) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const locales: Locale[] = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim() as Locale);
    const bestMatch = locales.find((lang) => i18n.locales.includes(lang));

    if (bestMatch) return bestMatch;
  }

  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname: string = request.nextUrl.pathname;

  const isStaticAsset = /\.(svg|png|jpg|pdf)$/.test(pathname);

  if (isStaticAsset) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
