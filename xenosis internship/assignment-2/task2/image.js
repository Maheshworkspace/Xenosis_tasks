document.addEventListener('DOMContentLoaded', function() {
    const endpoint = 'https://picsum.photos/400/300'; 

    const randomImageElement = document.getElementById('random-image');
    const generateButton = document.getElementById('generate-btn');

    generateButton.addEventListener('click', function() {
        fetch(endpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.url;
            })
            .then(imageUrl => {
                randomImageElement.src = imageUrl;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                alert('Failed to fetch random image. Please try again later.');
            });
    });
});
