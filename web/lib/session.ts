import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const key = new TextEncoder().encode(process.env.SECRET);

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1day')
    .sign(key);
}

const cookie = {
  name: 'session',
  options: {
    httpOnly: true,
    secure: true,
    sameSite: 'lax' as const,
    path: '/',
  },
  duration: 24 * 60 * 60 * 1000,
};

export async function decrypt(session: any) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (err) {
    return null;
  }
}

export async function creteSession(userId: string) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ userId, expires });
  const options = { ...cookie.options, expires };
  (await cookies()).set(cookie.name, session, options);
  redirect('/');
}
export async function verifySession() {
  const Cookie = (await cookies()).get(cookie.name)?.value;
  const session = await decrypt(Cookie);
  if (!session?.userId) {
    redirect('/Login');
  }
  return { userId: session?.userId };
}
export async function delateSession() {
  (await cookies()).delete(cookie.name);
}
