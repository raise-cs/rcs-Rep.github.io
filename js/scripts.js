function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(function() {
        element.textContent = 'コピーしました';
        setTimeout(function() {
            element.textContent = 'コピー';
        }, 2000);
    }, function(err) {
        element.textContent = 'コピーに失敗しました';
        setTimeout(function() {
            element.textContent = 'コピー';
        }, 2000);
    });
}

function loadNavigation() {
    fetch('../common/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
            // ハンバーガーメニューのトグル
            const navbarToggle = document.getElementById('navbar-toggle');
            if (navbarToggle) {
                navbarToggle.addEventListener('click', function() {
                    var menu = document.getElementById('navbar-menu');
                    if (menu.style.display === 'block') {
                        menu.style.display = 'none';
                    } else {
                        menu.style.display = 'block';
                    }
                });
            }
        })
        .catch(error => console.error('Error loading navigation:', error));
}

document.addEventListener('DOMContentLoaded', loadNavigation);