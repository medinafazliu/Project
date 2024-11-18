
function checkSignIn() {
    
    const isSignedIn = localStorage.getItem('isSignedIn') === 'true';

    
    const translateButtonNav = document.querySelector('a[href="index.html"]');
    const chatButtonNav = document.querySelector('a[href="chat.html"]');

    if (translateButtonNav) {
        translateButtonNav.addEventListener('click', (e) => {
            if (!isSignedIn) {
                e.preventDefault(); 
                alert('You need to sign in first to access the Translate App!');
            }
        });
    }

    if (chatButtonNav) {
        chatButtonNav.addEventListener('click', (e) => {
            if (!isSignedIn) {
                e.preventDefault(); 
                alert('You need to sign in first to access the Chatbot!');
            }
        });
    }

    
    const translateButtonBottom = document.querySelector('#translate button');
    const chatButtonBottom = document.querySelector('#chatbot button');

    if (translateButtonBottom) {
        translateButtonBottom.addEventListener('click', (e) => {
            if (!isSignedIn) {
                e.preventDefault(); 
                alert('You need to sign in first to access the Translate App!');
            }
        });
    }

    if (chatButtonBottom) {
        chatButtonBottom.addEventListener('click', (e) => {
            if (!isSignedIn) {
                e.preventDefault(); 
                alert('You need to sign in first to access the Chatbot!');
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', checkSignIn);


function signIn() {
    
    localStorage.setItem('isSignedIn', 'true');
    alert('You are now signed in!');
}

