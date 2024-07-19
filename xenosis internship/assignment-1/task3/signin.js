document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Form validation
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
  
    if (email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }
  
   
    console.log('Email:', email);
    console.log('Password:', password);
  
   
    window.location.href = 'dashboard.html';
  });