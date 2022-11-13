import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCjYiqnaZx4hOh7qXbv-r7IXoRBHbKZ4zo",
    authDomain: "ecommerce-2021-f8ba8.firebaseapp.com",
    projectId: "ecommerce-2021-f8ba8",
    storageBucket: "ecommerce-2021-f8ba8.appspot.com",
    messagingSenderId: "16465914204",
    appId: "1:16465914204:web:901f4336d1d689ccf1f999"
  };

  //iniciando firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //creamos el objeto autenticacion que es el que nos va a permitir la autenticacion
  const auth = firebase.auth();

  export { auth };