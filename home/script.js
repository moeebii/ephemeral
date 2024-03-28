document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".images img");
  let imageAltBox = null;

  images.forEach(image => {
    image.addEventListener("mouseover", function(event) {
      const altText = this.getAttribute("alt");
      showImageAltBox(event.clientX, event.clientY, altText);
    });

    image.addEventListener("mouseout", function() {
      hideImageAltBox();
    });
  });

  function showImageAltBox(x, y, altText) {
    if (!imageAltBox) {
      imageAltBox = document.createElement("div");
      imageAltBox.classList.add("image-alt-box");
      document.body.appendChild(imageAltBox);
    }

    imageAltBox.innerText = altText;
    imageAltBox.style.top = y + "px";
    imageAltBox.style.left = x + "px";
    imageAltBox.style.display = "block";
  }

  function hideImageAltBox() {
    if (imageAltBox) {
      imageAltBox.style.display = "none";
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".images img");
  let imageAltBox = null;

  images.forEach(image => {
    image.addEventListener("mouseover", function(event) {
      const altText = this.getAttribute("alt");
      showImageAltBox(event.clientX, event.clientY, altText);
    });

    image.addEventListener("mouseout", function() {
      hideImageAltBox();
    });
  });

  function showImageAltBox(x, y, altText) {
    if (!imageAltBox) {
      imageAltBox = document.createElement("div");
      imageAltBox.classList.add("image-alt-box");
      document.body.appendChild(imageAltBox);
    }

    imageAltBox.innerText = altText;
    imageAltBox.style.top = y + "px";
    imageAltBox.style.left = x + "px";
    imageAltBox.style.display = "block";
  }

  function hideImageAltBox() {
    if (imageAltBox) {
      imageAltBox.style.display = "none";
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const posters = document.querySelectorAll(".images div");
  
  posters.forEach(poster => {
    poster.addEventListener("dragstart", function(event) {
      event.dataTransfer.setData("text/plain", event.target.id);
    });

    poster.addEventListener("dragover", function(event) {
      event.preventDefault();
    });

    poster.addEventListener("drop", function(event) {
      event.preventDefault();
      const data = event.dataTransfer.getData("text/plain");
      const draggedElement = document.getElementById(data);
      this.appendChild(draggedElement);
    });
  });
});


