import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Emulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const ConnectionString = process.env.CONNECTION_STRING;
const options = [];

if (!ConnectionString) {
  throw new Error(
    'MongoDB connection string is not defined in environment variables.'
  );
}

let client = new MongoClient(ConnectionString, options);
let clientPromise;

if (process.env.NODE_ENV !== 'production') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}
console.log('Conneection Successful');

export default clientPromise;
