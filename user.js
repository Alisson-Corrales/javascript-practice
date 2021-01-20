//class user
//set userName - > 4 characters
// set password - > 5 characters and include at least 1 number
//Login(this.username, this.password) if its correct you welcome the user


//class User{
//    profile(){
//        this.userName = "menestroni";
//        this.passWord = "koolaid";
//    }
//    get userName(){
//        return `${this.passWord}`
//    }
//    set userName(value){
//        if(value.length >= 4){
//            continue
//        }else{
//            console.log("your username is not long enough");
//        }
//    }
//
//    get passWord(){
//        return `${this.passWord}`
//    }
//    set passWord(word){
//        if(word.length >= 5 && isNaN(word.split)){
//            continue;
//        }else{
//            console.log("your password is not long enough and/or does not have a number in it")
//        }
//    }
//}
//
//let user = new User();
//user.userName = "minisoda";
//user.passWord = "kool";
//console.log(user.passWord)

class User{
    set userName(username){
        if(username > 4){
            this.username = username
        }else{
            console.log("your username needs to be longer than 4 characters");
        }
    }
    set passWord(password){
        let hasNum = false;
        for(let i = 0; i < password.length; i++){
            if(isNaN(password[i]) == false){
                hasNum = true;
                }
                if(password.length > 5 && hasNum == true){
                    this.password = password
                }else{
                console.log(`your password is not long enough and/or does not have a number in it`)
                }
        }
    }

    get userName(){
        return this.username
    }
    get passWord(){
        return this.password
    }

    login(username, password){
        if(username == this.username && password == this.password){
            console.log(`you are logged in ${this.username}`);
        }else{
            console.log(`your username and password were not found`);
        }
    }
}

let user = new User();
user.username = "minisoda";
user.password = "koolaid9";
console.log(user.username);
console.log(user.password);
