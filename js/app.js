function postLogin() {

    let email = document.getElementById("email").value;
    let pass= document.getElementById("pass").value;

    let login = {
        email: email,
        password: pass
    };
    
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            console.log(this.responseText);
            let token = JSON.parse(this.responseText);
            Cookies.set("email",email);
            Cookies.set("token",token.token);
            window.open("home.html","_self");
            
        }
        else if(this.readyState != 4){
          //there is nothing to show 
        }
        else{
            let err = document.createElement("div");
            err.innerText = "your username or password is not correct";
            err.classList.add("alert");
            err.classList.add("alert-danger");
            document.querySelector("body").appendChild(err);
        }
    }
    ajax.open("POST", "https://reqres.in/api/login/", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(login));


}


login_button = document.getElementById("login");
login_button.addEventListener("click",postLogin);

// if the user didn't logout don't ask him to login again
if(Cookies.get("token") !== undefined){
    window.open("home.html","_self")
}


