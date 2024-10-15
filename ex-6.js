let height = undefined;
let result;

function nullish(param) {
  result = param ?? "Height is not defined";
  return result;
}

nullish(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
