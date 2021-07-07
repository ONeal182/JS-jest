import { checkWord } from "../../utils/checkWord.js";

describe("test for valid string function test", () => {
  it("Слово Test валидно", () => expect(checkWord("Test")).toBe("Слово Test валидно"));
  it("should be error",()=>expect(checkWord("Test1")).toBe("Ошибка стоп"));

});
