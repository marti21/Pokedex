import firebase from 'firebase/compat/app' // Importa firebase/compat/app en lugar de 'firebase/app'
import 'firebase/compat/auth'
import 'firebase/firestore'
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAEgbgup0gfFJePdU3laYX39oB9rVMUL0I',
  authDomain: 'martiappnextjs.firebaseapp.com',
  projectId: 'martiappnextjs',
  storageBucket: 'martiappnextjs.appspot.com',
  messagingSenderId: '1081296308550',
  appId: '1:1081296308550:web:1af33d61c3acf13937bd47',
  measurementId: 'G-SBYTXWWNVN'
}

!firebase.apps.length &&
    firebase.initializeApp(firebaseConfig)

const database = firebase.firestore()

export const mapUserFromFirebaseAuth = (user) => {
  console.log(user);
  const { displayName, email, photoURL, uid } = user
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid
  }
}

export const onAuthStateChangedUser = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
      onChange(normalizedUser)
    })
}

export const loginWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return firebase
      .auth()
      .signInWithRedirect(googleProvider)
      // return firebase.auth().signInWithRedirect(githubProvider)
      // .then(user => {
    //  return mapUserFromFirebaseAuth(user)
      // })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}

export const loginWithEmailAndPassword = (email, password, setMessage) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password).then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      setMessage(errorMessage);
      // ..
    });
}

export const userLogout = () => {
  return firebase.auth().signOut()
}


export const createUser = (email, password, setMessage) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    setMessage(errorMessage)
  });
}

export const updateUser = (username) => {
  const user = firebase.auth().currentUser;
  
  // Actualiza el nombre del usuario
  user.updateProfile({
    displayName: username,
    /*photoURL: "https://i0.wp.com/blog.indiegala.com/wp-content/uploads/2021/09/cover-4.jpg?fit=1200%2C900&ssl=1"*/
  })
    .then(() => {
      // Actualización exitosa
      console.log('Nombre de usuario actualizado');
    })
  .catch((error) => {
      // Error al actualizar el nombre del usuario
      console.error('Error al actualizar el nombre de usuario:', error);
  });
  
}

/*
export const recoverUserPassword = (emailAdress) => {
  return firebase.auth().sendPasswordResetEmail("mrtxaver@gmail.com").then().then(function() {
    // Correo electrónico de restablecimiento de contraseña enviado.
    console.log("Correo electrónico de restablecimiento de contraseña enviado.");
  }).catch(function(error) {
    // Ocurrió un error al enviar el correo electrónico.
    console.log("Error al enviar el correo electrónico de restablecimiento de contraseña:", error);
  });
}
*/