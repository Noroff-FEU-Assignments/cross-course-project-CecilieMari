
/*function myFunction() {
    document.getElementById("myDropdown") .classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches(".dropbutton")) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains("show")) {
            myDropdown.classList.remove("show");
        }
    }
} */

function show() {
    var courses = document.getElementById("courses_id");

    if (courses.style.display == "block") {
        courses.style.display = "none";
    } else {
        courses.style.display = "block";
    }
}

window.onclick = function (event) {
    if (!event.target.matches( ".dropbutton")) {
        document.getElementById("courses_id") 
        .style.display = "none";
    }
}

