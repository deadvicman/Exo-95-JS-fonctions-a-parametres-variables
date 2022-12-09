let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

function essai(param1, param2, param3) {
    return one.innerHTML = ("Bonjour" + param1 + param2, param3)
}
essai()
essai('oui', 'non', 'nop')

function funcNumber(one, two, three){
    if (one === parseInt(one) && one === parseInt(two) && one === parseInt(three)){
        let result = one + two + three;
        let myDiv = document.createElement('div');
        myDiv.parentElement = myDiv.innerHTML = result;
    }
    return two.innerHTML = (one + two + three)
}

funcNumber(1, 2, 3)


new funcNumber(2,3,4)
new funcNumber(544,44,44)


function funcNumber2(one, two, three){
    let sold = one + two + three * 11.76;
    return three.innerHTML = (parseInt(sold));
}

funcNumber2(1, 2, 3);
    
