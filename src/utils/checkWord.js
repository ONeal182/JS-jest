export function checkWord(str) {
    let validStr = "Test";
    let result;
    if(validStr === str){
        result = `Слово ${str} валидно`;
    }else{
        result = `Ошибка стоп`;
    }
    return result;
  }
  