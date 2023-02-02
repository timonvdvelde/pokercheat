"use strict";

function toggleCheat(_) {
    const flippedCards = document.querySelectorAll("div.flip-card-transform");

    if (flippedCards.length > 0) {
        for (let i = 0; i < flippedCards.length; i++) {
            flippedCards[i].classList.remove("flip-card-transform");
        }
    }
    else {
        const hiddenCards = document.querySelectorAll("div.flip-card");
        for (let i = 0; i < hiddenCards.length; i++) {
            hiddenCards[i].classList.add("flip-card-transform");
        }
    }
}

browser.runtime.onMessage.addListener(toggleCheat);
