const urlArray = window.location.toString().split("/");
const a = document.querySelector("h1 a");

if (urlArray.indexOf("dashboard") === -1) {
  a.href = "/";
  a.innerHTML = "Tech Blog";
} else {
  a.href = "/dashboard";
  a.innerHTML = "Your Dashboard";
}
