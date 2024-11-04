import { HashMap } from "./hash-map.js";

console.log("entro")

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
test.set('lion', 'golden');
test.set('moon', 'silver');

console.log(test.keys());
console.log(test.values());
console.log(test.length());
console.log(test.entries()); 

console.log(test.get('apple'));
console.log(test.has('elephant'));
console.log(test.has('nico'));
test.remove('elephant');
test.remove('apple');
console.log(test.has('elephant'));
test.set('moon','black');

console.log(test.entries()); 
console.log(`total items : ${test.totalItems}`);
console.log(test.length());
console.log(test.keys());
let k = 0; 