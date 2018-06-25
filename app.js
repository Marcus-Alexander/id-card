function idCardFunction() {

    let userFirstName = document.getElementById("firstName").value;
    console.log(userFirstName);
    document.getElementById("userFirstName").innerHTML = userFirstName;

    let userLastName = document.getElementById("lastName").value;
    console.log(userLastName);
    document.getElementById("userLastName").innerHTML = userLastName;

    let userAge = document.getElementById("age").value;
    console.log(userAge);
    document.getElementById("userAge").innerHTML = "Age: " + userAge;

    let userPhoneNumber = document.getElementById("phoneNumber").value;
    console.log(userPhoneNumber);
    document.getElementById("userPhoneNumber").innerHTML = "Phone: " + userPhoneNumber;

    let userAddress = document.getElementById("postAddress").value;
    console.log(userAddress);
    document.getElementById("userAddress").innerHTML = userAddress;
}


let numberArray = []

numberArray.push(userAge);
numberArray.push(userPhoneNumber);

for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] <= 100) {
        document.getElementById("userAge").innerHTML = "Age:" + userAage;
    } else if (numberArray[i] > 100) {
        document.getElementById("userPhoneNumber").innerHTML = "Phone Numer:" + userPhoneNumber;
    }
}

console.log(numberArray)
