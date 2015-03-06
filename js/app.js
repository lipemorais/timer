/**
 * Criar uma classe "relógio" que exibe horas, minutos e segundos no formato 
 * H:M:S usando javascript e html. Seu comportamento deve ser o mesmo de um
 * relógio funcional, começando em 00:00:00, passando pra 00:00:01, 00:00:02
 * e assim por diante..
 *
 * Podendo pausar, começar e reiniciar.
 */
 
var Clock = {
    self: null,
    hours: 00,
    minutes: 00,
    seconds: 4000,
    hourInSeconds: 3600,
    minutesInSeconds: 60,
    status: "started",
    
    update: function update() {
        console.log("mais um segundo");
        if (this.status == "stoped") {
            return;
        }
        
        this.seconds += 1;
        this.hours = parseInt(this.seconds/this.hourInSeconds);
        var leftSeconds = (this.seconds%this.hourInSeconds);
        
        this.minutes = parseInt(leftSeconds/this.minutesInSeconds);
        leftSeconds = (leftSeconds%this.minutesInSeconds);
        
        domHours   = document.getElementById("hours");
        domMinutes = document.getElementById("minutes");
        domSeconds = document.getElementById("seconds");
        
        domHours.innerText = this.formatNumber(this.hours.toString());
        domMinutes.innerText = this.formatNumber(this.minutes.toString());
        domSeconds.innerText = this.formatNumber(leftSeconds.toString());
    },
    start: function start() {
        var vm = this;
        
        setInterval(function() {
            vm.update();
        }, 1000);
    },
    formatNumber: function formatNumber(numberAsString) {
        
        if (numberAsString.length <= 1 ) {
            return ("0" + numberAsString);
        } else {
            return numberAsString;
        }
    },
    stop: function () {
        this.status = "stoped";
        
    },
    restart: function restart() {
        this.seconds = 0;
        this.status = "started";
    }
};

Clock.start();