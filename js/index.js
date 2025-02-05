window.onload = function () {
    const counter1 = document.getElementById('h3');
    const counter2 = document.getElementById('h4');


    const finalValue = 15;
    const finale2 = 41;

    let firstValue = 0;
    let firstValue2 = 0;

    const incriment = Math.ceil(finalValue /  85);
    const incriment2 = Math.ceil(finale2 /  85);
    setInterval(function(){
        firstValue+=incriment;
        firstValue2+=incriment2;

        if(firstValue >= finalValue && firstValue2 >= finale2){
            firstValue = finalValue;
            firstValue2 = finale2;
        }

        counter1.textContent = firstValue;
        counter2.textContent = firstValue2;
    },30);
};
