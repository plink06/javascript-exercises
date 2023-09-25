const removeFromArray = function(arr, ...nums) {
    for (let n of nums){
        if(!arr.includes(n)){
            continue;
        }else{    
            let index = arr.indexOf(n);
            arr.splice(index,1)
        }
    };
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
//i want to check if the number is in the array and if its not i wanna 
//skip that iteration of the loop.