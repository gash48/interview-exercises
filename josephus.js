const noOfPeople = 100;
let people = [...Array(noOfPeople)].map((el, idx) => idx + 1);

const killingProcess = arr => {
  const temp = [];
  const arrLen = arr.length;
  let killFromStart = false;

  for (let i = 0; i < arrLen; i += 2) {
    const indexToBeKilled = i + 1;
    if (indexToBeKilled > arrLen - 1) {
      killFromStart = true;
    }
    delete arr[indexToBeKilled];
    temp.push(arr[i]);
  }
  return killFromStart ? temp.slice(1) : temp;
};

const main = () => {
  let survived = killingProcess(people);
  while (survived.length != 1) {
    survived = killingProcess(survived);
  }
  console.log("Survivor: ", survived[0]);
};

main();