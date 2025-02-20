function makeTransaction(quantity, pricePerDroid, customerCredits) {
  // toplam fiyat
  const totalPrice = quantity * pricePerDroid;

  //Kredi durumu
  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  }

  // İstenilen mesaj
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
//sonuçları gör
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
