import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUKFzxoO-QsD9Iyr3NO83DE4_85fNSbHs",
  authDomain: "musicapp-44bdc.firebaseapp.com",
  projectId: "musicapp-44bdc",
  storageBucket: "musicapp-44bdc.appspot.com",
  messagingSenderId: "488233325541",
  appId: "1:488233325541:web:9004da8c011ea18275950c"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
