const apiUrl = "http://localhost:5000/api";

document.getElementById("login-link").addEventListener("click", showLogin);
document.getElementById("register-link").addEventListener("click", showRegister);
document.getElementById("contact-link").addEventListener("click", showContact);
document.getElementById("home-link").addEventListener("click", showHome);

function showLogin() {
  document.getElementById("content").innerHTML = `
    <h2>Login</h2>
    <form id="loginForm">
      <input type="email" id="loginEmail" placeholder="Email" required/>
      <input type="password" id="loginPassword" placeholder="Password" required/>
      <button type="submit">Login</button>
    </form>
  `;

  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch(apiUrl + "/auth/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
      })
    });
    const data = await res.json();
    alert(data.message);
  });
}

function showRegister() {
  document.getElementById("content").innerHTML = `
    <h2>Register</h2>
    <form id="registerForm">
      <input type="text" id="registerName" placeholder="Full Name" required/>
      <input type="email" id="registerEmail" placeholder="Email" required/>
      <input type="password" id="registerPassword" placeholder="Password" required/>
      <button type="submit">Register</button>
    </form>
  `;

  document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch(apiUrl + "/auth/register", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: document.getElementById("registerName").value,
        email: document.getElementById("registerEmail").value,
        password: document.getElementById("registerPassword").value
      })
    });
    const data = await res.json();
    alert(data.message);
  });
}

function showContact() {
  document.getElementById("content").innerHTML = `
    <h2>Contact Us</h2>
    <p>WhatsApp: <a href="https://wa.me/2349134390396" target="_blank">+2349134390396</a></p>
    <p>Email: <a href="mailto:aaboy.org@gmail.com">aaboy.org@gmail.com</a></p>
    <p>Live Chat: (Coming Soon)</p>
  `;
}

function showHome() {
  document.getElementById("content").innerHTML = `
    <h2>Welcome to Grow Wealth Investment</h2>
    <p>Invest in our plans and grow your money.</p>
  `;
}