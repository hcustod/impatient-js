function palindrome(str){
    let lower = str.toLowerCase()
        .replace(/[^a-z1-9]/g, "");

    if (lower === lower.split("").reverse().join("")){
        return true;
    }
    return false;
    }

console.log(palindrome("_ERZye"))
console.log(palindrome("_e+=e"))


