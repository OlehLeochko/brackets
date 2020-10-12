module.exports = function check(str, bracketsConfig) {
  str=str.split('');
//for(let )
let arr=bracketsConfig.map(el=>{
  return el.join('')}
)
//console.log('str='+str)
//let arr2=arr1.toString().split("")
for(let i=0; i<str.length; i++){
  for(let j=0; j<arr.length; j++){
    if(str[i]==arr[j]){
      str=str.filter(item=>item!=str[i]);
    }
  }
}
if(str.length===0){
  return true;
}
return false;
//str.length===0?true:false;
}
