let pesho=[
    [1,2,3], 
    [4,5,6], 
    [7,8,9]
];


for (let row = 0; row < pesho.length; row++) {
    
    for (let col = 0; col < pesho[row].length; col++) {
        
        console.log(pesho[row][col]);
    }
    console.log('new row');
}