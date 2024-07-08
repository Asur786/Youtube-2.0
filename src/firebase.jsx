import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCl81xBLFkXSUm5wSPkHJ0sakj9188InIU",
    authDomain: "yt-abhi-clone.firebaseapp.com",
    projectId: "yt-abhi-clone",
    storageBucket: "yt-abhi-clone.appspot.com",
    messagingSenderId: "1048834820020",
    appId: "1:1048834820020:web:32d51f9b58a8c860a054e1"
  };

  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const provider = new GoogleAuthProvider();

  provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

  export { auth, provider };