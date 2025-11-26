async function loadUsers() {
    const response = await fetch("http://localhost:5000/api/users");
    const users = await response.json();

    const tableBody = document.querySelector("#usersTable tbody");
    tableBody.innerHTML = "";

    users.forEach(user => {
        const row = `
            <tr>
                <td>${user.fullname}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.address}</td>
                <td>
                    <button onclick="goToUpdate(${user.id})">Update</button>
                    <button onclick="deleteUser(${user.id})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

async function deleteUser(id) {
    if (!confirm("Are you sure you want to delete?")) return;

    const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        alert("User deleted");
        loadUsers();
    }
}

function goToUpdate(id) {
    window.location.href = `update.html?id=${id}`;
}

loadUsers();
