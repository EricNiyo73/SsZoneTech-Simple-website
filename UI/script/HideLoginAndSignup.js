function checkAuthentication() {
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn === "true";
}
function redirectToLoginPage() {
  window.location.href = "/UI/index.html";
}

function checkAccessToAdminPage() {
  if (checkAuthentication()) {
    redirectToLoginPage();
  }
}

checkAccessToAdminPage();
