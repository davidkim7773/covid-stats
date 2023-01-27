// General Helper Functions to convert massive data array into smaller arrays for their respective continents. 

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

export const asiaData = (data) => {
  const asArr = [];
  if (data) {
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].continent === 'Asia') {
        asArr.push(data[i])
      }
   }
 }
  return asArr;
}


export const southAmericaData = (data) => {
  const saArr = []
  if (data) {
    for (let i = 0; i < data.length; i+=1) {
      if (data[i].continent === 'South-America') {
        saArr.push(data[i])
      }
    }
  }
  return saArr;
}

export const africaData = (data) => {
  const afArr = []
  if (data) {
    for (let i = 0; i < data.length; i+=1) {
      if (data[i].continent === 'Africa') {
        afArr.push(data[i])
      }
    }
  }
  return afArr;
}

export const oceaniaData = (data) => {
  const ocArr = [];
  if (data) {
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].continent === 'Oceania') {
        ocArr.push(data[i])
      }
    }
  }
  return ocArr;
}

// This was a general function created to make the code more dry, however, this JS code would crash Chrome/Browser for whatever reason...

export const generalData = (data, region) => {
  const countryData = [];
  if (data) {
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].continent === region) {
        data.push(data[i])
      }
    }
  }
  return countryData;
}
