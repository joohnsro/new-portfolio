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
header.addEventListener('click', toggleMenuFromHeader);

function toggleMenu(event) {
    event.preventDefault();
    if ( !mobileVersion ) return;

    var classList = header.classList;

    classList.toggle('open');
}

function toggleMenuFromHeader(event) {
    event.preventDefault();
    if ( !mobileVersion ) return;

    var target = event.target,
        classList = header.classList;

    if ( target.classList.contains('mobile', 'open') ){
        classList.remove('open');
    }
}

function checkWindowWidth() {
    mobileVersion = ( window.innerWidth <= 900 ) ? true : false;
    
    if (mobileVersion) {
        header.classList.add('mobile');
    } else {
        header.classList.remove('mobile');
        header.classList.remove('open');
    }
}

window.addEventListener('resize', checkWindowWidth);

checkWindowWidth();

function createSrcViewer(){
    var srcViewer = document.createElement('div');
    srcViewer.setAttribute('id', 'src-viewer');

    var closeViewer = document.createElement('a');
    closeViewer.setAttribute('id', 'close-viewer');

    srcViewer.appendChild(closeViewer);

    var item = {};

    return {
        element: srcViewer,

        show: function() {

            var body = document.querySelector('body');
            body.appendChild(srcViewer);

            body.style.overflowY = 'hidden';
        },

        buttonClose: closeViewer,

        close: function() {
            srcViewer.remove();

            var body = document.querySelector('body');
            body.style.overflowY = 'auto';
        },
        
        addItem: function( item ) {
            item = {
                src: item.getAttribute('src'),
                tag: item.tagName,
                caption: ( item.getAttribute('data-caption') ) ? item.getAttribute('data-caption') : false
            };

            var element = document.createElement(item.tag);
            element.setAttribute('src', item.src);

            srcViewer.appendChild(element);

            if ( item.caption ) {
                var elementCaption = document.createElement('caption');
                elementCaption.innerText = item.caption;
                srcViewer.appendChild(elementCaption);
            }
        }
    };
}
function checkNeedView(){
    var srcToView = document.querySelectorAll('.view');
    if ( srcToView.length > 0 ) {
        srcToView.forEach( function( item, key ){
            item.setAttribute('data-view', key);
            item.addEventListener('click', function(){
    
                var srcViewer = createSrcViewer();
                srcViewer.addItem( item );
                srcViewer.show();
                
                srcViewer.buttonClose.addEventListener('click', srcViewer.close);
            })
        } );
    }
}
checkNeedView();

function createPopup() {

    return {
        show: function ( id ) {
            var popElement = document.querySelector( id );

            if ( popElement ) {
                var body = document.querySelector('body');
                var close = document.querySelector(id + ' .popup-close');
                
                body.style.overflowY = 'hidden';
                popElement.style.visibility = 'visible';

                close.addEventListener('click', function() {
                    body.style.overflowY = 'auto';
                    popElement.style.visibility = 'hidden';
                });
            }
        }
    }
}

//createPopup().show('#popup');