////1.	Create a namespace called Animal. Then, define two sub namespaces, one called Cat and another called Dog.////
//var ANIMAL = ANIMAL || {};
//ANIMAL.Cat = function () {};
//ANIMAL.Dog = function () {};

////2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal syntax and the Dog class should be created using the constructor syntax.////
//var Cat = {};
//function Dog() {};

////3.	Create a new instance of Cat class. Directly underneath, create a new instance of the Dog class.////
//var Tabby = new Cat();
//var Poodle = new Dog();

///4.	Start over and now create a new class using literal syntax called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.////
//var Animal = {
//    displayMessage: function() {
//        return ("The Animal has been created.");
//    }
//};
//window.console.log(Animal.displayMessage());

////5.	Now, change the above code so that is mimics a true constructor. The class should accept an argument and that value is what should be displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.///
//var Animal = function () {
//        return "The Animal has been created.";
//};
//var newAnimal = new Animal();
//window.console.log(newAnimal.displayMessage());

////6.	Start over and now create a new class using literal syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation.
////7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.////
//var Animal = function (type, breed, color, height, length) {
//    this._type = type;
//    this._breed = breed;
//    this._color = color;
//    this._height = height;
//    this._length = length;
//};
//
//var Cat = new Animal("Cat", "Maine Coon", "Grey", "1ft", "2ft");
//
//for (var property in Cat) {
//    window.console.log(Cat[property]);
//}

////8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.////
//var Animal = function (type, breed, color, height, length) {
//    this._type = type;
//    this._breed = breed;
//    this._color = color;
//    this._height = height;
//    this._length = length;
//};
//
//Animal.prototype.animalType = function () {
//    if (newAnimal._type == "Cat") {
//        return ("The " + newAnimal._color + " cat is meowing!");
//    } else {
//        return ("The " + newAnimal._color + " dog is barking!");
//    }
//};
//
//var newAnimal = new Animal("Cat", "Maine Coon", "grey", "1ft", "2ft");
//
//window.console.log(Animal.prototype.animalType());


////9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”////

//var Animal = function (type, breed, color, height, length) {
//    var _type = type;
//    var _breed = breed;
//    var _color = color;
//    var _height = height;
//    var _length = length;
//};
//
//var newAnimal = new Animal("Cat", "Maine Coon", "grey", "1ft", "2ft");
//
//var checkType = function() {
//    var animalType;
//    if (newAnimal["type"] == "Dog") {
//        return "dog";
//    } else {
//        return "cat";
//    }
//};
//this.speak = function() {
//    return ("The " + checkType() + " has made a noise!");
//};
//
//window.console.log(speak());


////10.	Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph.////
//var paragraph = window.prompt("Please enter a paragraph of text: ");
//var findWords = function (word) {
//    var x = window.prompt("Please enter a search word: ");
//    word = new RegExp(x, 'g');
//    window.alert(paragraph.match(word).length);
//};
//findWords();

/*Does My Vehicle Need An Oil Change? (10 points)
11.	Create an abstract base class called Vehicle that accepts four parameters including make (string), model (string), total miles (number), and the mileage for the last oil change (number).
12.	Within the Vehicle class, create 6 public properties named make, model, totalMiles, drivenMiles, type, and lastOilChange. Initialize the make, model, totalMiles, and lastOilChange properties with their respective arguments. The drivenMiles property should be initialized to 0 and the type property should be initialized to an empty string.
13.	Now create a public method called drive() that accepts a parameter (perhaps miles). Increment and set the public drivenMiles property to the miles argument. Return the method (return this).
14.	Now create a public method called checkOil(). Within this method, check to see if the total miles minus the last oil change plus the driven miles are less than or equal to 3000. If they are, return a message to the user that they need an oil change. Otherwise, return the method (return this).
15.	Now create a new sub class called Car that accepts one parameter for the amount of doors that the car has. 
16.	Within the new Car class, initialize a public property called doorCount and set it equal to the argument.
17.	Within the Car class use a conditional to check and see if the door count is greater than 2. If it is, set the type property to Sedan. Otherwise, set it to coupe.
18.	Now, make sure that the Car class inherits from the Vehicle base class. Use this opportunity to pass in the make, model, total miles, and last oil change values into the Vehicle’s constructor. 
19.	Then, create a new instance of the Car class and pass in the number of doors that the car has into the Car’s constructor.
20.	Finally, using method chaining, call the drive() method of the car object, passing in a numeric value as a parameter. At the same time, call the checkOil() method. Display the results in the console window. You will either get a message indicating your car needs an oil change or you will get the object hierarchy.*/
//var Vehicle = function(make, model, totalMiles, lastOilChange) {
//    this.make = make;
//    this.model = model;
//    this.totalMiles = totalMiles;
//    this.drivenMiles = 0;
//    this.type = "";
//    this.lastOilChange = lastOilChange;
//};
//
//Vehicle.prototype.drive = function(miles) {
//    this.drivenMiles += miles;
//    return this;
//};
//
//Vehicle.prototype.checkOil = function() {
//    if ((this.totalMiles - this.lastOilChange + this.drivenMiles) >= 3000) {
//        return "You need an oil change!";
//    } else {
//        return this;
//    }
//};
//var Car = function(doorCount) {
//    this.doorCount = doorCount;
//    if (doorCount > 2) {
//        this.type = "Sedan";
//    } else {
//        this.type = "Coupe";
//    }
//};
//Car.prototype = new Vehicle("Honda", "Civic", 4000, 3000);
//var myCar = new Car (4);
//window.console.log(myCar.drive(2000).checkOil());


/*The Recipe Card (10 points)	
Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
Guacamole
Serves: 4
Ingredients: 
- 3 Avocados
- 1 Lime
- 1 Teaspoon Salt
- 1/2 Cup Onion
- 3 Tablespoons Cilantro
- 2 Diced Tomatoes
- 1 Teaspoon Garlic
- 1 Pinch Ground Pepper
*/
//var Recipe = function (title, servings, ingredients) {
//    this.title = "Guacamole";
//    this.servings = 4;
//    this.ingredients = ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"];
//    window.console.log(this.title + "\nServes: " + this.servings + "\nIngredients:\n");
//    for (var i in this.ingredients) {
//             window.console.log("- " + this.ingredients[i]);
//        }
//};
//Recipe();


/*
The Reading List (10 points)
Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.*/

//var Book = function(title, author, alreadyRead) {
//    this.title = title;
//    this.author = author;
//    this.alreadyRead = alreadyRead;
//    var bookInfo = '"' + this.title + '" by ' + this.author;
//    if (alreadyRead === true) {
//        window.console.log("You already read " + bookInfo);
//    } else {
//        window.console.log("You still need to read " + bookInfo);
//    }
//};
//var book1 = new Book("The Hobbit", "J.R.R Tolkien", false);
//var book2 = new Book("Harry Potter", "J.K. Rowling", true);
//var book3 = new Book("Animal Farm", "George Orwell", true);
//var book4 = new Book("The Grapes of Wrath", "John Steinbeck", false);
//var book5 = new Book("Brave New World", "Aldous Huxley", true);

/*
Fill in the Blanks (10 points)
Fill in the blanks to make this program work.*/

//(function() {
//    var person = {
//        buy: function() {window.console.log("I'm rich"); }
//    };
//
//    var car = {
//        price: 130000,
//        drive: function() {window.console.log("vroom vroom"); }
//    };
//
//    car.drive();
//
//    if (car.price > 100000) {
//        person.buy(car);
//    }
//}());

