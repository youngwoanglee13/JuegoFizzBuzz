import fizzbuzz from "./FizzBuzz.js";

describe("FizzBuzz", () => {
    it("deberia devolver 1 al enviar 1", () => {
      expect(fizzbuzz(1)).toEqual("1");
    });
    it("deberia devolver 1 2 al enviar 2", () => {
        expect(fizzbuzz(2)).toEqual("1 2");
      });


  });