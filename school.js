localStorage.setItem("username", "Stark");
localStorage.setItem("password", "Stark1234");

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      showMessage("Connexion réussie!", "success");
      window.location.href = "http://127.0.0.1:5500/index.html";
    } else {
      showMessage("Nom d'utilisateur ou mot de passe incorrect.", "error");
    }
  });

function showMessage(message, type) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  messageDiv.className = "message " + type;
}
