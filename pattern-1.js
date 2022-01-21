/* 
Create a Pattern

Pattern 1
1
3*1
5*3*1
7*5*3*1
9*7*5*3*1


Pattern 2
                    1   
                1 * 3 * 1                
            1 * 3 * 5 * 3 * 1            
        1 * 3 * 5 * 7 * 5 * 3 * 1        
    1 * 3 * 5 * 7 * 9 * 7 * 5 * 3 * 1 

*/

const pattern1 = n => {
  for (let i = 0; i < n; i++) {
    const entries = Array(2 * i + 1);
    for (let j = 1; j <= entries.length; j++) {
      const isEven = j % 2 == 0;
      entries[j - 1] = isEven ? ":" : entries.length - j + 1;
    }
    console.log(...entries);
  }
};

const pattern2 = n => {
  for (let i = 0; i < n; i++) {
    const eLength = 4 * i + 1;
    const sLength = 4 * n + 1 - eLength;
    const spaces = Array(sLength / 2).fill(" ");
    const entries = Array(eLength);
    for (let j = 1; j <= eLength; j++) {
      const isEven = j % 2 == 0;
      const forLeft = j <= Math.floor(eLength / 2);
      entries[j - 1] = isEven ? "*" : forLeft ? j : eLength - j + 1;
    }
    console.log(...[...spaces, ...entries, ...spaces]);
  }
};

