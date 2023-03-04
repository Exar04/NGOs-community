window.onload = function() {
    // set the home page as active on first load
    document.getElementById('home').classList.add('active');

    // remove the active class from all other pages
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id !== 'home') {
            pages[i].classList.remove('active');
        }
    }
}

function openPage(pageId) {
    var activePage = document.querySelector('.page.active');
    if (activePage) {
        activePage.classList.remove('active');
    }
    document.getElementById(pageId).classList.add('active');
    document.body.classList.add('page-open');
}