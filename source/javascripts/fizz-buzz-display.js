document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('fizz_button')
    let displayDiv = document.getElementById('display_fizzbuzz')
    button.addEventListener('click', () => {
        let value = document.getElementById('fizz_value').value
        let fizzBuzz = new FizzBuzz
        let result = fizzBuzz.check(value)
        displayDiv.innerHTML = result;
    })
})