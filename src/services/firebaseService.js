import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAPZilmx-qzzq_yBX3E5ZOvrKkQ2up4bOs",
    authDomain: "notificationapp-8d819.firebaseapp.com",
    projectId: "notificationapp-8d819",
    storageBucket: "notificationapp-8d819.appspot.com",
    messagingSenderId: "1061976089456",
    appId: "1:1061976089456:web:e74fed44cd89e2369c25b5"
  };

  firebase.initializeApp(firebaseConfig);
   const messaging = firebase.messaging();



export function requestPermission() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                    //alert(currentToken)
                    prompt('Token', currentToken)
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}
