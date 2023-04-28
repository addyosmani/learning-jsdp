define(["node/umd_math"], function (mathUtils) {
    const outputElement = document.getElementById('output');
  
    const result1 = mathUtils.add(5, 3);
    outputElement.innerHTML += 'Addition: ' + result1 + '<br>';
  
    const result2 = mathUtils.subtract(10, 7);
    outputElement.innerHTML += 'Subtraction: ' + result2 + '<br>';
  });
  