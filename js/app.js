const logInBtn = document.querySelector("#logInBtn");
const userName = document.querySelector("#inp");
const res = document.querySelector("#res");
const loginForm = document.querySelector("#logIn_form");
const logOutBtn = document.querySelector("#logOutBtn");
const clockVal = document.querySelector("#clock");

function loginSuccess(val) {
    loginForm.classList.add("hidden");
    res.innerHTML = `<h3>hi ${val}</h3>
                    <button type="submit" id="logOutBtn">Log Out</button>
                    <p id="clock2"></p>`;
    res.classList.remove('hidden');

    function clockStart() {
        const clockElement = document.querySelector("#clock");

        let clock = new ClockC({ template: 'h:m:s' });

        clock.start();
        const clock2 = document.querySelector("#clock2");
        clock2.innerText = `${clock.render()}`;

        setInterval(() => {
            clock2.innerText = `${clock.render()}`;
        }, 1000);
    }
    clockStart();
}


class ClockC {
    constructor({ template }) {
        this.template = template;
        this.timer = null;
    }
  
    render() {
        let date = new Date();
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
  
        if (hours < 10) hours = "0" + hours;
        if (mins < 10) mins = "0" + mins;
        if (secs < 10) secs = "0" + secs;
  
        let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);

        clockVal.innerText = `${output}`;
        return output;
    }
  
    stop() {
        clearInterval(this.timer);
    }
  
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
  }

const clock = new ClockC({ template: 'h:m:s' });
clock.render();
clock.start();

function loginCheck() {
    const userCheck = localStorage.getItem("name");
    if (userCheck === null) {
        loginForm.classList.remove("hidden");
        res.classList.add("hidden");
    } else {
        loginForm.classList.add("hidden");
        res.classList.remove("hidden");
    }
}
loginCheck();


function logIn(event) {
    event.preventDefault();
    const val = userName.value;
    if (val === "") {
        alert("Please write your name");
    } else if (val.length > 10) {
        alert("Too long");
    } else {
        console.log(val);
        localStorage.setItem("name", val);
        console.log(val);
        loginSuccess(val);
    }
}

function log_out(event){
    event.preventDefault();
    loginForm.classList.remove("hidden");
    res.classList.add('hidden');
    localStorage.clear();
}

logInBtn.addEventListener("click", logIn);
document.addEventListener('click', function (event) {
    if (event.target.id === 'logOutBtn') {
        log_out(event);
    }
});

