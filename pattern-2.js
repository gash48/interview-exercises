/* 

      1
    3*1*3
  5*3*1*3*5
7*5*3*1*3*5*7

*/

const pattern = n => {
  const totalChars = 4 * (n - 1) + 1;

  for (let i = 0; i < n; i++) {
    const charsLen = 4 * i + 1;
    const spacesLen = totalChars - charsLen;
    const spaces = Array(spacesLen / 2).fill(" ");
    const chars = [];

    const middleIndex = Math.floor(charsLen / 2);

    for (let j = charsLen; j > 0; j--) {
      const isEven = j % 2 == 0;
      const isLeft = middleIndex <= j - 1;
      chars.push(isEven ? '*' : isLeft ? j - middleIndex : middleIndex - j + 2);
    }
    console.log(...[...spaces, ...chars, ...spaces]);
  }
};

pattern(10);