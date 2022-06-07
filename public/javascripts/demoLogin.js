window.addEventListener('DOMContentLoaded', (e) => {
    const demoButton = document.getElementById('demo')
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    if (demoButton) {
    demoButton.addEventListener('click', (e) => {
        console.log('clicked')
      username.value = 'Demo';
      password.value = 'Demo100!';
    })
  }
  })
