// returns the position (lowest) in which the element (2nd parameter)
// should be inserted into a given array after it is sorted. 


function getIndexToIns(arr, num) {
    let sort_arr = arr.sort((a,b) => a - b);
    console.log(sort_arr);
    for (let i=0;i<sort_arr.length;i++){
      if (sort_arr[i] >= num){
        return i;
      }
    }
    return sort_arr.length;
  }
  
  console.log(getIndexToIns([40, 60], 50));