
function addColors() {

    let colorsElement = document.getElementById("colors");
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            colorsElement.innerHTML = "" ;
            let data = JSON.parse(this.responseText);
            let colors =data.data;
            console.log(colors);
            colors.forEach(color => {
                let colorElement = document.createElement("div");
                let name = document.createElement("h2");
                let year = document.createElement("h2");
                let color_box = document.createElement("div");
                color_box.style.width="150px";
                color_box.style.height="150px";
                color_box.style.backgroundColor=color.color;
                name.innerText=color.name;
                year.innerText=color.year;
                colorElement.appendChild(name);
                colorElement.appendChild(year);
                colorElement.appendChild(color_box);
                colorElement.classList.add("card");
                colorsElement.appendChild(colorElement);

                
                
            });
            
            

        }
        else if (this.readyState != 4) {
            colorsElement.innerHTML = "Loading..." ;
        }
        else {
            colorsElement.innerHTML = "something went wrong";
        }
    }
    ajax.open("GET", "https://reqres.in/api/unknown", true);
    ajax.send();



}

if (Cookies.get("token") == undefined) {
    document.getElementById("greetings").style.display = "none";
    document.getElementById("logout").style.display="none";
}
else {
    document.getElementById("notloggedin").style.display = "none";
    document.getElementById("greetings").innerText = "Welcome " + Cookies.get("email");
    addColors();
}

document.getElementById("login").addEventListener("click",function(){
    window.open("index.html","_self");
})

document.getElementById("logout").addEventListener("click",function(){
    Cookies.remove("token");
    Cookies.remove("email");
    window.open("index.html","_self")
})






