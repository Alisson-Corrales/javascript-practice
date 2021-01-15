//let calculator = {
//    //a = prompt
//    //b = prompt
//    read(){
//        this.a = Number(prompt('What is the first number?')); //this points to the object its inside of
//        this.b = Number(prompt('What is the second number?'));
//    },
//    sum(){
//        //console.log("the sume is " + +)
//        console.log(`the sum is ${this.a} + ${this.b}`)
//    },
//    mul(){
//        console.log(`the product is ${this.a} + ${this.b}`)
//    }
//}
//
//calculator.read();
//calculator.sum();
//calculator.mul();



let ladder = {
    step: 0,
    up(){
        if(this.step < max || max == undefined){
            this.step++
            return this;//to make this chainable
        }else{
            return this;
        }
    },
    down(){
        if (this.step > 0){
            this.step--
            return this;
        }else{
            return this;
        }
    },
    showStep(){
        console.log("you are on step " + this.step)
        return this;
    },
    height(max){
        this.max = max;
        return this;
        }
}

ladder.down().down().up().up().down().showStep();

