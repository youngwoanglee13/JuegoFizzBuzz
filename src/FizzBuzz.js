function FizzBuzz(numero){
    if(numero==1) return "1";
    if(numero%3==0 && numero%5==0) return FizzBuzz(numero-1) +" FizzBuzz";
    if(numero%3==0) return FizzBuzz(numero-1) +" Fizz";
    if(numero%5==0) return FizzBuzz(numero-1) +" Buzz";
    return FizzBuzz(numero-1) +" "+ numero;
};
export default FizzBuzz;