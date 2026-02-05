import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgiCDWs3r9Xjw9n97z0fBQA9a3TpCkirI",
  authDomain: "awesome-amp-stories.firebaseapp.com",
  projectId: "awesome-amp-stories",
  storageBucket: "awesome-amp-stories.firebasestorage.app",
  messagingSenderId: "973905445519",
  appId: "1:973905445519:web:35bd9021ad69b8ecba26fa"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db as d };
