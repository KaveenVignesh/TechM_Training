
const a2=54
function isPrime(a2) {
    if (a2 < 2) return false;
    for (let i = 2; i <= Math.sqrt(a2); i++) {
        if (a2 % i === 0) 
            return false;
    }
    return true;
        }
if (isPrime(a2)) {
    console.log(a2+ " is a prime number.")
    } else {
    console.log(a2+ " is not a prime number.")
    }
