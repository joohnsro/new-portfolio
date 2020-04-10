var content = document.querySelector('.content'),
    profileContainer = document.querySelector('.profile-container'),
    profileImage = document.querySelector('.profile-image'),
    profileClose = document.getElementById('profile-close'),
    mobileVersion = false;
    header = document.querySelector('header'),
    collapseMenu = document.getElementById('minimize-menu');

profileImage.addEventListener('click', toggleProfile);
profileClose.addEventListener('click', toggleProfile);

function toggleProfile() {
    var classList = profileContainer.classList;
    classList.toggle('open');
    content.classList.toggle('extended');
}

collapseMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if ( !mobileVersion ) return;

    var classList = header.classList;
    classList.toggle('open');
}

function checkWindowWidth() {
    mobileVersion = ( window.innerWidth <= 900 ) ? true : false;
    
    if (mobileVersion) {
        header.classList.add('mobile');
    } else {
        header.classList.remove('mobile');
    }
}

window.addEventListener('resize', checkWindowWidth);

checkWindowWidth();