// Better than any, because it forces you to check the type before using it
let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "Max";
// userName = userInput; !Error

// Never is a type that is never returned
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occurred!", 500);

console.log(result);
