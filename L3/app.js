function add(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
    return result;
}
var ans = add(10, 20, function (result) {
    console.log(result);
});
console.log(ans);
