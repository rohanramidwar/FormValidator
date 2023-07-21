// Username
var usernameStr = "";
var inputUsername = document.getElementById("idOf-i-Username");
var invalidUsername = document.getElementById("invalidUsername");
var check = document.getElementById("idOfCheck");

inputUsername.addEventListener("click", function()
{
    invalidUsername.classList.add("invalid_show");
    check.style.display = "block"
    usernameStr = inputUsername.value;
    if(usernameStr == "")
    {
        check.innerHTML = "priority_high"
        check.style.color = "#ea0027"
        invalidUsername.innerHTML = "Username must be between 3 and 20 characters";
        inputUsername.classList.add("input_red");
        inputUsername.classList.remove("input_blue");
        invalidUsername.classList.add("input_red");
        invalidUsername.classList.remove("input_blue");
    }
    else
    {
        check.innerHTML = "check"
        check.style.color = "#008000"
        invalidUsername.innerHTML = "Nice! Username available";
        inputUsername.classList.remove("input_red");
        inputUsername.classList.add("input_blue");
        invalidUsername.classList.remove("input_red");
        invalidUsername.classList.add("input_blue");
    }
})

// Password
var passwordStr = "";
var inputPassword = document.getElementById("idOf-i-Password");
var invalidPassword = document.getElementById("invalidPassword");

inputPassword.addEventListener("click", function()
{
    passwordStr = inputPassword.value;
    if(passwordStr == "")
    {
        invalidPassword.classList.add("invalid_show");
        invalidPassword.innerHTML = "Password must be between 3 and 20 characters";
        inputPassword.classList.add("input_red");
        inputPassword.classList.remove("input_blue");
        invalidPassword.classList.add("input_red");
        invalidPassword.classList.remove("input_blue");
    }
    else
    {
        invalidPassword.classList.remove("invalid_show"); 
        inputPassword.classList.remove("input_red");
        inputPassword.classList.add("input_blue");
    }
})

