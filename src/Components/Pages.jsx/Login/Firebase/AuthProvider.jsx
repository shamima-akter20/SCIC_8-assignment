import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./Firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
       }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current User', currentUser);
            setLoading(false);
          });
          return () => {
            return unsubscribe();
          }
       }, [])



    const authInfo ={
        user,
        loading,
        createUser ,
        signIn,
        logOut,
        googleSignIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;