import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "/router"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAch5a4omEH90rBA0U_5kPqx3QGm2iTFt0",
  authDomain: "vue-firebase-45340.firebaseapp.com",
  projectId: "vue-firebase-45340",
  storageBucket: "vue-firebase-45340.appspot.com",
  messagingSenderId: "874079378055",
  appId: "1:874079378055:web:39394d24bbaf011edc7622",
  measurementId: "G-HY77QTXYF0"
};

 initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = createApp(App)

app.use(router)
 
app.mount('#app')
