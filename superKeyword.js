class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still`)
    }
}

class Rabbit extends Animal{
    //adds more to constructor
    constructor(name, hops){
        super(name);
        this.hops = hops;
    }
    hide(){
        console.log(`${this.name} hides!`)
    }
    stop(){
        //this overides parent method
        super.stop();
        this.hide();
    }
}

let rabbit = new Rabbit ("Peter");
rabbit.run(12);
rabbit.stop();