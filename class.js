class User{
    constructor(){
        this.firstName = "John";
        this.lastName = "Smith"
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(value){
        [this.firstName, this.lastName] = value.split(" ");
        // value = value.split("");
        //this.firstName = value[0];
        //this.lastName = value[1];
    }
}

let user = new User();
user.fullName = "Jane Doe";
console.log(user.fullName);