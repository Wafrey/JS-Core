function solve() {

 let users=[];

 
 let userInfo=document.querySelectorAll('form div[class=user-info] input');
 const buttons=document.getElementsByTagName("button");
 buttons[0].addEventListener('click',SubmitUser);
buttons[1].addEventListener('click',(e)=>SearchTable(e));


 function SubmitUser(e){
    e.preventDefault();
    let topics = []
    let username=userInfo[0].value;
    let password=userInfo[1].value;
    let email=userInfo[2].value;
    let checkBoxes = document.querySelectorAll('form div[class=topics] input[type=checkbox]:checked');

    for (var i = 0; i < checkBoxes.length; i++) {
    topics.push(checkBoxes[i].value)
    }
    let user={
        "Username":username,
        "Password":password,
        "Email":email,
        "Topics":topics
    }
    users.push(user);
    InsertUSerInTable(user);
    userInfo[0].value='';
    userInfo[1].value='';
    userInfo[2].value='';
 }
    function InsertUSerInTable(user){
        let table=document.getElementsByTagName("table")[0];
        let newRow = table.insertRow(-1);
       
        let nameCell = newRow.insertCell(0);
        let usernameText = document.createTextNode(`${user.Username}`);
        nameCell.appendChild(usernameText);
        
        let emailCell = newRow.insertCell(1);
        let emailText = document.createTextNode(`${user.Email}`);
        emailCell.appendChild(emailText);

        let topicsCell = newRow.insertCell(2);
        let topicsText = document.createTextNode(`${user.Topics.join(' ')}`);
        topicsCell.appendChild(topicsText);
    }
    function SearchTable(e){
        e.preventDefault();
        input = document.querySelectorAll("input")[7];
        filter = input.value.toUpperCase();
        table = document.getElementsByTagName("table")[0];
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (let i = 0; i < tr.length; i++) {
          tdArr = tr[i].getElementsByTagName("td");
          for(let k=0;k<tdArr.length;k++){
              let td=tdArr[k];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.visibility = "visible";
            } else {
              tr[i].style.visibility = "hidden";
            }
        }
          } 
        }
    }
}