import { ObjectId } from 'mongodb';

export default function objectId(ob) {
  return new ObjectId(ob);
}
