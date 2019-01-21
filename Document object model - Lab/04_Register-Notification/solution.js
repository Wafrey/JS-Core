function register() {

  let username = document.getElementById('username').value;
  let emailAdress = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  let pattern = /(.+)@(.+).(com|bg)/gm;

  if (username && pattern.test(emailAdress) && password) {

    var result = document.getElementById('result');

    result.innerHTML = `<h1>Successful Registration!</h1>Username: ${username}<br>Email: ${emailAdress}<br>Password: ${'*'.repeat(password.length)}`;

  }

  setTimeout(clear, 5000)

  function clear() {

    document.getElementById('result').innerHTML = '';
  }
}