const form = document.querySelector( 'form' );

form.addEventListener( 'submit', function ( event ) {
    event.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight =  parseInt(document.querySelector("#weight").value);
const results = document.querySelector('#results');

if(height === '' || isNaN(height) || height < 0){
    results.innerHTML = "Invalid Height!";
}
else if(weight===''|| isNaN(weight)|| weight<0){
   results.innerHTML= `Invalid Weight : ${weight}`;
}
else{
    const bmi = ((weight / ((height*height)/10000)).toFixed(2)) ;
    if(bmi<18.6) {
        results.innerHTML = `Your BMI is: ${bmi}. Under-Weight`;
    }
    else if(bmi >=18.6 && bmi<=24.9) {
        results.innerHTML = `Your BMI is: ${bmi}. Normal-Weight.`;
    }
    else{
        results.innerHTML = `Your BMI is : ${bmi}.  Over-Weight`;
    }
}
});
