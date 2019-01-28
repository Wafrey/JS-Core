function solve(input){

    let delimer=input[input.length-1];
    input.pop();
    
    let result='';
    for (let i = 0; i < input.length; i++) {
        if(i==0){
            result+=input[i];
        }
        else{
            result+=delimer+input[i];
        }
        
    }
    
    console.log(result);
    
    }