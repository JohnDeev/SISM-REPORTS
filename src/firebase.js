import * as dotenv from 'dotenv'
dotenv.config()
import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

// console.log(process.env)

initializeApp({
  credential: applicationDefault(),
  // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

export const db = getFirestore()