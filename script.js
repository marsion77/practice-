document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Password should be fixed as 12345
    if(password === "12345") {
        message.style.color = "green";
        message.textContent = `Welcome ${email}! Login Successful.`;
        // Here you can redirect to dashboard or next page
        // window.location.href = "dashboard.html";
    } else {
        message.style.color = "red";
        message.textContent = "Incorrect password. Please try again!";
    }
});
