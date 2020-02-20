module.exports = function reverse (n) {
    n = Math.abs(n);
    let res = 0;
    while(n != 0){
        let dig = n % 10;
        res = res * 10 + dig;
        n = Math.trunc(n / 10);        
    }
    return res;  
}
