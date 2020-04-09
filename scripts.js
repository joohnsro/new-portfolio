var content = document.querySelector('.content'),
    profileContainer = document.querySelector('.profile-container'),
    profileImage = document.querySelector('.profile-image'),
    profileClose = document.getElementById('profile-close');

profileImage.addEventListener('click', toggleProfile);
profileClose.addEventListener('click', toggleProfile);

function toggleProfile (){
    var classList = profileContainer.classList;
    classList.toggle('open');
    content.classList.toggle('extended');
}