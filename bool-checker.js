// without using typedef - made by yours truly

function booWho(bool) {
    return (bool === true || bool === false) ? true : false
  }
  
  booWho(null);

/*  solution from freecodecamp 

function booWho(bool) {
  return typeof bool === "boolean";
}

// test here
booWho(null);

*/
