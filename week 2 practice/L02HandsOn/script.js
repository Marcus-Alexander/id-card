idealCar = {
    name: "mustang",
    color: "red",
    weightInPounds: 3600,
    myCar: function() {
        console.log(this.name + ' ' + this.color + ' ' + this.weightInPounds);

    }
}

idealCar.myCar();
