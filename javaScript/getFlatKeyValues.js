const obj = {
  name: 'Madame Uppercut',
  powers: ['Million tonne punch', 'Damage resistance', 'Superhuman reflexes'],
  subobj: {
    "application_number": [
      "part333A"
    ],
    "brand_name": [
      "Moisturizing Antibacterial"
    ],
  }
}

//option 1
// const res = JSON.stringify(obj);
// console.log(res);

//option 2
const getFlatKeyValues = (obj) => {
  if (typeof obj === 'object') {
    const arr = [];

    for (const [key, value] of Object.entries(obj)) {
      const res = {};
      
      res[key]= getFlatKeyValues(value);
      arr.push(res);

    }
    return arr;
  } else {
    return obj;
  }
}

const opt2 = getFlatKeyValues(obj);
// const res = JSON.stringify(opt2);
console.log(opt2);