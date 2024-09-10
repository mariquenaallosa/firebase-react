/* eslint-env serviceworker */
/* global firebase */

// Importar Firebase en el contexto de Service Worker

importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD031RSgXWcwImo5lo8SYBBJb3LAjMWA48",
    authDomain: "fir-conectando.firebaseapp.com",
    projectId: "fir-conectando",
    storageBucket: "fir-conectando.appspot.com",
    messagingSenderId: "711145368604",
    appId: "1:711145368604:web:46d3ddbad150d6d14943d9",
    measurementId: "G-DXM1VF2DCS"
  };

// Inicializa Firebase en el contexto del Service Worker
firebase.initializeApp(firebaseConfig);

// Inicializa el servicio de mensajería
const messaging = firebase.messaging();

// Maneja los mensajes recibidos en segundo plano
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.'
    };
  
    registration.showNotification(notificationTitle,
      notificationOptions);
  });