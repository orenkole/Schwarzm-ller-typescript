function generateError(message, code) {
    throw { message: message, code: code };
}
var result = generateError('An error occured!', 500);
console.log(result); // not undefined, but
