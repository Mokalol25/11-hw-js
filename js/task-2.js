function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    const price = words.length * pricePerWord;
    return price;
}

const message = prompt("Write sentence");
const pricePerWord = 10;
const totalPrice = calculateEngravingPrice(message, pricePerWord);
console.log(totalPrice)