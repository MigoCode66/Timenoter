import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';
import { decrypt } from './lib/session';

export default async function middleware(req: NextRequest) {
  const procetedRoutes = ['/'];
  const currentPath = req.nextUrl.pathname;
  const isProtectedRoute = procetedRoutes.includes(currentPath);

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
