let division = {
    edinicu: 0,
    desyatki: 0,
    sotni: 0,
    transform: function(num=0) {
        if(num>999) {
            return console.log("Превышено число!");
        }
        strnum = String(num);
        this.edinicu = 5
    }
}

function divisionChisla(num) {
        return {
            edinicu: num[2],
            desyatki: num[1],
            sotni: num[0],
            transformChisla() {
                if((num<=999)&&(num>99)) {
                    this.edinicu = num[2];
                    this.desyatki = num[1];
                    this.sotni = num[0];
                    console.log(`В введенном числе: единиц-${this.edinicu}, десяток-${this.desyatki}, сотен-${this.sotni}`);
                }
                else if((num<=99)&&(num>9)) {
                    this.edinicu = num[1];
                    this.desyatki = num[0];
                    this.sotni = 0;
                    console.log(`В введенном числе: единиц-${this.edinicu}, десяток-${this.desyatki}, сотен-${this.sotni}`);
                }
                else if(num<=9) {
                    this.edinicu = num[0];
                    this.desyatki = 0;
                    this.sotni = 0;
                    console.log(`В введенном числе: единиц-${this.edinicu}, десяток-${this.desyatki}, сотен-${this.sotni}`);
                }
                
                else {
                    this.edinicu = 0;
                    this.desyatki = 0;
                    this.sotni = 0;
                    console.log("Превышено число!");
                }
            }  
        }
    } 

function TransformObj () {
    let chislo = prompt("Введите 3х значное число");
    let ob = divisionChisla(chislo);
    ob.transformChisla();
}

