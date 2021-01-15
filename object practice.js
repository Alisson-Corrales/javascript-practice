//array object
let myself = ["Buni", 16, "pink", "daisies", "art"]
//console.log(myself[2])

let newSelf = {
    name: "buni",
    age: 16,
    hair: "black",
    city: "sonora",
    hobby: "art"
} 
//console.log(newSelf["hobby"])

//for simple lists use arrays, for attributes of things use objects

let vari = "city";
//console.log(newSelf[vari]);




let medic = {
    hair: "black",
    eyeColor: "blue",
    height: 6.2,
    age: "45 years",
    origin: "stuttgart, Germany",
    occupation: "unliscenced doctor",
}


let americanBlackBear ={
    furColor: ["black", "white", "blonde", "brown"],
    avgWeight: "126-551 pounds",
    continent: "North America",
    lifeSpan: 18,
    population: "least concern",
    diet: ["berries", "fish", "honey"]
}

function getBearAttr(bear, attr) {
    console.log(bear[attr]);
}

//getBearAttr(americanBlackBear, "population");



/////////////////////
/////////////////////


let names = 
`Jacob Robinson
Shahzaib Boone
Ivie Duffy
Yannis Torres
Timur Gregory
Mirza Woodward
Zayd Craft
Candice Villanueva
Kien Greer
Anees Britt
Debra Everett
Luca Parsons
Ishaaq David
Griff Barr
Kye Stevens
Kyal Forster
Khia Hernandez
Rhia Browning
Angus Beasley
Manha Ford
Darrell Sosa
Chelsey Villa
Katya Rivera
Nichole Berg
Libbi Pugh
Winston Sykes
Rex Hopkins
Liam Shaffer
Lucinda Kramer
Melanie Norman
Raiden King
Harriette Roberts
Ameen Harper
Ella-Mai Acevedo
Kali Valencia
Areeb Terry
Lili Mackie
Shahid Smith
Sarina Hackett
Ben O'Doherty
Murat Churchill
Tomas Yoder
Ammaar O'Moore
Naya Thomson
Coby Beaumont
Kelise Grimes
Reiss Blankenship
Jayce Firth
Kayson England
Eira Farmer`

let namesArray = names.split("\n");
let typingSpeed = {};

function createSpeedList(array){
    for (let i = 0; i < array.length; i++){
        let key = array[i];
        let value = Math.ceil(Math.random() * 80 + 20); //<< how to make random integers. from 20 - 100

        typingSpeed[key] = value;
    }
}

createSpeedList(namesArray);
//console.log(typingSpeed);


let tvStatus = {};

function createTVObject(array) {
    for(let i = 0; i < array.length; i++){
        let key = array [i];
        let value = "";

        // 1/3 chance that the TV is off. if 1 = off. if 2, 3 = on

        let randy = Math.ceil(Math.random() * 3);

        if (randy == 1){
            value = "off"
        } else{
            value = Math.ceil(Math.random() * 99)
        }
    
        tvStatus[key] = value;
    }
}

createTVObject(namesArray);
//console.log(tvStatus);



// randy 1 - 10
// create a object that'll say the income of people you employ
// 100 employees
// 10% of employees will have 'intern'            // 1
// 30% of employees will have '10,000 - 20,000'   // 2 , 3, 4
// 50% of employees will hqve '30,000 - 50,000'   // 5, 6, 7, 8, 9
// 10% of employees will have '80,000 - 120,000'  // 10
// 1 person CEO: 250,000

let salaries = {};

function giveSalary(array){
    for(i = 0; i < array.length; i++){
        let randy = Math.floor(Math.random() * (10 - 1 + 1) + 1); //1 - 10
        let key = array[i];
        let value = '';

        if(randy == 1){
            value = 'intern';
        } else if (randy >= 2 && randy <= 4){
            value = Math.floor(Math.random() * (20000 - 10000 + 1) + 10000);  //random number 10,000-20,000
        } else if (randy >= 5 && randy <= 9){
            value = Math.floor(Math.random() * (50000 - 30000 + 1) + 30000); //random number 30,000-50,000
        } else{
            value = Math.floor(Math.random() * (120000 - 80000 + 1) + 80000); //random number 80,000-120,000
        }
        
        salaries[key] = value;
    }

        let randy = Math.floor(Math.random() * (49 - 0 + 1) + 1);
        let key = array[randy];
        salaries[key] = 250000
}

giveSalary(namesArray);
//console.log(salaries);


//og
let user1 = {
    name: "casey",

    sayHi: function() {
        console.log(`hello ${this.name}`);
    }//this is a method
}

//shorthand
let user2 = {
    name: "jessie",
    sayHi(){
        console.log("howdy do " + this.name);
    }//this is a method
}

let newUser = {}
Object.assign(newUser, user1);
newUser.name = "johnny"

user1.sayHi();
user2.sayHi();
newUser.sayHi();

//thing for dividing
function divide(numerator, denominator){
    return{
        num,
        deno,
        run: function(){
            console.log(this.numerator / this.denominator)
        }
    }
}

let sixteen = divide(32, 2)

sixteen.run();