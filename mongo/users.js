import clientPromise from './Index'; // Fixed typo in import

let db;
let client;
let users;

async function init() {
  if (db) return;
  try {
    client = await clientPromise; // Fixed typo in clientPromise
    db = client.db('Data');
    users = db.collection('Users');
  } catch (err) {
    throw new Error('Failed to connect to MongoDB: ' + err);
  }
}

(async () => {
  await init();
})();

export async function getUserByData(Data) {
  // Changed parameter name to camelCase
  try {
    const results = await users.find(Data).toArray(); // Simplified object key
    const simplifiedResults = results.map((user) => ({
      ...user,
      _id: user._id.toString(), // Convert _id to a simple string value
    }));
    return simplifiedResults;
  } catch (err) {
    return 'Failed to get user by email: ' + err;
  }
}

export async function createUser(userData) {
  // Fixed typo in function name
  try {
    const data = await users.insertOne(userData);
    return data;
  } catch (err) {
    throw new Error('Failed to create user: ' + err);
  }
}
