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
