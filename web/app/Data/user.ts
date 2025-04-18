'use server';
import { verifySession } from '@/lib/session';
import { getUserByData } from '../../../mongo/users';
import { cache } from 'react';
import ObjectId from '../../../mongo/ObjectId';
export const getUser = cache(async () => {
  const session = await verifySession();

  const data = await getUserByData({ _id: ObjectId(session.userId) });
  return data[0];
});
