export class IntQuestion {
  constructor() { }
  // hashmap technique/object technique
  twoSumNestedForloops(itemsArray, target) { // accepts an array and returns pair that adds up to the target num
    console.log(`Items Array: ${itemsArray} and target: ${target}`)

    // PSUEDO CODE:
    // take target as a minuend, firstItem as subtrahend, look for 👀 difference in the succeeding items in the array
    // ex: [1,2,3,4] 5
    // 5 - 1 = 4 we check for 4 in the succeeding items in the array
    // if there is a 4, we check its index and return it as the pair of the index of subtrahend.

    let difference;
    let pair = null;

    for (let i = 0; i < itemsArray.length; i++) {
      difference = target - itemsArray[i];
      for (let j = i + 1; j < itemsArray.length; j++) {
        if (difference === itemsArray[j]) {
          pair = [i, j];
          return pair
        }
      }
    }

    return pair;
  }
  // hashmap technique/object technique
  twoSumOptimal(nums, target) {
    let numsMap = {};
    for (let i = 0; i < nums.length; i++) {
      const ntf = target - nums[i]
      numsMap[ntf] = nums.indexOf(ntf);
      if (nums.indexOf(ntf) >= 0 && (i !== numsMap[ntf])) {
        return [i, numsMap[ntf]]
      }
    }
    return null;
  }
  // hashmap technique/object technique
  twoSumsAlternate(nums, target) {
    console.log("twosum twoSumsAlternate")
    console.log(nums, target)
    const map = {};
    for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.hasOwnProperty(complement) && map[complement] !== i) {
        return [map[complement], i].reverse();
      }
    }
    // In case there is no solution, we'll just return null
    return null;
  }
  // hashmap technique/object technique
  twoSumFastest(nums, target) {
    console.log("twosum fastest")
    const complements = {};
    for (let i = 0; i < nums.length; i++) {
      console.log(complements, nums[i])
      console.log(complements[nums[i]])
      if (complements[nums[i]] >= 0) {
        return [complements[nums[i]], i]
      }
      else {
        // keep creating the complements object
        complements[target - nums[i]] = i;
      }
    }
  }
  // two pointer technique
  containerWithMostWater(array) {
    // [7,1,3,2,9]
    console.log(array)

    // height
    const getHeight = (first, second) => {
      // height is the lowest number between two numbers (because of water spill)
      // console.log(first, second)
      let nums = Math.min(first, second);
      // console.log(`height: ${nums}`)
      return nums;
    }

    let max = 0;
    let res = {};
    for (let i = 0; i <= array.length; i++) {
      for (let j = i + 1; j <= array.length; j++) {
        if (array[j]) {
          let height = getHeight(array[i], array[j]);
          let width = j - i;
          let area = height * width;
          max = Math.max(max, area);
          res[area] = { pair: `j=${array[j]} and i=${array[i]}`, height, width: j - i, area }
        }
      }
    }
    console.log(res[max])
    return max;
  }
  // two pointer technique
  containerWithMostWaterFirstAttempt(heights) {
    // [1,8,6,2,5,4,8,3,7]
    console.log(heights.length)
    let max = [];
    let pointerA = 0;
    let pointerB = heights.length - 1;
    const getLowerPointer = (a, b) => {
      if (heights[a] < heights[b]) {
        pointerA++;
      } else if (heights[a] > heights[b]) {
        pointerB--;
      }

      if (heights[a] === heights[b] && heights.length > 2 && a !== b) {
        pointerA++;
        pointerB--;
      }
    }

    for (let i = 0; i <= heights.length; i++) {
      if (pointerA !== pointerB && heights.length >= 2 && pointerB - pointerA > 0) {
        // console.log(heights[pointerA],heights[pointerB], (pointerB-pointerA>0))
        let height = Math.min(heights[pointerA], heights[pointerB])
        let width = pointerB - pointerA;
        getLowerPointer(pointerA, pointerB);

        // console.log(`height (min of two nums): ${height}`)
        let area = height * width;
        max.push(area)
      }
    }
    let answer = Math.max(...max)
    return answer;
  }
  // two pointer technique
  containerWithMostWaterSecondAttempt(heights) {
    // [1,8,6,2,5,4,8,3,7]
    console.log(heights.length)
    let max = 0;
    let pointerA = 0;
    let pointerB = heights.length - 1;
    let area;

    while (pointerA < pointerB) {
      area = (Math.min(heights[pointerA], heights[pointerB])) * (pointerB - pointerA)
      console.log(`area: ${area}`)
      if (heights[pointerA] < heights[pointerB]) {
        pointerA++;
      } else {
        pointerB--;
      }
      max = Math.max(max, area)
    }
    return max;
  }
  // two pointer technique
  trappingRainWater(height) {
    console.log(height)

    if (!height) {
      return 0
    }

    let left = 0
    let right = height.length - 1

    let leftMax = height[left]
    let rightMax = height[right]

    let totalWater = 0

    while (left < right) {
      console.log(leftMax, rightMax)
      if (leftMax < rightMax) {
        left++
        leftMax = Math.max(leftMax, height[left])
        totalWater += leftMax - height[left]
        console.log("left stuff", leftMax, height[left], totalWater)
      } else {
        right--
        rightMax = Math.max(rightMax, height[right])
        totalWater += rightMax - height[right]
        console.log("right stuff", rightMax, height[right], totalWater)
      }

    }
    return totalWater
  }
  // two pointer technique
  trappingRainWaterV2(height) {
    console.log(height)
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    let maxLeft = height[leftIndex];
    let maxRight = height[rightIndex]

    let waterPockets = 0;


    while (leftIndex < rightIndex) {
      if (maxLeft < maxRight) {
        leftIndex++;
        maxLeft = Math.max(maxLeft, height[leftIndex]) // compare maxleft to current height, set new maxLeft 
        waterPockets += maxLeft - height[leftIndex];

      } else {
        rightIndex--
        maxRight = Math.max(maxRight, height[rightIndex])
        waterPockets += maxRight - height[rightIndex]
      }
      console.log(waterPockets)

    }
    return waterPockets;
  }
  intoRomanNumerals(nums) {
    // 8 = VIII
    // 7 = VII
    // 13 = XIII
    // 23 = XXIII
    // 57 = LVII
    // 88 = LXXXVIII
    // 357 = CCCLVII
    // 875 = D CCC LXX V
    // 1358 = M CCC L VIII
    // 2877 = MM DCCC LXX VII

    // 1 - 4 
    // 5 - 9  -> 10s
    // 10 - 40
    // 50 - 90 -> 100s
    // 100 - 400
    // 500 - 900 > 1000s

 

    const rectifySingles = (singles) => {
      let res = [];
      if(singles < 10 && singles > 0){
        if(singles===4){
          res.push("IV")
        } else if(singles === 9){
          res.push("IX")
        } else if(singles < 4){
          for(let i=0;i<singles;i++){
            res.push("I")
          }
        } else if(singles >= 5){
          res.push("V")
          for(let i=0;i<(singles-5);i++){
            res.push("I")
          }
        } 
        
      }

      return res.join("")
    }

    const rectifyDoubledigits = (doubleDigits) => {

      if(doubleDigits < 100 && doubleDigits > 9){
        let res = [];
        let tens = Math.trunc(doubleDigits/10)

        if(tens == 4){ // 40s and under
          res.push("XL")
        } else if(tens == 9){ // 90s
          res.push("XC")
        } else if(tens >= 5 && tens < 9){ // 50s
          res.push("L")
        }

        // 40s and under 

        if(tens < 4 && tens > 0){
          for(let i=0;i<tens;i++){
            res.push("X")
          }
        }

        // 50 - 89

        if(tens > 5 && tens < 9){
          for(let i=0;i<tens-5;i++){
            res.push("X")
          }
        }
        return res.join("")
      }
    }

    const rectifyTripledigits = (tripleDigits) => {

      if(tripleDigits < 1000 && tripleDigits >= 100){ // 100 - 999 // D=500 400s 900s // CCC CD DCCC CM
        let res = [];
        let hundreds = Math.trunc(tripleDigits/100)
        console.log(hundreds, tripleDigits)
        if(hundreds >= 0 && hundreds < 4){
          for(let i=0;i<hundreds;i++){
            res.push("C")
          }
        } else if(hundreds == 4){
          res.push("CD")
        }  else if(hundreds >= 5 && hundreds < 9){
          res.push("D")
          for(let i=0;i<hundreds-5;i++){
            res.push("C")
          }
        } else if(hundreds == 9){
          res.push("CM")
        }
        return res.join("")
      }
    }

    const rectifyThousands = (fourDigits) => {

      if(fourDigits >= 1000 ){ // 100 - 999 // D=500 400s 900s // CCC CD DCCC CM
        let res = [];
        let thousand = Math.trunc(fourDigits/1000)

        if(thousand) {
          for(let i=0;i<thousand;i++){
            res.push("M")
          }
        }
        return res.join("")
      }
    }

  
    let final = [];
    let numberAfterDecimal;
    let singles;

    if(nums.toString().length == 1){
      final.push(rectifySingles(nums))
    } else if (nums.toString().length == 2){
      final.push(rectifyDoubledigits(nums))
      // how many tens ?
      numberAfterDecimal = parseInt(((nums/10) % 1).toFixed(1).substring(2));
      final.push(rectifySingles(numberAfterDecimal))
    } else if (nums.toString().length == 3){
       // how many hundreds ?
       numberAfterDecimal = parseInt(((nums/100) % 1).toFixed(2).substring(2));
       singles = parseInt(((numberAfterDecimal/10) % 1).toFixed(1).substring(2));

      final.push(rectifyTripledigits(nums))
      final.push(rectifyDoubledigits(numberAfterDecimal))
      final.push(rectifySingles(singles))
    } else if (nums.toString().length == 4){
      // 1000 and up M MMM CM MMMCM // how many thousands
      let numberAfterDecimal3 = parseInt(((nums/1000) % 1).toFixed(3).substring(2));
      let numberAfterDecimal2 = parseInt(((nums/100) % 1).toFixed(2).substring(2));
      numberAfterDecimal = parseInt(((nums/10) % 1).toFixed(1).substring(2));

      final.push(rectifyThousands(nums))
      final.push(rectifyTripledigits(numberAfterDecimal3))
      final.push(rectifyDoubledigits(numberAfterDecimal2))
      final.push(rectifySingles(numberAfterDecimal))
    }
    
    
    
    return final.join("")
  };
}
