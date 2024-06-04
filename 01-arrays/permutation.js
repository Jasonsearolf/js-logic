const a = ['h', 'l', 'a', 'o'];


function permutation(inputArr){
    let _permutation = [];
    
    const permute = (arr, permutation = []) => {
        // console.log('permutationfirst es: ' + permutation);
        if(!arr.length){
            _permutation.push(permutation);
            console.log('_permutation FIN');
            return;
        }
        
        // console.log('arrfirst es :' + arr);
        for(let i in arr){
            console.log('i es :' + i +' = '+ arr[i]);
            console.log('arrbucle es :' + arr);
            let curr = arr.slice();
            // console.log('curr ahora: ' + curr);
            let next = curr.splice(i,1);
            // console.log('curr desp: ' + curr);
            
            console.log('next es: '+ next);
            console.log(' ');
            
            permute(curr, permutation.concat(next));
        }
        
    }
    
    permute(inputArr);
    return _permutation;
}

console.log(permutation(a));