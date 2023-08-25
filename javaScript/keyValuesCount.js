// count number of keys

const increaseValueByKey = (keyValues, key) => {
  if (keyValues[key]) {
    keyValues[key] = keyValues[key] + 1;
  } else {
    keyValues[key] = 1;
  }

}

const keyValues = {};

increaseValueByKey(keyValues, 1);
increaseValueByKey(keyValues, 1);
increaseValueByKey(keyValues, 2);

for (let key in keyValues) {
  console.log("key " + key + " = " + keyValues[key]);
}
