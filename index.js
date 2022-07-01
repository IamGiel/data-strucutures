import { Recursor } from './recursor.js';
import { Tree } from './tree.js';
import { LinkedList } from './data-structures/LinkedList.js';
import { IntQuestion } from './questions/question.js';
import HashTable from './data-structures/HashTable.js';

let newTree = new Tree();
newTree.insertNums(9);
newTree.insertNums(4);
newTree.insertNums(6);
newTree.insertNums(20);
newTree.insertNums(170);                                                                                                                                    
newTree.insertNums(15);
newTree.insertNums(1);

// console.log(newTree)

// let breadthFirstSearch = newTree.breadthFirstSearch();
// console.log(breadthFirstSearch);

// console.log(newTree.DFSInorder())
// console.log(newTree.DFSPreorder())


// let newRecursor = new Recursor();
// console.log(newRecursor.recurse(5));

// console.log(newRecursor.fibonacci(3)) // 0 1 1 2 3 5

// console.log(newRecursor.replicate())

// console.log("factorial case")
// console.time();
// console.log(newRecursor.factorial(25))
// console.timeEnd();


// console.log("factorialWithRecursion case")
// console.time();
// console.log(newRecursor.factorialWithRecursion(25))
// console.timeEnd();

// console.log("factorialWithForLoopOnly case")
// console.time();
// console.log(newRecursor.factorialWithForLoopOnly(3))
// console.timeEnd();


// test
// console.log("bubble-sort case")
// console.time();
// console.log(newRecursor.bubbleSort([7,1,4,9,3,2,5])) 
// console.timeEnd();

// console.log("selection-sort w nested forloops case")
// console.time();
// console.log(newRecursor.insertionSort([7,1,4,9,3,2,5])) 
// console.timeEnd();

// console.log("insertion-sort w nested forloops case")
// console.time();
// console.log(newRecursor.insertionSort([7,1,4,9,3,2,5])) 
// console.timeEnd();

// console.log("insertion-sort w nested forloops case")
// console.time();
// console.log(newRecursor.insertionSortReview([7,1,4,9,3,2,5])) 
// console.timeEnd();

// console.log(newRecursor.mergeSort([7,1,4,9,3,2,5], null))   


// let newLinkedList = new LinkedList()

// console.log("linkedList")
// console.time();
// console.log(newLinkedList.append(5))
// newLinkedList.append(4)
// newLinkedList.append("Hello")
// newLinkedList.append(false)
// console.log(JSON.stringify(newLinkedList.prepend(" hehehehehehehehe ")))

// console.log(JSON.stringify(newLinkedList.prepend(" hoooooooooooooo ")))
// // console.log(JSON.stringify(newLinkedList.toArray()))

// console.log(newLinkedList.delete(5))

// console.timeEnd();

let newIntQuestions = new IntQuestion();
// console.log(newIntQuestions.twoSum([1,7,6,4,3], 11))
// console.log(newIntQuestions.twoSum([1], 25))
// console.log(newIntQuestions.twoSum([1,7,9,3,2], 11))
// console.log(newIntQuestions.twoSum([], 11))

// console.time("first");
// console.log(newIntQuestions.twoSumOptimal([3,2,4], 6))
// console.timeEnd("first");

// console.time("second");
// console.log(newIntQuestions.twoSumsAlternate([3,2,4], 6));
// console.timeEnd("second");

// console.time("third");
// console.log(newIntQuestions.twoSumsAlternate([3,2,4], 6));
// console.timeEnd("third");



// console.log(`10: ${JSON.stringify(newIntQuestions.intoRomanNumerals(10))}`)
// console.log(`99: ${JSON.stringify(newIntQuestions.intoRomanNumerals(99))}`)
// console.log(`4: ${JSON.stringify(newIntQuestions.intoRomanNumerals(4))}`)
// console.log(`45: ${JSON.stringify(newIntQuestions.intoRomanNumerals(45))}`)
// console.log(`39: ${JSON.stringify(newIntQuestions.intoRomanNumerals(39))}`)
// console.log(`9: ${JSON.stringify(newIntQuestions.intoRomanNumerals(9))}`)
console.log(`100: ${JSON.stringify(newIntQuestions.intoRomanNumerals(300))}`)
// console.log(`455: ${JSON.stringify(newIntQuestions.intoRomanNumerals(455))}`)
console.log(`600: ${JSON.stringify(newIntQuestions.intoRomanNumerals(600))}`)
// console.log(`800: ${JSON.stringify(newIntQuestions.intoRomanNumerals(800))}`)
// console.log(`900: ${JSON.stringify(newIntQuestions.intoRomanNumerals(900))}`)
// console.log(`768: ${JSON.stringify(newIntQuestions.intoRomanNumerals(768))}`)
// console.log(`1000: ${JSON.stringify(newIntQuestions.intoRomanNumerals(1000))}`)
// console.log(`1233: ${JSON.stringify(newIntQuestions.intoRomanNumerals(1233))}`)
// console.log(`2345: ${JSON.stringify(newIntQuestions.intoRomanNumerals(2345))}`)
console.log(`3045: ${JSON.stringify(newIntQuestions.intoRomanNumerals(3045))}`)
console.log(`3999: ${JSON.stringify(newIntQuestions.intoRomanNumerals(3999))}`)




// let newHT = new HashTable();
// newHT.insert("Alias", "Alpha")
// newHT.insert("Name", "Gel")
// console.log(newHT)






