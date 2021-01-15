//class user
//set userName - > 4 characters
// set password - > 5 characters and include at least 1 number
//Login(this.username, this.password) if its correct you welcome the user


class User{
    set userName(value){
        if(userName.split >= 4){
            continue;
        }else{
            console.log("your username is not long enough");
        }
    set passWord(){
        if(passWord.split >= 5 && isNaN(passWord.split)){
            continue;
        }else{
            console.log("your password is not long enough and does not have a number in it")
        }
}