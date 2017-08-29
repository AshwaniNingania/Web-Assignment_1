var d =Date.now();

function display() {
    console.log("Callback Function.")
}
function setTimeoutSync(display,n) {
    console.log("in..");
    while(Date.now() < d+n);
    display();
    console.log("out..");
}

var n = 5000;

setTimeoutSync(display,n);