/* 
  Compute Robotic Jumps

  If Positive but valid number -> Jump (index * number) Places 
    If invalid number -> log => “Invalid Input“ and Continue
  If Negative -> Jump (-index * number) places
  If Falsy -> Jump negative index
  If type Object -> Jump Index
  If Array -> Jump Negative index
  If String -> Parse the string (use ParseInt) -> Then Jump according to the value 
  If 0 -> No Jump
  If Function -> log => “Encountered a function”

  Given Robotic Valus Input Compute the final position of robot starting from 0
*/

const values = [
  20,
  "-7",
  NaN,
  10,
  "0",
  -3,
  "",
  30,
  [],
  80,
  "ab123",
  undefined,
  0,
  20,
  -18,
  null,
  {},
  3 / 0,
  89,
  -30,
  () => {},
  6,
  "123pre",
  -0,
  2
];

const ComputeJumps = () => {
  let position = 0;
  values.map((el, idx) => {
    if (typeof el == "number" && !isNaN(el)) {
      if (isFinite(el)) {
        const jumpVal = position * idx;
        if (el == 0) {
          // Nothing
        } else if (el > 0) {
          position += jumpVal;
        } else {
          position -= jumpVal;
        }
      } else {
        console.log("Invalid Input");
      }
    }

    if (!el) {
      position -= idx;
    }

    if (typeof el == "object") {
      position += idx;
    }

    if (Array.isArray(el)) {
      position -= idx;
    }

    if (typeof el == "string") {
      const parsedVal = parseInt(el);
      if (!parsedVal) {
        position -= idx;
      } else {
        const jumpVal = position * idx;
        if (el == 0) {
          // Nothing
        } else if (el > 0) {
          position += jumpVal;
        } else {
          position -= jumpVal;
        }
      }
    }

    if (typeof el == "function") {
      console.log("Encountered a function");
    }
  });
  console.log(position);
};

ComputeJumps();
