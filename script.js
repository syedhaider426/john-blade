// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Setting up the draw function
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
        }
    }
}

// Loop the animation
setInterval(draw, 33);

const icon = document.getElementById('togglePassword');
let password = document.getElementById('password');

/* Event fired when <i> is clicked */
icon.addEventListener('click', function() {
    if(password.type === "password") {
        password.type = "text";
        icon.classList.add("fa-eye-slash");
        icon.classList.remove("fa-eye");
    }
    else {
        password.type = "password";
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
    }
});

// Get the button element by its ID
var button = document.getElementById("blueButton");

// Add a click event listener
button.addEventListener("click", function() {
    if (password.value === "peepee-poopoo-caca-doodoo") {
        alert("Eat those fkin donuts....one...last...time. Here is your Krispy Kreme code: 123456789 (yes it actually works, but this message will self-destruct in 5 light years. But seriously, don't eat too many donuts.)");
    }
});
