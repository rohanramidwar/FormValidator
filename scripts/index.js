var uStr = "";
const u_input = document.getElementById("u-i");
const u_error_msg = document.getElementById("u-error-msg");
const u_valid = document.getElementById("u-valid?")

var pwStr = "";
const pw_input = document.getElementById("pw-i");
const pw_error_msg = document.getElementById("pw-error-msg");
const pw_v = document.getElementById("pw-visibility")

const continueBtn = document.getElementById("continueBtn")


function usernameCondition()
{
    uStr = u_input.value ;
    u_error_msg.style.display = "block";
    u_valid.style.display = "block"

    if(1 < uStr.length && uStr.length < 10) {
        u_input.style.border = "1px solid #0079d3";
        u_error_msg.innerHTML = "Nice! Username available"
        u_error_msg.style.color = "#0079d3"
        u_valid.innerHTML = "check"
        u_valid.style.color = "green"
        u_valid.style.fontSize = "20px"
    }
    else
    {
        u_input.style.border = "1px solid #ea0027";
        u_error_msg.innerHTML = "Username must be between 3 and 10 characters"
        u_error_msg.style.color = "#ea0027"
        u_valid.innerHTML = "priority_high"
        u_valid.style.color = "#ea0027"
        u_valid.style.fontSize = "16px"

    }
    console.log(uStr)
    processContinue()
}

function passwordCondition()
{
    pwStr = pw_input.value;
    pw_error_msg.style.display = "block";

    if(pwStr.length < 7) {
        pw_input.style.border = "1px solid #ea0027";
        pw_error_msg.innerHTML = "Password must be at least 8 character long"
        pw_error_msg.style.color = "#ea0027"
    }
    else
    {
        pw_input.style.border = "1px solid #0079d3";
        pw_error_msg.style.display = "none";
    }
    console.log(pwStr)
    processContinue()
}

function pw_visibility()
{
    setTimeout(() => {
        pw_input.type = "password";
        pw_v.innerHTML = "visibility"
    }, 250)
    pw_v.innerHTML = "visibility_off"
    pw_input.type = "text";
}

function processContinue()
{
    uStr = u_input.value ;
    pwStr = pw_input.value;
    if(1 < uStr.length && uStr.length < 10)
    {
        if(pwStr.length > 6)
        {
            continueBtn.style.opacity = "100%"
        }
        else
        {
            continueBtn.style.opacity = "40%"
        }
    }
    else
        {
            continueBtn.style.opacity = "40%"
        }
}