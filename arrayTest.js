getFirstValue = [1,2,3];
console.log (getFirstValue[0]);
incrementItem =  [0,2,4,6,8,10,12,14];
for (let i=0; i<incrementItem.length; i++){
    incrementItem[i]+=1;
}
console.log(incrementItem);
function rotate (x) {
    x.push(x.shift());
    return x;
}
incrementItem = rotate(incrementItem);
console.log (incrementItem);