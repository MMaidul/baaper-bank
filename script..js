document.getElementById('login-submit').addEventListener('click', e => {

    //getUserEmail;
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //getUserPassword;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // checkConfirmEmail&Password;
    if (userEmail === 'sontan@gamil.com' && userPassword === 'kihrehbeta') {
        window.location.href = 'banking.html';
    }

})