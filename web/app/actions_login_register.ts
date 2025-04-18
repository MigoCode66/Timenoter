'use server';

import { createUser, getUserByData } from '../../mongo/users';
import cryprto from 'crypto';
import { creteSession } from '../lib/session';

export type userData = {
  username?: string;
  email: string;
  password: string;
  role?: string;
};

export async function singUp(data: userData) {
  const hashedPassword = cryprto
    .createHash('sha256')
    .update(data.password)
    .digest('hex');
  const userEgsist = await getUserByData({ email: data.email });
  console.log(userEgsist);

  if (userEgsist.length !== 0) {
    console.error('User alredy exist');
    return;
  }
  const user = await createUser({
    username: data.username,
    email: data.email,
    pasword: hashedPassword,
    role: 'user',
  });
  console.log(user[0]._id);
  await creteSession(user[0]._id);
}

export async function logIn(data: userData) {
  const hashedPassword = cryprto
    .createHash('sha256')
    .update(data.password)
    .digest('hex');
  const Data = await getUserByData({ email: data.email });
  const user = Data[0];
  if (user?.pasword === hashedPassword) {
    await creteSession(user._id);
  } else {
    console.error('User not authorised');
    return;
  }
}
