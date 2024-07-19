document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Form validation
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
  
    if (username === '' || email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }
  
    
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  });
  