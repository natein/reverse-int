module.exports = function reverse (n) {
    let num = Math.abs(n);
    let res = 0;
    while(num !== 0){
        let dig = num % 10;
        res = res * 10 + dig;
        num = (num - dig) / 10;        
    }
    return res;  
}
