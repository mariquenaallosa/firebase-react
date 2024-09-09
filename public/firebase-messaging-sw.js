importScripts('https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/10.13.1/firebase-messaging.js')


const firebaseConfig = {
    apiKey: "AIzaSyD031RSgXWcwImo5lo8SYBBJb3LAjMWA48",
    authDomain: "fir-conectando.firebaseapp.com",
    projectId: "fir-conectando",
    storageBucket: "fir-conectando.appspot.com",
    messagingSenderId: "711145368604",
    appId: "1:711145368604:web:46d3ddbad150d6d14943d9",
    measurementId: "G-DXM1VF2DCS"
  };

  firebase.initializeApp(firebaseConfig)

  const messaging = firebase.messaging();