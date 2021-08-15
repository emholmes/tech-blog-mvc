async function signupUser(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST", 
      body: JSON.stringify({
        username,
        password
      }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      console.log("Success");
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".signup-form").addEventListener("submit", signupUser);

async function loginUser(event) {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".login-form").addEventListener("submit", loginUser);

// switch between signup and login forms
const signupSection = document.querySelector(".signup-section");
const loginSection = document.querySelector(".login-section"); 

function signupInstead() {
  signupSection.style.display = "block";
  loginSection.style.display = "none";
}

document.querySelector("#signup-instead").addEventListener("click", signupInstead);

function loginInstead() {
  signupSection.style.display = "none";
  loginSection.style.display = "block";
}

document.querySelector("#login-instead").addEventListener("click", loginInstead);