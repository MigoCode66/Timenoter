import clientPromise from './Index';

export async function getUserByData(data) {
  try {
    const client = await clientPromise;
    const db = client.db('Data');
    const users = db.collection('Users');

    const results = await users.find(data).toArray();
    return results.map((user) => ({
      ...user,
      _id: user._id.toString(),
    }));
  } catch (error) {
    console.error('Failed to get user:', error);
    throw new Error('Failed to get user by email: ' + error.message);
  }
}

export async function createUser(userData) {
  try {
    const client = await clientPromise;
    const db = client.db('Data');
    const users = db.collection('Users');

    const result = await users.insertOne(userData);
    const createdUser = await users.findOne({ _id: result.insertedId });
    return [createdUser]; // Return array to maintain compatibility
  } catch (error) {
    console.error('Failed to create user:', error);
    throw new Error('Failed to create user: ' + error.message);
  }
}
