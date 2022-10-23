function truncateString(str, num) {
    if (str.length > num){
      return str.slice(0, num) + "..."; // no need to use join or convert to array
    } 
    return str; 
  }
  
  console.log("hello");
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));