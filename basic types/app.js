// Better than any, because it forces you to check the type before using it
var userInput;
var userName;
userInput = 5;
userInput = "Max";
// userName = userInput; !Error
// Never is a type that is never returned
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occurred!", 500);
console.log(result);
