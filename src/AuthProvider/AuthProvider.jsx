
import { GithubAuthProvider, GoogleAuthProvider, 
    createUserWithEmailAndPassword, onAuthStateChanged,
     signInWithEmailAndPassword, signInWithPopup, signOut,
      updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import 'animate.css';




export const AuthContext = createContext(null);

// Social auth providers

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()





const AuthProvider = ({ children }) => {


    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);
    console.log('user ekhne ache vai', user)


    // create user

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // sign in user

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //update user

    const updateUser = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }







    //log out user

    const logOutUser = () => {
        setLoading(true);

        return signOut(auth);
    }


    //google log in
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    //github login

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }




    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('CurrentUser-->', currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe();


        };


    }, [])






    const allValues = {
        user,
        createUser,
        signInUser,
        logOutUser,
        googleLogin,
        githubLogin,
        loading,
        updateUser


    };

    return (
        <AuthContext.Provider value={allValues} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;