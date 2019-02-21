function solve(request){
    let methods=[ 'GET','POST','DELETE','CONNECT'];
    let chars=['"','%','$','-',' '];
    let versions=['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0']

        let method=request.method;
        let validMethod=methods.includes(method);
        if(!validMethod){
            let error= new Error();
            error.message='Invalid request header: Invalid Method'; 
            throw error;
                       
        }
        let uriCurrent=request.uri;
        let noUri=request.hasOwnProperty('uri');
        if(!noUri){
            let error= new Error();
            error.message='Invalid request header: Invalid URI'; 
            throw error;  
        }
        let correct= chars.some(x=>uriCurrent.includes(x));     
        if(correct || !Boolean(uriCurrent)){
            let error= new Error();
            error.message='Invalid request header: Invalid URI'; 
            throw error;                               
        }
        let version=request.version;
        let validVersion=versions.includes(version);
        if(!validVersion){
            let error= new Error();
            error.message='Invalid request header: Invalid Version'; 
            throw error;                       
        }
        let messageCurrent=request.message;
        let noMessage=request.hasOwnProperty('message');
        if(!noMessage){
            let error= new Error();
            error.message='Invalid request header: Invalid Message'; 
            throw error;  
        }
        let re=/^[\w\s-\/:%*\/\.()~=;_+\[\]{}?^#$!@|\-`\/,]*$/g;
        let validMessage=re.test(messageCurrent);
        if(!validMessage && messageCurrent.length!=0){
            let error= new Error();
            error.message='Invalid request header: Invalid Message'; 
            throw error;         
        }
        return request;
    
}
  let obj = {
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
};
let objsome={
    method: 'GET',
    uri:'gib ',
    version: 'HTTP/1.1',
    message: 'qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^*()-=_+[]{};:|,./? '
}
console.log(solve(objsome));
