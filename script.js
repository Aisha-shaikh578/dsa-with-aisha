let arr = [3, 2, 4, 5, 1];

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let partitionIdx = partition(arr, low, high);

    quickSort(arr, low, partitionIdx - 1);
    quickSort(arr, partitionIdx + 1, high);
  }
  return arr;
}

console.log(quickSort(arr, 0, arr.length-1));