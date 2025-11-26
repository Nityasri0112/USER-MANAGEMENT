document.getElementById("registerForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const user = {
        fullname: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value
    };

    const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });

    if (response.ok) {
        alert("User registered successfully!");
        document.getElementById("registerForm").reset();
    } else {
        alert("Registration failed");
    }
});
