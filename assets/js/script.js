document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll("[id^=card-]");
    cards.forEach(function(card) {
        card.addEventListener("mouseover", cardMouseOver);
        card.addEventListener("mouseout", cardMouseOut);
        card.addEventListener("click", cardClick);
    });
});

function cardMouseOver(e) {
    let cardInfo = e.currentTarget.querySelector(".card-info");
    if (cardInfo) {
        cardInfo.classList.remove("d-none");
    }
}

function cardMouseOut(e) {
    let cardInfo = e.currentTarget.querySelector(".card-info");
    if (cardInfo) {
        cardInfo.classList.add("d-none");
    }
}

function cardClick(e){
    location.replace("/gallery.html");
}
