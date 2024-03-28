const data = [
    {
        "name": "foundation",
        "owner": "karissa",
        "assets": "kar1.png"
    },

    {
        "name": "foundation",
        "owner": "karissa",
        "assets": "kar2.png"
        
    },

    {
        "name": "eyeshadow",
        "owner": "karissa",
        "assets": "kar3.png"
    },


    {
        "name": "lips",
        "owner": "karissa",
        "assets": "kar4.png"
    },

    {
        "name": "lips",
        "owner": "karissa",
        "assets": "kar5.png"
    },
    {
        "name": "lips",
        "owner": "karissa",
        "assets": "kar6.png"
    },
    {
        "name": "blush",
        "owner": "karissa",
        "assets": "kar7.png"
    },

    {
        "name": "foundation",
        "owner": "moe",
        "assets": "moe1.png"
    },

    {
        "name": "foundation",
        "owner": "moe",
        "assets": "moe2.png"
        
    },

    {
        "name": "foundation",
        "owner": "moe",
        "assets": "moe3.png"
    },


    {
        "name": "contour",
        "owner": "moe",
        "assets": "moe4.png"
    },

    {
        "name": "eyeshadow",
        "owner": "moe",
        "assets": "moe5.png"
    },
    {
        "name": "eyeliner",
        "owner": "moe",
        "assets": "moe6.png"
        
    },

    {
        "name": "lashes",
        "owner": "moe",
        "assets": "moe7.png"
    },


    {
        "name": "lips",
        "owner": "moe",
        "assets": "moe8.png"
    },

    {
        "name": "blush",
        "owner": "moe",
        "assets": "moe9.png"
    },


    {
        "name": "foundation",
        "owner": "maanya",
        "assets": "maa1.png"
    },

    {
        "name": "contour",
        "owner": "maanya",
        "assets": "maa2.png"
    },

    {
        "name": "blush",
        "owner": "maanya",
        "assets": "maa3.png"
    },
    {
        "name": "brows",
        "owner": "maanya",
        "assets": "maa4.png"
    },
    {
        "name": "eyeshadow",
        "owner": "maanya",
        "assets": "maa5.png"
    },

    {
        "name": "lashes",
        "owner": "maanya",
        "assets": "maa6.png"
    },
    {
        "name": "lips",
        "owner": "maanya",
        "assets": "maa7.png"
    },

    {
        "name": "lips",
        "owner": "maanya",
        "assets": "maa8.png"
    },

    {
        "name": "lips",
        "owner": "maanya",
        "assets": "maa9.png"
    },

        {
        "name": "lashes",
        "owner": "maanya",
        "assets": "maa10.png"
    },

    {
        "name": "foundation",
        "owner": "holly",
        "assets": "holly1.png"
    },

    {
        "name": "foundation",
        "owner": "holly",
        "assets": "holly2.png"
    },
    {
        "name": "eyeshadow",
        "owner": "holly",
        "assets": "holly3.png"
    },
    {
        "name": "eyeliner",
        "owner": "holly",
        "assets": "holly4.png"
    },
    {
        "name": "eyeshadow",
        "owner": "holly",
        "assets": "holly5.png"
    },
    {
        "name": "lips",
        "owner": "holly",
        "assets": "holly6.png"
    },
    {
        "name": "blush",
        "owner": "holly",
        "assets": "holly7.png"
    },
    {
        "name": "contour",
        "owner": "holly",
        "assets": "holly8.png"
    }



];

const filters = {
  "karissa": true,
  "moe": true,
  "maanya": true,
  "holly":true,
  "foundation": true,
  "eyeshadow": true,
  "lips": true,
  "blush": true,
  "contour": true,
  "eyeliner": true,
  "lashes": true,
  "brows": true
};

function toggleFilter(filter) {
  filters[filter] = !filters[filter];
  updateImages();
  
  const button = document.querySelector(`button[data-filter='${filter}']`);
  button.classList.toggle("crossed-out");
}


function updateImages() {
  const imagesDiv = document.getElementById("images");
  imagesDiv.innerHTML = ""; // Clear existing images

  data.forEach(item => {
    if (filters[item.owner] && filters[item.name]) {
      const img = document.createElement("img");
      img.src = item.assets;
      imagesDiv.appendChild(img);
    }
  });
}

updateImages(); // Initial update
