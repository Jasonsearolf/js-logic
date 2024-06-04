

const newArray = (arr) => {

    let newArr = []
    
    newArr.push(arr[0], arr[arr.length-1]);
    
    return newArr;

}


console.log(newArray([100,200,300,400]));