var once = function(fn) {
    let hasBeenCalled = false;
    
    return function(...args){
        if (!hasBeenCalled){
            hasBeenCalled = true;
            return fn (...args);;
        }
        
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1,2,3))
console.log(onceFn(2,3,6))