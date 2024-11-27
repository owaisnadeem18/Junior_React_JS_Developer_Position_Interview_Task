// Question_12

// is Palindrome 

// var arr1 = ["racecar", "balloon", "hockey", "hannah", "rainbow", "civic"];
    //   var arr2 = []; // arr2 should be filled with the result containing true if the work is word palindrome or otherwise.

    //   console.log(findPalindromes(arr1)); // function call

      //   console.log(arr2); // Expected output: [true, false, false, true, false, true]

      /** Function responsible to fill arr2 with results of each text found as palindrome with true or false
       */


// ------------------ Solution of the problem --------------------

let arr1 = ["racecar", "balloon", "hockey", "hannah", "rainbow", "civic"]

let arr2 = []

// Expected output: [true, false, false, true, false, true]

let findPalindromes = (array_one , array_two) => {
    let reversed_str = []
    let reversed_arr = []

    array_one.map((item) => {
        reversed_str = [] 
        for (let i = item.length - 1 ; i >= 0 ; i--) {
            reversed_str.push(item[i])  
        }
        reversed_arr.push(reversed_str.join(""))
    })

    // return reversed_arr == array_one

    for (let i = 0 ; i < array_one.length ; i++) {
        arr2.push(array_one[i] == reversed_arr[i])    
    }

    return arr2

}

console.log(findPalindromes(arr1 , arr2 ))