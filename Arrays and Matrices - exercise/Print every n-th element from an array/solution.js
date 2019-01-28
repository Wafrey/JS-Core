function solve(input){

    let steps=input[input.length-1];
    input.pop();
    let result='';
    
    for (let i = 0; i < input.length; i++) {
        
        if (i%steps==0) {
           
                result+=input[i]+'\n';
           
        }
    }
    
    console.log(result)
    
    }