import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCRA-fNYF6rI8YyVJU5yQj7QXlNecZiiQg',
  authDomain: 'tech-novation.firebaseapp.com',
  databaseURL: 'https://tech-novation.firebaseio.com',
  projectId: 'tech-novation',
  storageBucket: 'tech-novation.appspot.com',
  messagingSenderId: '323281047271',
  appId: '1:323281047271:web:56cbaea62ab3eb9e875c42',
  measurementId: 'G-6YGL2B90YP',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async (next) => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const q = query(collection(db, 'users'), where('uid', '==', user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      })
    }
    next()
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}
const logInWithEmailAndPassword = async (email, password, next) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    next()
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
    alert('Password reset link sent!')
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const logout = (next) => {
  signOut(auth)
  next()
}

export {
  analytics,
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
}
