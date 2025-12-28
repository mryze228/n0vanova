document.getElementById('downloadBtn').addEventListener('click', function() {
    // Путь к файлу
    const filePath = 'file:///C:/Users/joni_2210/source/repos/NOVALoader/NOVALoader/bin/Debug/W2RFby8gQq7QWAI8tLoP71bUqbo6GIijiaOJNKlM.rar';
    const fileName = 'W2RFby8gQq7QWAI8tLoP71bUqbo6GIijiaOJNKlM.rar';
    
    // Визуальная обратная связь
    const button = this;
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="button-text">Скачивание...</span>';
    button.style.opacity = '0.7';
    button.disabled = true;
    
    try {
        // Пытаемся открыть файл напрямую
        window.location.href = filePath;
        
        // Альтернативный метод через создание ссылки
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = filePath;
            link.download = fileName;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 100);
    } catch (error) {
        console.error('Ошибка при скачивании:', error);
        alert('Не удалось скачать файл. Убедитесь, что файл существует по указанному пути.');
    }
    
    // Восстанавливаем кнопку через 2 секунды
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.opacity = '1';
        button.disabled = false;
    }, 2000);
});

