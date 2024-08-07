import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n-config";


export function getLocale(request: NextRequest): string | undefined {
    const locale = request.cookies.get("language")?.value;

    return locale || i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
    const pathname: any = request.nextUrl.pathname;

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
        console.log(locale, pathname)
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}`,
                request.url,
            ),
        );
    }

    return NextResponse.next();
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};