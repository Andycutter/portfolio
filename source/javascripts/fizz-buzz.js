function FizzBuzz() {
    const hasZeroLeft = (number, divider) => {
        return (number % divider) === 0;
    }
    
    this.check = (number) => {
        if (hasZeroLeft(number, 15)) {
            return('Fizz Buzz')
        }   else if 
            (hasZeroLeft(number, 3)) {
            return('Fizz')
        }   else if  
            (hasZeroLeft(number, 5)) {
            return('Buzz')
        }   else {           
            return number;
        }
    }
}