import {dataMusic} from "./dataMusic.js"; // Імпортуємо дані музичних треків
import {loadTrack} from "../UI/player.js"; // Імпортуємо функцію завантаження треку
import {playTrack} from '../UI/player.js'; // Імпортуємо функцію для запуску треку

const searchInput = document.getElementById('search-input'); // Знаходимо елемент вводу для пошуку
const resultsContainer = document.getElementById('resultsContainer'); // Знаходимо контейнер для результатів пошуку

// Додаємо обробник події для вводу в поле пошуку
searchInput.addEventListener('input', function() {
    const searchText = this.value.toLowerCase(); // Отримуємо текст пошуку і перетворюємо його на нижній регістр

    // Фільтруємо дані музичних треків на основі введеного тексту
    const filteredData = dataMusic.filter(function(item) {
        if (searchText !== "") {
            // Повертаємо елементи, якщо назва треку або виконавець включає введений текст
            return item.title.toLowerCase().includes(searchText) || item.artist.toLowerCase().includes(searchText);
        }
    });
    
    displayResults(filteredData); // Викликаємо функцію для відображення результатів пошуку
});

// Функція для відображення результатів пошуку
function displayResults(results) {
    console.log(resultsContainer); // Лог результатів для відладки
    resultsContainer.innerHTML = ''; // Очищуємо контейнер результатів

    // Проходимося по всім знайденим результатам
    results.forEach(function(item) {
        const resultElement = document.createElement('div'); // Створюємо новий div для кожного результату
        resultElement.classList.add('result'); // Додаємо клас для стилізації
        resultElement.innerHTML = `<h3>${item.title}</h3><p>${item.artist}</p>`; // Встановлюємо HTML з назвою та виконавцем треку

        // Додаємо обробник події для кліку на результат
        resultElement.addEventListener("click", () => {
            loadTrack(item.id - 1); // Завантажуємо обраний трек
            playTrack() //Запускаємо обраний трек
            resultsContainer.innerHTML = ''; // Очищуємо контейнер результатів після вибору треку
        });

        resultsContainer.appendChild(resultElement); // Додаємо елемент результату в контейнер
    });
}

// Додаємо обробник події для кліку на контейнер результатів
resultsContainer.addEventListener("click", () => {
    searchInput.value = ""; // Очищуємо поле пошуку при кліку на контейнер результатів
});

// Додаємо обробник події для кліку
window.addEventListener("click", ()=>{
    resultsContainer.innerHTML = ''; // Очищуємо контейнер результатів після вибору треку
})