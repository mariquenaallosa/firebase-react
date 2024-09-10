import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

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

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Inicializa el servicio de mensajería de Firebase
const messaging = getMessaging(app);
// Función para solicitar el token de FCM
export const requestFCMToken = async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            const token = await getToken(messaging, {
                vapidKey: "BDZXsl6wbsIBUZtySvd3jqY3xXyv1kV6IU5ganJbzhtis3XOLF2JFnRwe_VVHTA9kUgod9C449bdqNxbg0Q4Xrg"
            });
            return token;
        } else {
            throw new Error('Notification permission not granted');
        }
    } catch (error) {
        console.error('Error getting FCM token: ', error);
        throw error;
    }
};
