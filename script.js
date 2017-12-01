function convertToRoman(num) {

  const romanNumbers = [
    ['I',	'II',	'III', 'IV', 'V',	'VI', 'VII', 'VIII', 'IX'],
    ['X',	'XX',	'XXX', 'XL', 'L', 'LX',	'LXX', 'LXXX', 'XC'],
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['M', 'MM', 'MMM', 'MMMM']
  ];

  num = num.toString().split("");  // ["3", "6"]
  let tmp = [];
  let pos;

  for (let i = 0; i < num.length; i++) {
    pos = num.length - 1 - i;
    tmp.push(romanNumbers[pos][Number(num[i])-1]);
  }

  // 36 -> length = 2
    // 3: i = 1 -> [1][2]
    // 6: i = 0 -> [0][5]

  // 649 -> length = 3
    // 6: i = DC -> [2][5]
    // 4: i = XL -> [1][3]
    // 9: i = IX -> [0][8]

  num = tmp.join("");

 return num;
}

function displayConversion(input) {
  console.log(convertToRoman(Number(input.value)));
}

let input = document.querySelector("#input");

input.addEventListener("keyup", displayConversion.bind(null, input));

// console.log(convertToRoman(5));
