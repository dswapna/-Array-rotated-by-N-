var rotate = function (arr, n) {
        var len = arr.length; //calculate the length of an array
        return arr.slice(len - n).concat(arr.slice(0, len - n));
    };
  
  console.log(rotate( [1, 2, 3, 4, 5, 6] , 3) );
