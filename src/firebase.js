import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCYlYrWJ-uS6TXGyocu0uwKXthi0SeLexQ",
    authDomain: "webrtc-d2996.firebaseapp.com",
    projectId: "webrtc-d2996",
    storageBucket: "webrtc-d2996.appspot.com",
    messagingSenderId: "1038846696581",
    appId: "1:1038846696581:web:b5c89767db76669aec9dec",
    measurementId: "G-9TFMG49CJL"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();

const servers = {
    iceServers: [
        {
            urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
        },
    ],
    iceCandidatePoolSize: 10,
};
export { firestore, servers }