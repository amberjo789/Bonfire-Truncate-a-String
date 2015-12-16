function truncate(str, num) {
  
  var length = str.length;
  var endSlice = length - num;
  var newStr = "";
  
  if(str.length>num&&num>3){
    newStr = str.slice(0, -(endSlice+3));
    newStr = newStr.concat("...");
    str = newStr;
  }
  else if(str.length>num&&num<=3){
    newStr = str.slice(0, -(endSlice));
    newStr = newStr.concat("...");
    str = newStr;
  }
  
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
