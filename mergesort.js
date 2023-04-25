const arr = [23, 4, 67, 32, 1, 7, 56, 5, 89];

const merge = (array) => {
  if (array.length < 2) {
    return arr;
  }
  const mid = Math.floor(array.length / 2);
  left = merge(array.slice(0, mid));
  right = merge(array.slice(mid));

  return mergesorting(merge(left), merge(right));
};

const mergesorting = (leftArr, rightArr) => {
  const finalArr = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] <= rightArr[0]) {
      finalArr.push(leftArr.shift());
    } else {
      finalArr.push(rightArr.shift());
    }
  }
  return finalArr.concat(leftArr, rightArr);
};

console.log(merge(arr));
