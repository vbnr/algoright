// Map approach
function getKeysWithUniqueValues(obj) {
  const valueCount = new Map();

  // Counts how many times each value appears
  for (const key in obj) {
    const value = obj[key];
    valueCount.set(value, (valueCount.get(value) || 0) + 1);
  }

  // Returns keys whose values appear only once
  return Object.keys(obj).filter(key => valueCount.get(obj[key]) === 1);
}

// Nested loop approach
function getKeysWithUniqueValues(obj) {
  const keys = Object.keys(obj);
  const result = [];

  for (let i = 0; i < keys.length; i++) {
    let isUniq = true;
    for (let j = 0; j < keys.length; j++) {
      if (i !== j && obj[keys[i]] === obj[keys[j]]) {
        isUniq = false;
        break;
      }
    }
    if (isUniq) result.push(keys[i]);
  }

  return result;
}
