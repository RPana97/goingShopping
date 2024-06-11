let shoppingList = ['pop tarts','ramen noodles', 'chips', 'salsa', 'coffee'];
console.log (`Step 1: Shopping List : ${shoppingList.join (', ')}`);
console.log (' ');
shoppingList.push ('fruit loops');
console.log (`Step 2: Shopping List : ${shoppingList.join(', ')}`);
console.log (' ');
shoppingList[shoppingList.indexOf('coffee')]='fair trade coffee';
console.log (`Step 3: Shopping List : ${shoppingList.join(', ')}`);
console.log (' ');
shoppingList[2]='rice';
shoppingList[3]='beans';
console.log (`Step 4: Shopping List : ${shoppingList.join(', ')}`);
console.log (' ');
shoppingCart=[];
console.log (`Step 5: Shopping Cart : ${shoppingCart}`);
console.log (' ');
shoppingCart.push (shoppingList.pop());
console.log (`Step 6: Shopping Cart : ${shoppingCart}`);
console.log (`        Shopping List : ${shoppingList}`);
console.log (' ');
shoppingCart.push (shoppingList.shift());
console.log (`Step 7: Shopping Cart : ${shoppingCart}`);
console.log (`        Shopping List : ${shoppingList}`);
console.log (' ');

console.log (`Step 8: While Loop`);
let o = 0;
while (shoppingList.length > 0){
    shoppingCart.push (shoppingList.pop());
    o++
}
console.log (`        Shopping Cart : ${shoppingCart}`);
console.log (`        Shopping List : ${shoppingList}`);
console.log (' ');
console.log (`Step 9: alphabetical : ${shoppingCart.sort()}`);
console.log (`Step 9: reverse : ${shoppingCart.sort().reverse()}`);
console.log (` `);
console.log (`Step 10: Shopping Cart : ${shoppingCart.join(', ')}`);