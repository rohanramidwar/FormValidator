// Username
var usernameStr = "";
var inputUsername = document.getElementById("idOf-i-Username");
var invalidUsername = document.getElementById("invalidUsername");
var check = document.getElementById("idOfCheck");

inputUsername.addEventListener("click", function()
{
    invalidUsername.classList.add("invalid_show")
    usernameStr = inputUsername.value;
    if(usernameStr == "")
    {
        invalidUsername.innerHTML = "Username must be between 3 and 20 characters";
    }
    else
    {
        invalidUsername.innerHTML = "Nice! Username available";
    }
})

// Password
var passwordStr = "";
var inputPassword = document.getElementById("idOf-i-Password");
var invalidPassword = document.getElementById("invalidPassword");
// var check = document.getElementById("idOfCheck");

inputPassword.addEventListener("click", function()
{
    invalidPassword.classList.add("invalid_show")
    passwordStr = inputPassword.value;
    if(usernameStr == "")
    {
        invalidPassword.innerHTML = "Password must be at least 8 characters long";
    }
})