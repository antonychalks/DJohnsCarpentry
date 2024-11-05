function arrowLeft(e) {
  console.log("Button Clicked");
  let galleryImage = e.currentTarget.closest('.gallery-img');
  console.log(galleryImage);
  let images = galleryImage.querySelectorAll('img');
  console.log(images);

  for (let i = 0; i < images.length; i++) {
    let order = parseInt(images[i].style.order);
    console.log(order);

    // Recalculate the order
    if (order === 1) {
      console.log(images.length);
      order = images.length;
    } else {
      order = order - 1;
    }

    // Set the new order to the image style
    images[i].style.order = order;

    if (images[i].style.order === "1"){
      images[i].style.opacity = "1";
    } else if (images[i].style.order === "2") {
      images[i].style.opacity = "0.5";
    } else if (images[i].style.order === "3") {
      images[i].style.opacity = "0.25";
    } else if (images[i].style.order === "4") {
      images[i].style.opacity = "0.05";
    } else {
      images[i].style.opacity = "0";
    }
  }
}

function arrowRight(e) {
  let galleryImage = e.currentTarget.closest('.gallery-img');
  let images = galleryImage.querySelectorAll('img');

  for (let i = 0; i < images.length; i++) {
    let order = parseInt(images[i].style.order);
    // Recalculate the order
    if (order === images.length) {
      order = "1";
    } else {
      order = order + 1;
    }

    // Set the new order to the image style
    images[i].style.order = order;

    if (images[i].style.order === "1"){
      images[i].style.opacity = "1";
    } else if (images[i].style.order === "2") {
      images[i].style.opacity = "0.5";
    } else if (images[i].style.order === "3") {
      images[i].style.opacity = "0.25";
    } else if (images[i].style.order === "4") {
      images[i].style.opacity = "0.05";
    } else {
      images[i].style.opacity = "0";
    }
  }
}
