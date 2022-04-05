import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { query, collection, getDocs, where } from 'firebase/firestore'
import { Avatar } from '@mui/material'

import './Dashboard.css'
import { auth, db, logout } from '../firebase.js'

function Dashboard() {
  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState('')
  const [photoURL, setPhotoURL] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, 'users'), where('uid', '==', user?.uid))
        const doc = await getDocs(q)
        const data = doc.docs[0].data()
        setName(data.name)
        setPhotoURL(user.providerData[0].photoURL)
      } catch (err) {
        console.error(err)
        alert('An error occured while fetching user data')
      }
    }

    if (loading) return
    if (error) return
    if (!user) return navigate('/')

    fetchUserName()
  }, [user, error, loading, navigate])

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <Avatar alt={name} src={photoURL} />
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  )
}
export default Dashboard
