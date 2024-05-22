import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          window.location.href = "/";
        })
        .catch((error) => {
          alert("Error logging in: " + error.message);
        });
    });
  }
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;

      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Error registering:", error);
          alert("Error registering: " + error.message);
        });
    });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in:");
    } else {
      console.log("No user is signed in.");
    }
  });
});
