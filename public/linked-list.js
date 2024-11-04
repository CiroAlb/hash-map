export class Node{
    constructor(value,info,key, nextNode){
        this.value = value;
        this.info = info;
        this.key = key;
        this.nextNode = nextNode;
    }
    set (setNext){
        this.nextNode = setNext
    }
  }
  
export class LinkedList{
    constructor(head = null){
        this.head = head;
    }
  
    append(newNode){
        let node = this.head;
        while(node.nextNode != null){
            node = node.nextNode;
        }
        node.nextNode = newNode;
    }
  
    prepend(newNode){
        newNode.nextNode = this.head;
        this.head = newNode;
    }
  
    size(){
        let node = this.head;
        let count = 0;
        while(node){
            count++;
            node = node.nextNode;
        }
        return count
    }
  
    head(){
        let node = this.head
        return node;
    }
  
    tail(){
        let node = this.head;
        while(node.nextNode != null){
            node = node.nextNode;
        }
        return node
    }
  
    at(index){
        let node = this.head;
        let count = 0;
        index--;
        while(count < index && node.nextNode !== null ){
            node = node.nextNode;
            count++;
        }
        if(count >= index){
            return node
        }
        let errorNode = new Node("no existe");
        return  errorNode
    }
  
    pop(){
        let node = this.head;
        let prevNode = null;
        while(node.nextNode !== null){
            prevNode = node;
            node = node.nextNode;
        }
        if (prevNode === null) {
            this.head = null;
        } else {
            prevNode.nextNode = null;
        }
    }
  
    contains(hash,key){
        let node = this.head;
        let isFind = false;
        while(node && isFind === false){
            if(node.value === hash && node.key === key){
                isFind = true;
            }
            node = node.nextNode;
        }
        return isFind;
    }
  
    find(value){
        let node = this.head;
        let isFind = false;
        let count = 0
        while(node && isFind === false){
            if(node.value === value){
                isFind = true;
            }
            node = node.nextNode;
            count++;
        }
        if(isFind === true){return this.at(count)}
        else return -1
    }
  
    toString(){
        let arr = [];
        let node = this.head;
        while(node){
            arr.push(`${node.value}:${node.info}`);
            node = node.nextNode;
        }
        return `(${arr.join(') -> (')})`
    }
  
    keyArray(){
        let arr = [];
        let node = this.head;
        while(node){
            arr.push(`${node.key}`);
            node = node.nextNode;
        }
        return arr;
    }
  
    infoArray(){
        let arr = [];
        let node = this.head;
        while(node){
            arr.push(`${node.info}`);
            node = node.nextNode;
        }
        return arr;
    }
  
    dataArray(){
        let arr = [];
        let node = this.head;
        while(node){
            arr.push([`${node.key}`,`${node.info}`]);
            node = node.nextNode;
        }
        return arr;
    }
  
  
    /* insertAt(value,info,key, index){
        let node = this.head;
        let prevNode = null;
        let count = 1;
        let newNode = new Node(value,info,key);
        while(count < index && node && index > 1){
            prevNode = node;
            node = node.nextNode;
            count++;
        }
        if(index === 1){
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        else if (!node || index < 1) {
            console.log("error");
        } else {
            prevNode.nextNode = newNode;
            newNode.nextNode = node;
        }
    } */
  
    findNodeByKey(hash, key){
        let value = hash;
        let node = this.head;
        let isFind = false;
        let count = 0
        while(node && isFind === false){
            if(node.value === value && node.key === key){
                isFind = true;
                return count;
            }
            node = node.nextNode;
            count++;
        }
        return -1
    }
  
    returnNodeByKey(hash, key){
        let value = hash;
        let node = this.head;
        let isFind = false;
        let count = 0
        while(node && isFind === false){
            if(node.value === value && node.key === key){
                isFind = true;
            }
            else{node = node.nextNode;
            count++;}
        }
        if(isFind === true){return node.info}
        else return null
    }
  
    insertAt(value, index){
        let node = this.head;
        let prevNode = null;
        let count = 0;
        let newNode = new Node(value);
        while(count < index && node && index > 0){
            prevNode = node;
            node = node.nextNode;
            count++;
        }
        if(index === 0){
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        else if (!node || index < 0) {
            console.log("error");
        } else {
            prevNode.nextNode = newNode;
            newNode.nextNode = node;
        }
    }
  
    removeAt(index){
        let node = this.head;
        let prevNode = null;
        let count = 0;
        if(index === 0){
            this.head = node.nextNode;
            return
        }
        if (!node || index < 0) {
            console.log("error");
            return
        } 
        while(count < index && node && index > 0){
            prevNode = node;
            node = node.nextNode;
            count++;
        }
        if(node===null){
            prevNode.nextNode = null;
        }else{
        prevNode.nextNode = node.nextNode;
        }
    }
  }
  