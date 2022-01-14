/* 

  CAMELIZER 
  ----------- USED RECURSION --------- 
  ---------- camelCase is the given function -------------
  ---------- INPUT ----------
  Example Response
  {
    id,
    naME:,
    placed_at,
    shipments: [{
      created_at,
      placed_at,
      received_at,
      enum: {
        is_received: true,
        ...
      }
    }, .....] 
  }
  or 
  [
    {...}
  ]

*/

const objectParser = (data, nData) => {
  Object.keys(data).map(key => {
    nData[camelCase(key)] = camelizer(data[key]);
  });
  return nData;
};

const arrayParser = (data, nData) => {
  data.map((el, idx) => {
    nData[camelCase(idx)] = camelizer(el);
  });
  return nData;
};

export const camelizer = data => {
  if (Array.isArray(data)) {
    return arrayParser(data, []);
  } else if (data && typeof data == "object") {
    return objectParser(data, {});
  }
  return data;
};