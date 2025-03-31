// 3. Pass a number, and find if the sum of their digits is an even or odd number

function sumofdigits(num){
    n=0
    while(num>0){
        n+=num%10
        num=Math.floor(num/10)
        
    }
    console.log(n)
    if(n%2===0) console.log("positive")
        else console.log("odd")
}
sumofdigits(222)