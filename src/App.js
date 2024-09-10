import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import { requestFCMToken } from './utils/firebaseUtils';

function App() {
  const [fcmToken, setFcmToken] = useState(null);
  useEffect(()=>{
    console.log(fcmToken)
    const fetchFCMToken = async () => {
      try{
        const token = await requestFCMToken();
        setFcmToken(token);
        console.log(token)
      }catch(err){
        console.error("Error getting FCM token:", err)
      }
    }
    fetchFCMToken()
  })

  return (
  <>
    <div className='container firebase-form p-4'>
      <div className='row'>
        {fcmToken && ( 
            <div className='col-md-12 mb-4'>
              <div className='alert alert-info'>
              <strong>FCM Token: </strong>
              {fcmToken}
              </div>
            </div>
          )}
      </div>
    </div>
  </>
  );
}

export default App;
