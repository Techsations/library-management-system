let loading = document.getElementById("loader");
let userLogin = document.getElementById('userLogin');
let passLogin = document.getElementById('passLogin');

loading.style.display = "none";

function signUpPage() {
    window.location.href = "index.html";
}

let stored = JSON.parse(localStorage.getItem("allUsers"));
console.log(stored);

function logIn() {
    // ev.preventDefault();
    let certifiedUser = stored.find((el)=> el.username == userLogin.value && el.password == passLogin.value);
    console.log(certifiedUser);
    loading.style.display = "block";
    if (!certifiedUser) {
        setTimeout(() => {
            loading.style.display = "none";
        }, 2900);
        setTimeout(() => {
            alert("User Information Incorrect");
        }, 3000);
    }else {
        localStorage.setItem("currentUser", JSON.stringify(certifiedUser));
        setTimeout(() => {
            loading.style.display = "none";
            location.href = "dashboard.html";
        }, 3000);
    }
}