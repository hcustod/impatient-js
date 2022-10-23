// Big proud - didn't need any assistance for this. 
// Not optimal at all but meh. 

function repeatStringNumTimes(str, num) {
    if (num <= 0){
      return "";
    }
    else{
      let ret = []
      for (let i = num; i != 0; i-- ){
        ret += str; 
      }
      return ret;
    }
  }
  
  repeatStringNumTimes("abc", 3);


  /// vs recursion

/*  function repeatStringNumTimes(str, num) {
    if (num < 1) {
      return "";
    } else {
      return str + repeatStringNumTimes(str, num - 1);
    }
  }  */ 