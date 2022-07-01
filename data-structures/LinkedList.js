export class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  append(value){
    const newNode = {
      value:value,
      tail:null
    };
    if(this.tail){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(!this.head){
      this.head = newNode;
    }

    return this;
    
  }

  prepend(value){
    const newNode = {
      value:value,
      tail:this.head
    };
    this.head = newNode;

    console.log("head here ",this.head)
    console.log("tail here ",this.tail)
    if(this.tail == null){
      this.head = newNode;
    }
    

    return this;
  }

  delete(value){
    while(this.head && this.tail){
      console.log(this.tail)
    }
    
  }

  toArray(){
    let elements = [];
    let curNode = this.head;
    while(curNode){
      elements.push(curNode);
      curNode = curNode.next;
    }

    return elements;
  }

}

