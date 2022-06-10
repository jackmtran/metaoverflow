window.addEventListener('DOMContentLoaded', (e) => {
    const demobutt = document.getElementById('demo');
    const username = document.getElementById('username');
    const password = document.getElementById('password');


    if (demobutt) {
    demobutt.addEventListener('click', (e) => {
        console.log('clicked')
      username.value = 'Demo';
      password.value = 'Demo100!';
    })
  }
})
