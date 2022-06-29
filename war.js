import Deck from "./deck.js"

const coumputerCardSlot = document.querySelector(".computer-card-slot")

const deck = new Deck()
deck.shuffle()

coumputerCardSlot.appendChild(deck.cards[0].getHTML())
