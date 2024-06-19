import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "/router"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ4B481WAT_in5XTf7wk8wKfairZdnECw",
  authDomain: "vue3-web-firebase.firebaseapp.com",
  projectId: "vue3-web-firebase",
  storageBucket: "vue3-web-firebase.appspot.com",
  messagingSenderId: "528740930636",
  appId: "1:528740930636:web:c3d435328a788d5327d0e9",
  measurementId: "G-8MKC011H2Z"
};

 initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)
 
app.mount('#app')
