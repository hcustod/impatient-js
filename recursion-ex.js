// review this with leo

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } 
    else {
      const nums = rangeOfNumbers(startNum, endNum -1);
      nums.push(endNum);
      return nums; 
    }
  };
  
  console.log(rangeOfNumbers(1,5));