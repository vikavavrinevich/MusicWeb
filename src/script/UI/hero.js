// Знаходимо елемент з класом 'hero__img' і зберігаємо його в змінну 'DiscPos'
let DiscPos = document.querySelector('.hero__img')

// Додаємо обробник події "scroll" до об'єкта window (при скролінгу сторінки)
window.addEventListener("scroll", ()=>{

    // Перевіряємо, чи відстань скролінгу по вертикалі більша за 50 пікселів
    if(window.scrollY > 50){
        // Якщо так, обертаємо елемент 'DiscPos' на 360 градусів за годинниковою стрілкою
        DiscPos.style.transform = `rotate(360deg)`
        
    } else{
        // Якщо ні, обертаємо елемент 'DiscPos' на -360 градусів проти годинникової стрілки
        DiscPos.style.transform = `rotate(-360deg)`
    }
})

// Знаходимо елемент з id 'heroImg' і зберігаємо його в змінну 'heroImg'
const heroImg = document.getElementById('heroImg');

// Оголошуємо змінні для відстеження стану перетягування
let isDragging = false;
let startX, startAngle;

// Додаємо обробник події "mousedown" до 'heroImg' (при натисканні кнопки миші)
heroImg.addEventListener('mousedown', (e) => {
    isDragging = true;  // Починаємо перетягування
    startX = e.clientX;  // Записуємо початкову позицію миші по горизонталі
    // Отримуємо поточну трансформацію елемента 'heroImg'
    const transform = window.getComputedStyle(heroImg).transform;
    // Визначаємо початковий кут обертання
    startAngle = transform === 'none' ? 0 : getRotationAngle(transform);
    heroImg.style.cursor = 'grabbing';  // Змінюємо курсор на 'grabbing'
});

// Додаємо обробник події "mousemove" до об'єкта window (при русі миші)
window.addEventListener('mousemove', (e) => {
    if (isDragging) {  // Перевіряємо, чи відбувається перетягування
        const currentX = e.clientX;  // Отримуємо поточну позицію миші по горизонталі
        const deltaX = currentX - startX;  // Обчислюємо зміну позиції миші
        const newAngle = startAngle + deltaX;  // Обчислюємо новий кут обертання
        heroImg.style.transform = `rotate(${newAngle}deg)`;  // Обертаємо елемент
    }
});

// Додаємо обробник події "mouseup" до об'єкта window (при відпусканні кнопки миші)
window.addEventListener('mouseup', () => {
    if (isDragging) {  // Перевіряємо, чи відбувалося перетягування
        isDragging = false;  // Завершуємо перетягування
        heroImg.style.cursor = 'grab';  // Змінюємо курсор на 'grab'
    }
});

// Функція для отримання кута обертання з матриці трансформації
function getRotationAngle(transform) {
    const values = transform.split('(')[1].split(')')[0].split(',');  // Розбиваємо рядок на компоненти
    const a = parseFloat(values[0]);  // Отримуємо значення a
    const b = parseFloat(values[1]);  // Отримуємо значення b
    return Math.round(Math.atan2(b, a) * (180 / Math.PI));  // Обчислюємо і повертаємо кут обертання в градусах
}

// Додаємо обробник події "mouseleave" до 'heroImg' (при виході миші за межі елемента)
heroImg.addEventListener('mouseleave', () => {
    if (isDragging) {  // Перевіряємо, чи відбувалося перетягування
        isDragging = false;  // Завершуємо перетягування
        heroImg.style.cursor = 'grab';  // Змінюємо курсор на 'grab'
    }
});
