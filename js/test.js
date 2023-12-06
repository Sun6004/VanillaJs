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
    date = "가입일"; //class field
   
    get name(){
        return this._name;
    }
    set name(val){
        if(val.length > 2){
            alert("이름이 짧습니다");
            return;
        }
        this._name = val;
    }
    job(money){
        this.money = money;
        console.log("I'm",this.name,this.money);
    }
    say(){
        console.log("I'm",this.name, this.age);
    }
}


function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }