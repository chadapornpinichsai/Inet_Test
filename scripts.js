document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.menudropdown');

    if (!dropdown) return;

    const toggle = dropdown.querySelector('.dropdown-haeder');
    const submenuItems = dropdown.querySelectorAll('.submenu-item');

    if (toggle) {
        toggle.addEventListener('click', function (event) {
            event.preventDefault();
            dropdown.classList.toggle('open');
        });
    }

    submenuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            submenuItems.forEach(function (subItem) {
                subItem.classList.remove('active');
            });
            item.classList.add('active');
            dropdown.classList.add('open');
        });
    });

    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (item) {
                item.classList.remove('active');
            });
            tab.classList.add('active');
        });
    });

    const pageButtons = Array.from(document.querySelectorAll('.pagination-controls .page-btn'));
    const pageNumberButtons = pageButtons.filter(function (button) {
        return /^\d+$/.test(button.textContent.trim());
    });

    if (pageNumberButtons.length) {
        function setActivePage(page) {
            const safePage = Math.min(Math.max(page, 1), 2);
            pageNumberButtons.forEach(function (button) {
                button.classList.toggle('active', button.textContent.trim() === String(safePage));
            });
        }

        pageButtons.forEach(function (button) {
            button.addEventListener('click', function (event) {
                event.preventDefault();
                const label = button.textContent.trim();

                if (label === 'Prev') {
                    const currentPage = Number(document.querySelector('.pagination-controls .page-btn.active').textContent.trim());
                    setActivePage(currentPage - 1);
                } else if (label === 'Next') {
                    const currentPage = Number(document.querySelector('.pagination-controls .page-btn.active').textContent.trim());
                    setActivePage(currentPage + 1);
                } else if (/^\d+$/.test(label)) {
                    setActivePage(Number(label));
                }
            });
        });
    }
});
