(function () {
  function test1(num1,num2) {
    return num1+num2;
  }
  var result = test1(2,3);
  console.log(result);
})();
(function () {
  var result = [1,2,54].map(function (item,index) {
    return item + 10;
  });
  var b = 3;
  var a = b;
  console.log(result);
})();