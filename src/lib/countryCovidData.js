export const northAmericaData = (data) => {
  const naArr = [];
  if (data) {
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].continent === "North-America") {
        naArr.push(data[i]);
      }
    }
  }
  return naArr;
};

export const europeData = (data) => {
  const euArr = []
  if (data) {
    for (let i = 0; i < data.length; i+=1) {
      if (data[i].continent === 'Europe') {
        euArr.push(data[i])
      }
    }
  }
  return euArr;
}