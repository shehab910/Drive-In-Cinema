    var accounts = [];
    var userb = true;
    var emailb = true;
    var passb = true;
    var pass2b = true;
    var currAccountIndex = 1;
    let accountt ={
        username: "blez",
            email: "blezagain",
            password: "a",
            password2: "a"
    }
    accounts.push(accountt)
    function save()
    {
        let account ={
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            password2: document.getElementById('password2').value
        }
        accounts.push(account);
        localStorage.setItem('accountslist', JSON.stringify(accounts));
    }
    
window.onload = function()
{
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
    if (userb && emailb && passb && pass2b === true)
    {
        save();
        document.forms[0].reset();
        clickLogin();
    }

});
}
function clickLogin()
{
    document.getElementById("container").style.display = "none";
    document.getElementById("container2").style.display = "block";
}
function clickReg()
{
    document.getElementById("container").style.display = "block";
    document.getElementById("container2").style.display = "none";
}
function checkInputs() {
    
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    
	if(usernameValue === '') {
        userb = false;
        setErrorFor(username, 'Username cannot be blank');
	} else {
        userb = true;
        setSuccessFor(username);
	}
	
	if(emailValue === '') {
        emailb = false;
        setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
        emailb = false;
        setErrorFor(email, 'Not a valid email');
	} else {
        emailb = true;
        setSuccessFor(email);
	}
	
	if(passwordValue === '') {
        passb = false;
		setErrorFor(password, 'Password cannot be blank');
	} else {
        passb = true;
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
        pass2b = false;
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
        pass2b = false;
		setErrorFor(password2, 'Passwords does not match');
	} else{
        pass2b = true;
		setSuccessFor(password2);
	}
}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
    formControl.className = 'form-control success';
}




 /*   const form2 = document.getElementById('form2');
    const email2 = document.getElementById('login-email');
    const password22 = document.getElementById('login-password');


function checkInputsLogin() {
    
	// trim to remove the whitespaces
    const emailValue = email2.value.trim();
    console.log(email2.value); 
	const passwordValue = password22.value.trim();
    
	if(emailValue === '') {
        setErrorFor2(email2, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
        setErrorFor2(email2, 'Not a valid email');
	} else {
        
        setSuccessFor2(email2);
	}
	if(passwordValue === '') {
		setErrorFor2(password22, 'Password cannot be blank');
	} else {
		setSuccessFor2(password22);
	}
	login();
}


function setErrorFor2(input2, message) {
	const formControl2 = input2.parentElement;
	const small2 = formControl2.querySelector('small');
	formControl2.className = 'form-control error';
    small2.innerText = message;
}

function setSuccessFor2(input2) {
	const formControl2 = input2.parentElement;
    formControl2.className = 'form-control success';
}
*/
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function login()
{
    
    var loginEmail = document.getElementById("login-email").value;
    var loginPass = document.getElementById("login-password").value;
    var isFound = false;
    for(i=0; i < accounts.length ;i++)
    {
        if( loginEmail == accounts[i].email && loginPass == accounts[i].password)
        {
            currAccountIndex = i;
            isFound = true;
            alert("logged in");
            console.log(loginEmail + "      ");
            window.location.href = "home.html";
            break;
        }
    }
    if(!isFound)
    {
        alert("Invalid Input.. try again!");
    }
}

