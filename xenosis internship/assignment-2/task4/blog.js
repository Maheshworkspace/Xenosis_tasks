
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            fetchPage(href);
        });
    });

    function fetchPage(href) {
        fetch(href)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const newDoc = parser.parseFromString(html, 'text/html');
                document.documentElement.innerHTML = newDoc.documentElement.innerHTML;
                history.pushState({}, '', href);
            })
            .catch(error => console.error('Error fetching page: ', error));
    }
});
