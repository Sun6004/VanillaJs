const clock = document.querySelector("h2#clock");

class GetClock{ 
    render(){
        const date = new Date();

        let hours = String(date.getHours()).padStart(2,"0");
        let min = String(date.getMinutes()).padStart(2,"0");
        let sec = String(date.getSeconds()).padStart(2,"0");

        clock.innerText = `현재시각: ${hours}:${min}:${sec}`;
    }

    start(){
        this.render();
        setInterval(this.render,1000);
    }
}
const clockStart = new GetClock();
clockStart.start();