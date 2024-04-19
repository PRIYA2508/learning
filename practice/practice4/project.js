let btn = document.querySelector('#newQuoteButton');
let quote = document.querySelector( '.quote' );
let person = document.querySelector('.person');

//let's make array for quotes
const quotes = [ 
    { quote: `'The only way to do great work is to love what you are doing.'` , 
    person: `Steve Jobs`},
    { quote: `'Be yourself; everyone else is already taken'`,
      person: `Oscar Wilde`
}, 
{
    quote:`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." `,
    person:`Albert Einstein`
},
{
    quote: `“Be the change that you wish to see in the world."`,
    person: `Mahatma Gandhi` 
},];
btn.addEventListener('click',function(){

    let random =  Math.floor(Math.random() * quotes.length);
    
   //displaying a random quote from the array
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});


   

