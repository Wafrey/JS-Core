function solve(arr) {
    var total = arr*arr;
    var result= [];
 
    for(var i=0;i<arr;i++) {
        var rs = [];
        for(var j=0;j<arr;j++) {
            rs.push(0);
        }
        result.push(rs);
    }
 
    var x=0;
    var y=0;
    var step = 0;
    for(var i=0;i<total;){
        while(y+step<arr){
            i++;
            result[x][y]=i;
            y++;
 
        }
        y--;
        x++;
 
        while(x+step<arr){
            i++;
            result[x][y]=i;
            x++;
        }
        x--;
        y--;
 
        while(y>=step){
            i++;
            result[x][y]=i;
            y--;
        }
        y++;
        x--;
        step++;
 
        while(x>=step){
            i++;
            result[x][y]=i;
            x--;
        }
        x++;
        y++;
    }
    for (let row of result){

        console.log(row.join(' '));
        
        }
}