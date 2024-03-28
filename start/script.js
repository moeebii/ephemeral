const text = document.getElementById("typewriter").innerText;
document.getElementById("typewriter").innerText = "";

let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, Math.random() * 150); // Adjust typing speed
  }
}

typeWriter(); // Start typing
