class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

export class Tree {
  constructor() {
    this.root = null;
  }

  insertNums(value) {
    let newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        // console.log('currentNode value', currentNode.value);
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  breadthFirstSearch(){
    // searches nodes by level (from left to right or right to left) until the item is found or search has ended
    // takes a lot of memory space because it needs to remember the parent nodes
    let currentNode = this.root;
    let list = [];
    let queue = []; // this will keep the level where at in the tree

    queue.push(currentNode); // add the root node (which is the current node);

    while(queue.length > 0){
      let currentNode = queue.shift() // simple removes the first item in the queue
      console.log(currentNode.value)
      list.push(currentNode.value); // then save this in the list
      if(currentNode.left){ // does currentNode.value has left child? if yes:
        queue.push(currentNode.left) 
      }
      if(currentNode.right){ // does currentNode.value has right child
        queue.push(currentNode.right) 
      }
    }
    console.log(currentNode)
    return list;

    
  }

  // Depth First Search DFS

  DFSInorder(){
    return traverseInOrder(this.root, [])
  }

  DFSPreorder(){
    return traversePreOrder(this.root, [])
  }

  DFSPostorder(){
    return traversePostOrder(this.root, [])
  }
}

function traverseInOrder(node, list){
  // console.log("node value INORDER: ",node.value)
  // does the node have a left child
  if(node.left) {
    // were gonna keep going down using recurision
    traverseInOrder(node.left, list)
  }
  // if no more left child node
  list.push(node.value)
  // same wth right children
  if(node.right){
    traverseInOrder(node.right, list)
  }
  // list.push(node.value)
  return list
}

function traversePreOrder(node, list){
  console.log("node value PREORDER: ",node.value, " nodeleft? ", node.left, " noderight? ", node.right)
  list.push(node.value)
  // does the node have a left child
  console.log("is there a left child?")
  if(node.left) {
    console.log("we have a left child")
    // were gonna keep going down using recurision
    traversePreOrder(node.left, list)
  }
  console.log("no left child")
  // same wth right children
  console.log("is there a right child?  ", node.value)
  if(node.right){
    console.log("we have right child: ", node.value)
    traversePreOrder(node.right, list)
  }
  console.log("no right child")
  // list.push(node.value)
  console.log("heres the list so far: ", list)
  console.log("where we at: ", node.value)
  return list
  
}

//     ==== TREE DIAGRAM ====
//             9 
//        4        20
//      1  6    15   170
