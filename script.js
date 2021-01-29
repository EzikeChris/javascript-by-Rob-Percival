document.getElementById("text").innerHTML = "Welcome";
// this automatically gets the id assigned to the element and changes the text to a new text

document.getElementById("mybutton").onclick = function() {
    document.getElementById("text").innerHTML = "Thank You";
    // this assigns a button on the pages and changes the text on the page based on the button on that page
}

