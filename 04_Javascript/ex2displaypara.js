//2. Pass a parameter, and display the factors of that parameter in the function



function factor(a){
   for(let i=1;i<a;i++){
    if(a%i===0) console.log(i)
   }
}
let a=10
factor(a)
