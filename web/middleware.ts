import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';
import { decrypt } from './lib/session';

export default async function middleware(req: NextRequest) {
  const procetedRoutes = ['/'];
  const publicRoutes = ['/Login', '/Register'];
  const currentPath = req.nextUrl.pathname;
  // Check if route is protected
  const isProtectedRoute = procetedRoutes.some((route) =>
    currentPath.startsWith(route)
  );

  // Don't check session for public routes
  if (publicRoutes.some((route) => currentPath.startsWith(route))) {
    return NextResponse.next();
  }

  // Don't check session for public routes

  if (isProtectedRoute) {
    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);
    if (!session?.userId) {
      return NextResponse.redirect(new URL('/Login', req.nextUrl));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image).*)'],
};
