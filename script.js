document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('actionBtn');
    
    // Добавляем простую анимацию на клик
    btn.addEventListener('click', () => {
        btn.textContent = 'Успешно!';
        btn.style.background = 'rgba(255, 255, 255, 0.8)';
        btn.style.color = '#333';
        
        // Возвращаем как было через 2 секунды
        setTimeout(() => {
            btn.textContent = 'Нажми на меня';
            btn.style.background = 'rgba(255, 255, 255, 0.2)';
            btn.style.color = 'white';
        }, 2000);
    });
});
