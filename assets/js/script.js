document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll("[id^=card-]");
    cards.forEach(function(card) {
        card.addEventListener("mouseover", cardMouseOver);
        card.addEventListener("mouseout", cardMouseOut);
        card.addEventListener("click", cardClick);
    });

    const serviceButtons =  document.querySelectorAll("[class^=service-buttons]")
        serviceButtons.forEach(function(button) {
        button.addEventListener("mouseover", buttonMouseOver);
        button.addEventListener("mouseout", buttonMouseOut);
        // button.addEventListener("click", buttonClick);
    });
});

function cardMouseOver(e) {
    let cardInfo = e.currentTarget.querySelector(".card-info");
    if (cardInfo) {
        cardInfo.classList.remove("d-md-none");
    }
}

function cardMouseOut(e) {
    let cardInfo = e.currentTarget.querySelector(".card-info");
    if (cardInfo) {
        cardInfo.classList.add("d-md-none");
    }
}

function cardClick(e){
    location.replace("/gallery.html");
}

function buttonMouseOver(e){
    let button = e.currentTarget
    button.click();
    button.classList.add("active")
}

function buttonMouseOut(e){
    let button = e.currentTarget
    button.classList.remove("active")
}
