

document.querySelectorAll(".carousel").forEach(element => {
    const items =element.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items, () => {

      return `<span class="carousel-button"></span>`;     
    });

    element.insertAdjacentHTML( 'beforeend', `
    <div class="carousel-nav"> 
    ${ buttonsHtml.join("") }
    </div>
    `);
    const buttons = element.querySelectorAll(".carousel-button");

    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        items.forEach(item => item.classList.remove("item-selected"));
        buttons.forEach(button => button.classList.remove("button-selected"));
        items[i].classList.add("item-selected");
        button.classList.add("button-selected");
      });
    });
 
        items[0].classList.add("item-selected");
        buttons[0].classList.add("button-selected");
  }); 
  const image = document.getElementById('myImage');
  const button = document.getElementById('changeImage');

  button.addEventListener('click', () => {
      image.src = 'new_image.jpg';
      image.classList.add('clicked');
  });

  


  const gameListItems = document.querySelectorAll('.game-item');
  const gameImages = document.querySelectorAll('.game-image');
  
  function showImage(imageName) {
    gameImages.forEach((image) => {
      if (image.getAttribute('src') === `images/${imageName}.jpg`) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }
  
  gameListItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      showImage(item.dataset.gameImage);
      gameImages.forEach((image) => {
        if (image.style.display === 'block' && image.src.indexOf(item.dataset.gameImage) === -1) {
          image.style.display = 'none';
        }
      });
    });
  });
  

  showImage(gameListItems[0].dataset.gameImage);