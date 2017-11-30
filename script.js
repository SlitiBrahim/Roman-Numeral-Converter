
  /*
  TRANSFORMER le nombre passé en paramètre en string
  SPLIT le nombre (string) par chaque chiffre
  FAIRE un tableau de tous les chiffres romains indexés par unité, dizaine, centaine
  FAIRE UNE BOUCLE qui retrouve l'équivalent d'un chiffre dans le tableau en fonction de la position du chiffre décimal
  RETOURNER le nouveau tableau en l'ayant join pour en faire un string
  */

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
    console.log("i: " + i);
    pos = num.length - 1 - i;
    console.log("pos: " + pos);
    tmp.push(romanNumbers[pos][Number(num[i])-1]);
  }

  // 36 -> length = 2
    // 3: i = 0 -> [1][2]
    // 6: i = 1 -> [0][5]

  // 649 -> length = 3
    // 6: i = DC -> [2][5]
    // 4: i = XL -> [1][3]
    // 9: i = IX -> [0][8]

  console.log(tmp);

 return num;
}

console.log(convertToRoman(36)); // XXXVI

// 501 -> DI
// 649 -> DCXLIX
