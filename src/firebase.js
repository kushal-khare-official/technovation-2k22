import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth'

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
const googleProvider = new GoogleAuthProvider()
const messaging = getMessaging(app)

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user

    const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/users', {
      method: 'GET',
      headers: {
        rid: user.uid,
      },
    })
    const data = await response.json()

    if (data.error === 'User Not Found') {
      const formData = {
        uid: user.uid,
        name: user.displayName,
        userType: 'participant',
        collegeType: 'college',
        mobile_number: 1000000000,
      }
      fetch(process.env.REACT_APP_BACKEND_URL + '/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
    }
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user

    const formData = {
      uid: user.uid,
      name: name,
      userType: 'participant',
      collegeType: 'college',
      mobile_number: 1000000000,
    }
    fetch(process.env.REACT_APP_BACKEND_URL + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
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
  signOut(auth).then(() => next())
}

const subscribe = async () => {
  try {
    const permission = await Notification.requestPermission()
    if (permission !== 'granted') return
    const currentToken = await getToken(messaging, {
      vapidKey:
        'BGNIbMxAWVHhGFWyTJcRw5t9JD-WYzfqHc6Dx4518PwOuXTOqkef6cCSF4AVN5KICJIgtn5FQqZOjwrAup3V3r4',
    })
    if (currentToken) {
      console.log('currentToken: ', currentToken)

      await fetch(process.env.REACT_APP_BACKEND_URL + '/notify/new-device', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: currentToken,
        }),
      })

      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload)
        alert('Message received. ')
        return payload
      })
    } else {
      console.log(
        'No registration token available. Request permission to generate one.'
      )
    }
  } catch (err) {
    console.log('An error occurred while retrieving token. ', err)
  }
}

export {
  analytics,
  auth,
  subscribe,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
}
