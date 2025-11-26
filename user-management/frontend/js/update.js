// Get user ID from URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");
document.getElementById("userId").value = userId;

async function loadUser() {
    const response = await fetch(`http://localhost:3000/users/${userId}`);
    const user = await response.json();

    document.getElementById("fullname").value = user.full_name;
    document.getElementById("email").value = user.email;
    document.getElementById("phone").value = user.phone;
    document.getElementById("address").value = user.address;
}

document.getElementById("updateForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const updatedUser = {
        full_name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value
    };

    const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser)
    });

    if (response.ok) {
        alert("User updated successfully!");
        window.location.href = "users.html";
    } else {
        alert("Update failed");
    }
});

loadUser();

