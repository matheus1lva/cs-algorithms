const quicksort = (arr) => {
  quicksortHelper(arr, 0, arr.length - 1);

  return arr;
}

const quicksortHelper = (arr, left, right) => {
  if (left < right) {
    const pivotFinalRestingPosition = partition(arr, left, right);

    quicksortHelper(arr, left, pivotFinalRestingPosition - 1);
    quicksortHelper(arr, pivotFinalRestingPosition + 1, right);
  }
}

const partition = (arr, left, right) => {
  const pivot = arr[right];

  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;

      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, right);

  return i + 1;
}

const swap = (arr, first, second) => {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

const myArray = [7,6,5,4,3,2,1,0];
const quicksorted = quicksort(myArray);
console.log(quicksorted);