export class Recursor {
  constructor() {
    this.count = 0;
  }

  recurse(array) {
    console.log(array)
    if (array > 0) {
      console.log("this is array: ", array)
      this.recurse(array - 1);
      console.log("this array after recurse will be printed out 'the LIFO way' or the stack way : ", array)
    }
  }

  fibonacci(array) {
    console.log(`into the stack: ${array}`);

    if (array === 1 || array === 0) {
      return array;

    } else
      return this.fibonacci(array - 1) + this.fibonacci(array - 2)



  }

  replicate() {
    console.log("logging")
    this.count++;
    if (this.count > 3) {
      return `done count ${this.count
        }`;
    }
    return this.replicate();
  }

  factorial(array) {
    let reps = array - 1;
    let res = [];
    res.push(array)
    for (let i = 1; i <= reps; i++) { // console.log(i)

      console.log(res)
      res.push(array - i)
    }
    return res.reduce((a, b) => a * b);
  }

  factorialWithForLoopOnly(array) {
    console.log(array)
    let total = 1;
    for (let i = 0; i < array; i++) {
      console.log(`this is i: ${i}, array: ${array} total: ${total}`)
      total = total * (array - i);
    }
    console.log(`this is total: ${total}`)
    return total
  }

  factorialWithRecursion(array) {
    // 10
    // 3 * 2 * 1
    // 4 * 3 * 2 * 1

    // n * n-1 * n-2 * n-3
    if (array === 1) {
      console.log("this is base case, return 🏁 ")
      return 1;
    }
    return array * this.factorialWithRecursion(array - 1)
  }

  bubbleSort(array) {
    // takes the first two array, compares, and re-arrange if firstElement is > secondElement
    // this is repeated incrementally in the array by index
    console.log(array);

    let sortedarray = [];

    // base case
    // [7, 1, 4, 9, 3, 2, 5]
    // startPointer, endPointer, index(we will increment, and where startPointer will be pointed)
    let startPointer = 0;
    let endPointer = 0;
    let swap = false;
    let originalPos
    // let keepTabsOfUnsorted = [];
    for (let i = 0; i < array.length; i++) {
      console.log(`this is i: ${i}`)
      startPointer = i;
      endPointer = startPointer + 1
      console.log(`this is endPOinter ${endPointer}`)
      // compare array[startPointer] and array[endPointer]
      if (array[startPointer] > array[endPointer]) {
        swap = true;
        // keepTabsOfUnsorted.push(swap)
        console.log(`we gotta swap these array ${i}`)
        // [7, 1, 4, 9, 3, 2, 5]  --> [1, 4, 7, 3, 2, 5, 9]
        // [ array[startPointer], array[endPointer] ] = [ array[endPointer], array[startPointer] ];
        var b = array[startPointer];
        array[startPointer] = array[endPointer];
        array[endPointer] = b;
        console.log(array)
        sortedarray = array;
      }
    }

    // console.log(keepTabsOfUnsorted)


    if (swap) {
      this.bubbleSort(sortedarray);
    }

    // keepTabsOfUnsorted = [];

    return sortedarray;
  }

  bubbleSortNestedForLoops(array) { // [3,2,1]

    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
      let swap = false;
      console.log("i: ", i)
      for (let j = 1; j < length; j++) {
        console.log("j: ", j)

        if (array[j - 1] > array[j]) { // Swap the numbers
          let temp = array[j - 1];
          array[j - 1] = array[j];
          array[j] = temp;
          swap = true;
        }
        console.log(array)

      }
      if (!swap) {
        break;
      }
    }

    return array;
  }

  selectionSort(array) {
    console.log(array)
    const length = array.length;
    for (let i = 0; i < length; i++) {
      let subArr = array[i]
      // set current index as minimum
      let min = i;
      let temp = array[i];
      console.log("temp: ", temp, "min ", min)
      console.log(`this is array now ${array}`)
      for (let j = i + 1; j < length; j++) { // console.log(`Inner loop at index ${j} | outerforloop index ${min}`)
        console.log(`Is Inner ${array[j]
          } < outer ${array[min]
          }`)
        if (array[j] < array[min]) {
          console.log("yes it is - we adjust outer to inner's index value ", j)
          // update minimum if current is lower that what we had previously
          min = j;
        } else {
          console.log(`nope!`)
        }
      }
      array[i] = array[min];
      array[min] = temp;

    }
  }

  insertionSort(array) {
    console.log(array)
    for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let j = i - 1;
      console.log(`original array ${array}`)
      while (j >= 0 && array[j] > current) {
        console.log(`j is : ${j} and i is : ${i}`)
        array[j + 1] = array[j]
        console.log(array)
        j--;
      }
      console.log(`current ${current}`)
      array[j + 1] = current;
      console.log(`altered array ${array}`)
    }
    return array;
  }
  insertionSortReview(array) {
    console.log(array);
    for(let i = 1; i<array.length;i++){
      let current = array[i];
      let j = i-1;
      while(j>=0 && array[j]>current){
        array[j+1] = array[j];
        j--;
      }
      array[j+1] = current;
    }
    console.log(array)

  }

  mergeSort(array, side){
    console.log(array, side)
    // nlogn time complexity but n space complexity
    const half = Math.ceil(array.length/2)    
    const left = array.slice(0, half)
    const right = array.slice(half)

    if(array.length === 1){
      // console.log(`base case`)
      return array;
    }
    function merge(left, right){
      const result = [];
      let leftIndex = 0;
      let rightIndex = 0;
      // while(leftIndex < left.length && 
      //       rightIndex < right.length){
      //    if(left[leftIndex] < right[rightIndex]){
      //      result.push(left[leftIndex]);
      //      leftIndex++;
      //    } else{
      //      result.push(right[rightIndex]);
      //      rightIndex++
      //   }
      // }  

      while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex]< right[rightIndex]){
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex])
          rightIndex++;
        }
      }

     
      console.log("result here ",  result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)))
      console.log([...result])
      console.log([...left.slice(leftIndex)])
      console.log([...right.slice(rightIndex)])
      return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]
    }
    

    

    return merge(
      this.mergeSort(left, "left"),
      this.mergeSort(right, "right")
    )
  }
}

// NOTES:
// recursion:
// 1. identify the base case
// 2. identify the recursive case
// 3. get closer to solutio and RETURN if needed.
// 4. Usually you have two returns, one for the base case and the recursive case
