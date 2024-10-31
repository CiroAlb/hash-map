import { Node, LinkedList } from "./linked-list.js";

export class HashMap{
  constructor(size = 16){
    this.map = Array.from({length: size}, () => new LinkedList());
    this.size = size;
    this.load = size * 0.75;
    this.totalItems = 0;
  }

  hash(key) {
    let hashCode = 0;
           
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    
    return hashCode;
  } 

  set(key, value){
    let hash = this.hash(key);
    let NodeIndex = hash % this.size;

    /* if (this.map[NodeIndex].head === null) {
      this.map[NodeIndex] = new LinkedList();
    } */

    if(this.totalItems >= this.load){
      let prevSize = this.size;
      this.size = this.size * 2;
      this.reordenar(prevSize);
    }

    let existingNodeIndex = this.map[NodeIndex].findNodeByKey(hash,key);
    if (existingNodeIndex !== -1) {
        this.map[NodeIndex].removeAt(existingNodeIndex);
    }
  
    let node = new Node(hash,value,key);
    this.map[NodeIndex].prepend(node);
    this.totalItems++;
  }

  get(key){
    let hash = this.hash(key);
    let NodeIndex = hash % this.size;

    return this.map[NodeIndex].returnNodeByKey(hash,key)
  }
  
  has(key){
    let hash = this.hash(key);

    for(let i = 0 ; i < this.size ; i++){
      if(this.map[i].contains(hash,key) === true){return true}
    }
    return false
  }

  remove(key){
    let hash = this.hash(key);

    for(let i = 0 ; i < this.size ; i++){
      let count = this.map[i].findNodeByKey(hash,key);
      if(count !== null){
        this.map[i].removeAt(count);
      }
    }
  }

  length(){
    let count = 0;
    for(let i = 0 ; i < this.size ; i++){
      count = count + this.map[i].size();
    }
    return count;
  }

  clear(){
    this.map = Array.from({length: this.size}, () => new LinkedList()); 
  }

  keys(){
    let arr = [];

    for( let i = 0 ; i < this.size ; i++){
      arr.concat(this.map[i].keyArray());
    }

    return arr;
  }

  values(){

    let arr = [];

    for( let i = 0 ; i < this.size ; i++){
      arr.concat(this.map[i].infoArray());
    }

    return arr;
  }

  entries(){
    let arr = [];

    for(let i = 0 ; i < this.size ; i++){
      arr.concat(this.map[i].dataArray());
    }

    return arr;
  }

  entriesAux(prevSize){
    let arr = [];

    for(let i = 0 ; i < prevSize ; i++){
      arr.concat(this.map[i].dataArray());
    }

    return arr;
  }

  reordenar(prevSize){
    let auxArr = this.entriesAux(prevSize);

    this.clear();

    auxArr.forEach( (element) =>{
      this.map.set(element[0],element[1]);
    });
  }

}



const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
/* test.set('lion', 'golden');
test.set('moon', 'silver');
 */ 
//console.log(test.keys());
//console.log(test.values());
//console.log(test.length());
console.log(test.entries()); 

console.log(test.get('apple'));
console.log(test.has('elephant'));
console.log(test.has('nico'));
//test.remove('elephant');
console.log(test.has('elephant'));