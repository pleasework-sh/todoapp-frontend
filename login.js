    // Add an event listener to the form
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Perform your validation or other logic here
        
        // Redirect to a different page after form submission
        window.location.href = 'todo.html';
      });