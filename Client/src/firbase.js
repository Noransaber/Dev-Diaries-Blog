// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRABSE_API_KEY,
  authDomain: 'dev-diaries-blog.firebaseapp.com',
  projectId: 'dev-diaries-blog',
  storageBucket: 'dev-diaries-blog.appspot.com',
  messagingSenderId: '599554507324',
  appId: '1:599554507324:web:a8935498d834db2435f939',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
