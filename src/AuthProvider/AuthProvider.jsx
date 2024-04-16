import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    console.log(user)



    // create user

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }


    // sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }




    //observe user 

    useEffect(
        () => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                }
            })
            return () => {
                unsubscribe()
            }
        },
        []
    )

   






    const allValues = {
        createUser,
        signInUser,
    }

    return (
        <AuthContext.Provider value={allValues} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;