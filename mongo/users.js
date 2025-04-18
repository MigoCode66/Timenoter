import clientPromise from './Index';

export async function getUserByData(data) {
  let client;
  try {
    client = await Promise.race([
      clientPromise,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Connection timeout')), 5000)
      ),
    ]);

    const db = client.db('Data');
    const users = db.collection('Users');

    const results = await users
      .find(data)
      .maxTimeMS(5000) // Set maximum execution time
      .toArray();

    return results.map((user) => ({
      ...user,
      _id: user._id.toString(),
    }));
  } catch (error) {
    console.error('Failed to get user:', error);
    throw new Error(`Database operation failed: ${error.message}`);
  }
}

export async function createUser(userData) {
  let client;
  try {
    client = await Promise.race([
      clientPromise,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Connection timeout')), 5000)
      ),
    ]);

    const db = client.db('Data');
    const users = db.collection('Users');

    const result = await users.insertOne(userData, { wtimeout: 2500 });

    if (!result.acknowledged) {
      throw new Error('Failed to insert user');
    }

    const createdUser = await users.findOne(
      { _id: result.insertedId },
      { maxTimeMS: 2000 }
    );

    if (!createdUser) {
      throw new Error('User created but not found');
    }

    return [createdUser];
  } catch (error) {
    console.error('Failed to create user:', error);
    throw new Error(`Database operation failed: ${error.message}`);
  }
}
