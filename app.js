// 1. JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

let isItPrimeNumber = function (number) {
    if (number == 2) {
        console.log(number + " Asal sayıdır.");
    }else{
        counter = 0;
        for(index=2; index<number; index++){
            if (number%index==0) {
                counter++;
            }
        }
        if (counter == 0) {
            console.log(number + " Asal sayıdır.");
        }
    }
}

let findPrime = function (...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        number = numbers[i];
        isItPrimeNumber(number);
        
    }
}

findPrime(2,3,4,5);
findPrime(15,16,17);


// 2. Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

let findSumOfDivisors = function (number) {
    sumOfDivisors = 0;
    for (let i = 0; i < number; i++) {
        if (number%i==0) {
            sumOfDivisors += i;
        }
    }
    return sumOfDivisors;
}
let areTheyFriendlyNumber = function (number1,number2) {
    
    let sumOfDivisors1 = findSumOfDivisors(number1);
    let sumOfDivisors2 = findSumOfDivisors(number2);

    if (sumOfDivisors1 == number2 && sumOfDivisors2 == number1) {
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır.");
    }else{
        console.log(number1 + " ve " + number2 + " arkadaş sayı değildir.")
    }
}

areTheyFriendlyNumber(220,284);


//3. 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

let perfectNumbersFrom0To1000 = function () {
    for (let index = 1; index <= 1000; index++) {
        let sumOfDivisors = findSumOfDivisors(index);
        if (sumOfDivisors == index) {
            console.log(index + " bir mükemmel sayıdır.")
        }
    }
}

perfectNumbersFrom0To1000();

//4. 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

let primeNumbersFrom0To1000 = function () {
    for (let index = 0; index <= 1000; index++) {
        isItPrimeNumber(index);
        
    }
}
primeNumbersFrom0To1000();