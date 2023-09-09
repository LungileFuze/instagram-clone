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
    this.$authUserText = document.querySelector("#auth-user")
    this.$logoutButton = document.querySelector(".logout")

    this.ui = new firebaseui.auth.AuthUI(auth);
    this.handleAuth()
    this.addEventListeners()
  }

  handleAuth() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.redirectToApp()
        console.log(user)
        this.$authUserText.innerHTML = user.displayName
        // var uid = user.uid;
        // ...
      } else {
        this.redirectToAuth()
      }
    });
  }

  handleLogout() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      this.redirectToAuth
    }).catch((error) => {
      // An error happened.
      console.log("ERROR OCCURED", error)
    });
  }

  redirectToApp() {
    this.$firebaseContainer.style.display = "none"
    this.$app.style.display = "block"
  }

  redirectToAuth() {
    this.$firebaseContainer.style.display = "block"
    this.$app.style.display = "none"

    this.ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      // Other config options...
    });
  }

  addEventListeners() {
      this.$logoutButton.addEventListener("click", (event) => {
        this.handleLogout()
      })
  }
}

const appl = new App()