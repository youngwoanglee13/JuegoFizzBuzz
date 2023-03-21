import fizzbuzz from "./FizzBuzz.js";

describe("FizzBuzz", () => {
    it("deberia devolver 1 al enviar 1", () => {
      expect(fizzbuzz(1)).toEqual("1");
    });
    it("deberia devolver 1 2 al enviar 2", () => {
        expect(fizzbuzz(2)).toEqual("1 2");
      });
    it("deberia devolver 1 2 Fizz al enviar 3", () => {
        expect(fizzbuzz(3)).toEqual("1 2 Fizz");
    });
    it("deberia devolver 1 2 Fizz 4 Buzz al enviar 5", () => {
        expect(fizzbuzz(5)).toEqual("1 2 Fizz 4 Buzz");
    });
    it("deberia devolver Fizz si es multiplo de 3", () => {
        expect(fizzbuzz(6)).toEqual("1 2 Fizz 4 Buzz Fizz");
    });



  });