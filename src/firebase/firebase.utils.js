import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config={
    apiKey: "AIzaSyAlh2S46mZNw7ZGGzN1pcj1PCpN127rboo",
    authDomain: "crown-db-8a737.firebaseapp.com",
    projectId: "crown-db-8a737",
    storageBucket: "crown-db-8a737.appspot.com",
    messagingSenderId: "543674931767",
    appId: "1:543674931767:web:20f9af082d6e6a18e2fdb2",
    measurementId: "G-9HS2S38WQF"
};
export const createUserProfileDocument=async(userAuth,additionaldata)=>{
        if(!userAuth)
            return;
        const userRef=firestore.doc(`user/${userAuth.uid}`);
        const snapshot=await userRef.get();
        console.log(userRef);
        if(!snapshot.exists){
            const {displayName,email}=userAuth;
            const createdAt=new Date();
            try{
                    await userRef.set({
                        displayName,email,createdAt,...additionaldata
                    })
            }catch{
                console.log('error is in creating user profile in firebase.utils.js at method createUserProfile');
            }
        }
        return userRef;

}
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;