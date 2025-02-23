import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const useAuth = () => {
  return useContext(AuthContext);
};

// auth provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, isLoading] = useState(true);

  // register user
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const signInWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  // login  with github
  const signInWithGitHub = async () => {
    return await signInWithPopup(auth, githubProvider);
  };

  // logout user
  const logOut = () => {
    return signOut(auth)
  }

  // manage user and see user info
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      isLoading(false)

      if(user){
        const {email, displayname, photoUrl} = user;
        const userData = {
          email, username: displayname, photo: photoUrl
        }
      }
    })

    return () => unsubscribe()
  }, [])

  const value = {
    currentUser,
    loading,
    registerUser,
    loginUser,
    signInWithGoogle,
    signInWithGitHub,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
