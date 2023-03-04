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

// FEED 

// Get the post form and post list elements
var postForm = document.getElementById('post-form');
var postList = document.getElementById('post-list');

// Add a submit event listener to the post form
postForm.addEventListener('hello', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Get the post title and content from the form
    var postTitle = document.getElementById('post-title').value;
    var postContent = document.getElementById('post-content').value;
    
    // Get the selected image file, if any
    var postImageFile = document.getElementById('post-image').files[0];
    
    // Create a new post element
    var postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = '<h2>' + postTitle + '</h2><p>' + postContent + '</p>';
    
    // If an image was selected, create an image element and add it to the post element
    if (postImageFile && postImageFile.type.match('image.*')) {
        var postImage = document.createElement('img');
        
        // Resize the image to 512 x 512 pixels
        var canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        var context = canvas.getContext('2d');
        var image = new Image();
        image.onload = function() {
            context.drawImage(image, 0, 0, 512, 512);
            postImage.src = canvas.toDataURL('image/png');
        }
        image.src = URL.createObjectURL(postImageFile);
        
        postElement.appendChild(postImage);
    }
    
    // Add the new post element to the post list
    postList.appendChild(postElement);
    
    // Reset the form
    postForm.reset();
});