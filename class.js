function People(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayHi = function(){
        console.log("hi", name,age,gender);
    }
}
//let people1 = new People("asd", 123,"M").sayHi();

class user{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    job(money){
        this.money = money;
        console.log("I'm",this.name,this.money);
    }
    say(){
        console.log("I'm",this.name, this.age);
    }
}
//let people2 = new user("zxc","222").say();
let people3 = new user("zzz","11").job(100);
