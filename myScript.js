function changeBackground() {
	document.getElementById("learn").style.backgroundColor = "#962727";
	document.getElementById("learn").innerHTML = "fakty i ciekawostki";
	document.getElementById("learn").style.color = "#d5ceb4";
}
function backToNormal() {
	document.getElementById("learn").style.backgroundColor = "";
	document.getElementById("learn").innerHTML = "<h2>Poznaj</h2>";
	document.getElementById("learn").style.color = "";
}
function changeBackground1() {
	document.getElementById("explore").style.backgroundColor = "#962727";
	document.getElementById("explore").innerHTML = "ciekawe miejsca";
	document.getElementById("explore").style.color = "#d5ceb4";
}
function backToNormal1() {
	document.getElementById("explore").style.backgroundColor = "";
	document.getElementById("explore").innerHTML = "<h2>Zwiedzaj</h2>";
	document.getElementById("explore").style.color = "";
}
function changeBackground2() {
	document.getElementById("admire").style.backgroundColor = "#962727";
	document.getElementById("admire").innerHTML = "zdjęcia stolicy kiedyś i dziś";
	document.getElementById("admire").style.color = "#d5ceb4";
}
function backToNormal2() {
	document.getElementById("admire").style.backgroundColor = "";
	document.getElementById("admire").innerHTML = "<h2>Podziwiaj</h2>";
	document.getElementById("admire").style.color = "";
}

function toggle1() {
    var toggle1 = document.getElementById("toggle1");
    if (toggle1.style.display === "block") {
        toggle1.style.display = "none";
    } else {
        toggle1.style.display = "block";
    }
} 
function toggle2() {
    var toggle2 = document.getElementById("toggle2");
    if (toggle2.style.display === "block") {
        toggle2.style.display = "none";
    } else {
        toggle2.style.display = "block";
    }
} 
function toggle3() {
    var toggle3 = document.getElementById("toggle3");
    if (toggle3.style.display === "block") {
        toggle3.style.display = "none";
    } else {
        toggle3.style.display = "block";
    }
} 
function toggle4() {
    var toggle4 = document.getElementById("toggle4");
    if (toggle4.style.display === "block") {
        toggle4.style.display = "none";
    } else {
        toggle4.style.display = "block";
    }
} 
function toggle5() {
    var toggle5 = document.getElementById("toggle5");
    if (toggle5.style.display === "block") {
        toggle5.style.display = "none";
    } else {
        toggle5.style.display = "block";
    }
} 
function toggle6() {
    var toggle6 = document.getElementById("toggle6");
    if (toggle6.style.display === "block") {
        toggle6.style.display = "none";
    } else {
        toggle6.style.display = "block";
    }
} 
function toggle7() {
    var toggle7 = document.getElementById("toggle7");
    if (toggle7.style.display === "block") {
        toggle7.style.display = "none";
    } else {
        toggle7.style.display = "block";
    }
} 
function toggle8() {
    var toggle8 = document.getElementById("toggle8");
    if (toggle8.style.display === "block") {
        toggle8.style.display = "none";
    } else {
        toggle8.style.display = "block";
    }
} 

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("goback").style.display = "block";
    } else {
        document.getElementById("goback").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function goBack() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


