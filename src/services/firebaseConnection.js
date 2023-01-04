import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAqwiLPJm5dijv3uZpMWQZN57nHVIpOBpo",
    authDomain: "apptarefas-146b3.firebaseapp.com",
    projectId: "apptarefas-146b3",
    storageBucket: "apptarefas-146b3.appspot.com",
    messagingSenderId: "512759835768",
    appId: "1:512759835768:web:fff53e0302f8f56ab4518d"
};


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;