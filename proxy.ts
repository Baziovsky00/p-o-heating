// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { DEFAULT_LOCALE, LOCALES } from './i18n';

// export const proxy = (req: NextRequest) => {
//   const pathname = req.nextUrl.pathname;

//   if (
//     pathname.startsWith('/_next') ||
//     pathname.startsWith('/favicon') ||
//     pathname.match(/\.(.*)$/)
//   ) {
//     return NextResponse.next();
//   }

//   if (LOCALES.some((locale) => pathname.startsWith(`/${locale}`))) {
//     return NextResponse.next();
//   }

//   const acceptLang = req.headers.get('accept-language') || '';
//   const preferredLocale = LOCALES.find((locale) => acceptLang.startsWith(locale)) || DEFAULT_LOCALE;

//   const url = req.nextUrl.clone();
//   url.pathname = `/${preferredLocale}${pathname}`;
//   return NextResponse.redirect(url);
// }

// export const config = {
//   matcher: [
//     '/',
//     '/((?!_next|.*\\..*).*)',
//   ],
// };

import createMiddleware from 'next-intl/middleware';
import { LOCALES, DEFAULT_LOCALE } from './i18n';

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: true,
  localePrefix: 'always'
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(pl|en)/:path*',
    
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};