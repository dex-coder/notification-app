importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');



const firebaseConfig={
    apiKey: "AIzaSyAPZilmx-qzzq_yBX3E5ZOvrKkQ2up4bOs",
    authDomain: "notificationapp-8d819.firebaseapp.com",
    projectId: "notificationapp-8d819",
    storageBucket: "notificationapp-8d819.appspot.com",
    messagingSenderId: "1061976089456",
    appId: "1:1061976089456:web:e74fed44cd89e2369c25b5"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();
