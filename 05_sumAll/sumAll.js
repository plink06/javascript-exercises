const sumAll = function(first_num, second_num) {

    let sum = 0;
    if(first_num<0 || second_num<0){
        return 'ERROR';
    }else if( !(typeof first_num== 'number')|| !(typeof second_num== 'number')){
        return 'ERROR';
    }else if(first_num<second_num){
        for(let i = first_num; i <= second_num ; i++){
            sum += i;
        };
        return sum;
    }else{
        for(let i = second_num; i <= first_num ; i++){
            sum += i;
        };
        return sum;

    }
    

};

// Do not edit below this line
module.exports = sumAll;

//i think we wanna do the math thing n + n+1
