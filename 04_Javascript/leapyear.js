var year=2002
var month= "february";

if((year %400 ===0)|(year % 4 ===0 && year%100 !==0)){
    if(month.toLocaleLowerCase() == "february"){
        console.log("The year is leap year and the month is February with 29 days.")
    }else{
        console.log("The year is leap year and the month is not February")
    }
}else{
    console.log("not a leap year")
}
