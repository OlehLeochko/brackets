module.exports = function check(str, bracketsConfig) {
bracketsConfig=bracketsConfig.map(el=>{
  return el.join('')}
)
for(let i = 0; i < bracketsConfig.length; ){
  if(str.includes(bracketsConfig[i])){
      str = str.replace(bracketsConfig[i], '');
      i = 0;
  } else {
      i = i + 1;
  }
};
return str.length === 0 ? true : false; 
}
