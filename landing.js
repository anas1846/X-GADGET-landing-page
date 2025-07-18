let newbutton = document.querySelector(".button");
let newinput = document.querySelector("input");
let newsubmit = document.querySelector(".submitbutton");
let newabout = document.querySelector(".about");

let newemail = document.createElement("p");
newemail.innerText = "The email is not valid";
newemail.style.color = "red";

newbutton.addEventListener("click", () => {
    
    if (newemail.parentNode) {
        newemail.parentNode.removeChild(newemail);
    }
    if (newinput.value.endsWith("@gmail.com")) {
        alert("You are signup in: " + newinput.value);
    } else {
        
        newinput.parentNode.insertBefore(newemail, newinput.nextSibling);
    }
});

newsubmit.addEventListener("click", () => {
    newabout.scrollIntoView({ behavior: "smooth" });
});


