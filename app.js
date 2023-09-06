// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-4KZBv1lVUwTnbhqX9RICPfEI3f-61w8",
  authDomain: "instagram-110a6.firebaseapp.com",
  projectId: "instagram-110a6",
  storageBucket: "instagram-110a6.appspot.com",
  messagingSenderId: "668427479695",
  appId: "1:668427479695:web:a373e09f3505d99e5e5efa"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log(firebase)

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
console.log(auth)

class App {
  constructor() {

    this.$app = document.querySelector("#app")
    this.$firebaseContainer = document.querySelector("#firebaseui-auth-container")
    this.$app.style.display = "none"

    this.ui = new firebaseui.auth.AuthUI(auth);
    this.handleAuth()
  }

  handleAuth() {
    this.ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Other config options...
    });
  }
}

const appl = new App()