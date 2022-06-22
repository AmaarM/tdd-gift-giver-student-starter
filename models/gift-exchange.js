const errors = require('../utils/errors')

class GiftExchange {
  
    static pairs(names) {
    let tuples = [];
    let set = new Set();


    if (names.length % 2 != 0) {
        throw new errors.BadRequestError("Number of names cant be odd");
    }
    else{
    while (set.size < names.length) {
      let randomNum1 = Math.floor(Math.random() * names.length);
      let randomNum2 = Math.floor(Math.random() * names.length);
      if (!set.has(randomNum1) && !set.has(randomNum2)) {
        set.add(randomNum1);
        set.add(randomNum2);
      }
    }

    let uniqueArr = [];
    set.forEach((e) => {
      uniqueArr.push(e);
    });

    for (let i = 0; i < names.length; i++) {
      let num1 = uniqueArr[i];
      let num2 = uniqueArr[i + 1];
      i++;

      let arr = [names[num1], names[num2]];
      tuples.push(arr);
    }
    return tuples;
    }
  }


  static traditional(names) {
    let set = new Set();

    while (set.size < names.length) {
      let randomNum1 = Math.floor(Math.random() * names.length);
      let randomNum2 = Math.floor(Math.random() * names.length);
      if (!set.has(randomNum1) && !set.has(randomNum2)) {
        set.add(randomNum1);
        set.add(randomNum2);
      }
    }

    let uniqueArr = [];
    set.forEach((e) => {
      uniqueArr.push(e);
    });

    let arr = [];
    let i = 0;
    var p1 = 1;
    var p2 = 2;
    let lastName = uniqueArr[0];
    
    while(arr.length != names.length){
        if(i === 0){
            arr.push(names[uniqueArr[0]] + " is giving a gift to " +  names[uniqueArr[1]]);
            i++;
        }
        
        arr.push(names[uniqueArr[p1]] + " is giving a gift to " +  names[uniqueArr[p2]]);
        p1 = p2;
        p2 += 1;
    
        i++;
        if(i === names.length-1){
            arr.push(names[uniqueArr[p1]] + " is giving a gift to " +  names[lastName]);
            break;
        }
    }
    return arr;
  }

}



module.exports = GiftExchange;
