
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    
    if (username && email && password && confirmPassword) {
        if (password === confirmPassword) {
            
            const user = {
                username: username,
                email: email,
                password: password 
            };

            
            localStorage.setItem('user', JSON.stringify(user));

            document.getElementById('message').textContent = 'Sign up successful!';
            window.location.href = 'index.html'
            document.getElementById('signupForm').reset(); 
        } else {
            document.getElementById('message').textContent = 'Passwords do not match.';
        }
    } else {
        document.getElementById('message').textContent = 'Please fill in all fields.';
    }
});


