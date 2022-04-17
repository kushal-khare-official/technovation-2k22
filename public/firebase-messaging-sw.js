// importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js')
// importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js')
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js')

const config = {
  apiKey: 'AIzaSyCRA-fNYF6rI8YyVJU5yQj7QXlNecZiiQg',
  authDomain: 'tech-novation.firebaseapp.com',
  databaseURL: 'https://tech-novation.firebaseio.com',
  projectId: 'tech-novation',
  storageBucket: 'tech-novation.appspot.com',
  messagingSenderId: '323281047271',
  appId: '1:323281047271:web:56cbaea62ab3eb9e875c42',
  measurementId: 'G-6YGL2B90YP',
}

firebase.initializeApp(config)

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  )
  return self.registration.showNotification(payload.data.title, {
    body: payload.data.body,
    icon: payload.data.image,
    vibrate: [300, 100, 400],
  })
})

self.addEventListener('notificationclick', (event) => {
  console.log(event)
  return event
})
