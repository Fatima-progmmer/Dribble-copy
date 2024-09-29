document.getElementById('content').addEventListener('#sign', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username !== 'user' || password !== 'password') {
        document.getElementById('error-message').textContent = "We couldn't find an account matching the username and password you entered. Please check your username and password and try again.";
    } else {
        document.getElementById('error-message').textContent = '';
        alert('Login successful!');
    }
});
