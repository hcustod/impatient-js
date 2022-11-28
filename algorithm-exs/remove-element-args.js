
/// very clean functional solution to flitering all second arguments given from first arg. Very pretty. 

function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
  }