const repeatString = function(string,num) {
    if (num == 0){
        return "";
    }else if(num < 0){
        return "ERROR";
    }else if(string === 0){
        return "";
    }
    else{
        return string.repeat(num);
    }    
};

// Do not edit below this line
module.exports = repeatString;
