function IfElse(props){
    let message = "";

    if (props.num % 16 === 0) {
       message=`${props.num} is divisible by 16`
    } else {
        message = `${props.num} is not divisible by 16`;
    }

    return <div>{message}</div>;
}


export default IfElse