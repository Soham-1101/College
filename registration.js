document.addEventListener("DOMContentLoaded", function() {
    const registerButton = document.querySelector("button");
    let registeredUsers = []; // This will store registered users' credentials

    registerButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        const userId = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const confirmPassword = document.querySelector("#re").value;
        const dob = document.querySelector("#dob").value;

        // Check if any field is empty
        if (userId === "" || email === "" || password === "" || confirmPassword === "" || dob === "") {
            alert("Please fill all fields");
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Check if user is already registered
        const isUserRegistered = registeredUsers.some(user => user.userId === userId && user.email === email);
        if (isUserRegistered) {
            alert("User already registered");
            return;
        }

        // Register the new user
        registeredUsers.push({ userId, email, password, dob });
        alert("Student has been registered");
    });
});

