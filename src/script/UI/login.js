

 document.addEventListener('DOMContentLoaded', function(){

    // Отримуємо необхідні елементи DOM
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    const loginLink = document.querySelector('.sign-in ');
    const registerLink = document.querySelector('.create-account');
    
    // Приховуємо форму реєстрації при завантаженні сторінки
    registerForm.style.display = 'none';
  
    // Обробник події для кліку на посилання "Sign In" (перехід до форми входу)
    loginLink.addEventListener('click', function(event){
      event.preventDefault();
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
    });
  
    // Обробник події для кліку на посилання "Create an account" (перехід до форми реєстрації)
    registerLink.addEventListener('click', function(event){
      event.preventDefault();
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    });
  
  });
  