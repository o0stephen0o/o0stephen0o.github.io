var ary1 = ['Stephen','Hazel','Harris'];
var data =[];
var data1 = ['Sato','Takae','Osada','Hio','Saitoh'];

console.log(ary1.length);
console.log(Array.isArray(ary1));
ary1.push('Happy');
console.log(ary1);
var index1 = ary1.indexOf('Happy');
console.log(index1);
data.push(1);
data.push(2);
data.push(3);
data.push(4);
data.push(5);

console.log(data.shift());
data.pop();
console.log(data);

/* Substitute  取代*/

console.log(data1.splice(3,2, 'Stephen', 'Harris'));

console.log(data1);

/* Delete */
/*console.log(data1.splice(3,2));
console.log(data1); */

/* insert the data in deaigned array index */
console.log(data1.splice(2,0,'Happy'));
console.log(data1);