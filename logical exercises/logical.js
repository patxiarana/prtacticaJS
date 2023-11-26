/*Exercise 1: Pizza Party
You are organizing a pizza party for a group of teenagers.
Each pizza has a certain number of slices. Write a program that takes 
the number of pizzas and slices per 
pizza as input and calculates the total number of slices.
Mock Data:   
const NumberPizzas = 3
const SlicesPizza = 8

function repartir(NumberPizzas, SlicesPizza) {
  console.log(SlicesPizza * NumberPizzas)
}


repartir(3, 8);



Exercise 2: Movie Night
You and your friends are planning a movie night. Each movie has a different duration in minutes. 
Write a program that calculates the total duration of the movies you plan to watch. */

//Mock Data:
// var Movie1Duration = 120 
//var  Movie2Duration =  95 
//var  Movie3Duration = 150 
/*
function countMovies(Movie1Duration, Movie2Duration, Movie3Duration) {
  var count = Movie1Duration + Movie2Duration + Movie3Duration
  console.log(count)
}

countMovies(120, 95, 150);

Exercise 3: Bookshelf Inventory
You have a collection of books on your bookshelf. Each book has a title and a number of pages. 
Write a program that takes the titles and page counts of three books as input and calculates the 
total number of pages.
   
Mock Data:

Book1 = { title: "The Catcher in the Rye", Pages: 224 }
Book2 = { title: "To Kill a Mockingbird", Pages: 281 }
Book3 = { title: "1984", Pages: 328 }


function countBocks(Book1, Book2, Book3) {

  for (const prop in Book1) {
    var firtsbook = (Book1[prop])
  }
  console.log(firtsbook);
  for (const properti in Book2) {
    var secondbook = (Book2[properti])
  }
  console.log(secondbook);

  for (const properti in Book3) {
    var thertybook = (Book3[properti])
  }
  console.log(firtsbook + secondbook + thertybook);
}
countBocks(Book1, Book2, Book3);


Exercise 4: Pocket Money
A teenager receives pocket money each week. Write a program that 
takes the weekly pocket money amount and the number of weeks in a month as input and 
calculates the total pocket money for the month.

Mock Data:  
//Weekly Pocket 
const Money = 20
//Weeks in a 
const Month = 4
function pocketmoney(Month, Money) {
  var month = Month * 4
  var totalMoney = month * Money

  console.log(totalMoney)

}
pocketmoney(Month, Money)

Exercise 5: Exam Scores
A student has taken three exams. Write a program that takes the scores of the three exams as input and calculates the average score.

Mock Data:

Exam 1 Score: 85
Exam 2 Score: 92
Exam 3 Score: 78 */

/*
Verificar si un número es primo:
Enunciado: Escribe una función en JavaScript que determine si un número dado es primo o no.*/

function EsPrimo(num) {
  console.log(num % 3)
  if (num == 2) {
    console.log("el numero es primo")
  }

  if (num < 1) {
    console.log("el numero no es primo")
  }

  if (num % 2 == 1 && num % 3 == 2) {
    console.log("el numero es primo")
  }
  if (num % 3 == 0 && num % 2 == 1) {
    console.log("el numero no  es primo")
  }
}

EsPrimo(9);

//Encontrar el mayor de tres números:
//Enunciado: Dados tres números, crea una función en JavaScript que encuentre y muestre el número más grande de los tres.
const arry = [1, 2, 3, 22, 8, 6, 7, 28]

function SearchMayor(array) {
  let count = 0;
  let result = 0
  while (count <= array.length) {
    if (result < array[count]) {
      result = array[count]
      count++
    } else {
      count++
    }
  }
  console.log(result)
}


SearchMayor(arry);

/*
Verificar si una palabra es un palíndromo:
enunciado: Crea una función en JavaScript que determine si una palabra dada es un 
palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).
*/
function palindromo(palabra) {

  let palabra2 = palabra.toLowerCase()
  let palabra3 = "";

  for (i = (palabra2.length - 1); i >= 0; i--) {
    palabra3 = palabra3.concat(palabra2[i])
  }
  if (palabra2 == palabra3) {
    console.log('es un palindromo')
  } else {
    console.log('no es un palindromo')
  }
}
palindromo('patxi')
/*
Calcular el factorial de un número:

Enunciado: Escribe una función en JavaScript que calcule el factorial de un número dado. El factorial de un número entero positivo 
�
n se define como el producto de todos los números enteros positivos menores o iguales a 
�
n /
 */

function factorial(number) {
  var count = 0;
  var count2 = number;
  var result = 1;
  while (count <= number) {
    if (count2 != 0) {
      result = result * count2
      count2--
      count++
      console.log()
    } else {
      count++
    }
  }
  console.log(result)
}

factorial(5)

let array2 = [6,7,1,4,98,7,8,77,56,76,56]
function SearchPar(array){
  let esPar = []
for(i = 0 ; i < array2.length ; i ++)
 if(array2[i] % 2 === 0 ){
  esPar.push(array2[i])
 }
 console.log(esPar) 
 }

 SearchPar(array2)



SearchPar(); 










