// Scrivi un programma che stampi i numeri da 1 a 100,ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var numTotali = 100;

for(var i = 0; i < numTotali; i++){
    var num = i + 1;
    if (num % 3 == 0 && num % 5 == 0){
        console.log('FizzBuzz');
    } else if ((num % 3) == 0){
        console.log('Fizz');
    } else if ((num % 5) == 0){
        console.log('Buzz');
    } else {
        console.log(num);
    }
}