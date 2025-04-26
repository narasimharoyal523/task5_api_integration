document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userList = document.getElementById("userList");

  // Fetch and display all users
  const loadUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();

    userList.innerHTML = '';
    data.forEach(user => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(li);
    });
  };

  // Submit form to add user
  userForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email")
      })
    });

    const result = await res.json();
    alert(result.message);
    userForm.reset();
    loadUsers(); // reload updated list
  });

  loadUsers(); // initial load
});
