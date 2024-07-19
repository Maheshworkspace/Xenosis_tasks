function getLoggedInUser() {
    
    return { username: '' }; 
  }
  
  function displayWelcomeMessage(user) {
    document.getElementById('welcomeMessage').textContent = `Welcome, ${user.username}!`;
  }
  
  function logout() {
   
    console.log('User logged out');
   
    window.location.href = 'signin.html';
  }
  
 
  document.addEventListener('DOMContentLoaded', function() {
    let user = getLoggedInUser();
    if (user) {
      displayWelcomeMessage(user);
    } else {
      
      window.location.href = 'signin.html';
    }
  });