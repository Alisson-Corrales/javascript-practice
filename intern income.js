let names = `Jacob Robinson
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


let totalMoney = 0;
let ceo1 = "";
for(let key in salaries){
    if(salaries[key] != 'intern' && salaries[key] != 250000){
        salaries[key] -= 5000;
        totalMoney += 5000;
    }

    if(salaries[key] == 250000){
        ceo = key;
    }
}

salaries[ceo1] += totalMoney;


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


////////////////////////////////////////////////////////////////


let totalMonee = 0;
let ceo = "";
for(let key in salaries){
    if(salaries[key] != 'intern' && salaries[key] != 250000){
        salaries[key] -= 5000;
        totalMoney += 5000;
    }

    if(salaries[key] == 250000){
        ceo = key;
    }
}
///key is the variable, salaries is object

salaries[ceo] += totalMoney;

//console.log(salaries);
//console.log(`${ceo} is CEO and they make ${salaries[ceo]}`);



//take 1/2 of the salary from every employee you have (not interns or CEO) and
//give money equally to interns
// 1. all salaries should be whole integers
// 2. log the new salaries for everyone
// log the new income for every intern

let interns = 0;
let moneyPot = 0;
for(let key in salaries){
    if(salaries[key] == 'intern'){
        interns++;
    }else if(salaries[key] != 250000){
        salaries[key] = Math.floor(salaries[key]/2);
        moneyPot += salaries[key];
    }
}//changes the value of interns, basically gives them the money

let internIncome = Math.floor(moneyPot/interns);

for(let key in salaries){
    if(salaries[key] == 'intern'){
        salaries[key] = internIncome;
    }
}

console.log(salaries);
console.log(`the ${interns} interns are now making ${internIncome} each.`);