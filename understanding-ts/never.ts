function generateError(message: string, code: number): never {
  throw {message: message, code: code};
}

const result = generateError('An error occured!', 500);
console.log(result); // not undefined, function crashes app
