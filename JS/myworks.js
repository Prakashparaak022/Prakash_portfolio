// DOM Elements
var firstVideo = document.getElementById('firstVideo');
var secondVideo = document.getElementById('secondVideo');
var hoverButton = document.getElementById('hoverButton');
var box = document.getElementById('carouselBox');
var slides = document.getElementsByClassName('slick-slide'); 

// Store the original start time of the video
var originalStartTime = firstVideo.currentTime;

// Reset the video to its original start time
function resetVideo() {
    firstVideo.currentTime = originalStartTime;
}

// Helper function to set the hover button style
function setHoverButtonStyle(style) {
    hoverButton.setAttribute('style', style);
}

// Helper function to reset the hover button style and text
function resetHoverButton() {
    hoverButton.textContent = 'Hover Me';
    hoverButton.removeAttribute('style');
}

// Helper function to set the hover button text
function setHoverButtonText(text) {
    hoverButton.textContent = text;
}

// Helper function to set the hover button icon
function setHoverButtonIcon(iconClass1, iconClass2) {
    var iconElement = document.createElement('i');
    iconElement.classList.add('fas', iconClass1, iconClass2);
    hoverButton.insertBefore(iconElement, hoverButton.firstChild);
}

// Helper function to remove the hover button icon
function removeHoverButtonIcon(iconClass1, iconClass2) {
    var iconElement = hoverButton.querySelector('i');
    if (iconElement) {
        iconElement.classList.remove(iconClass1, iconClass2);
        iconElement.parentNode.removeChild(iconElement);
    }
}

// Show the carousel with videos
function showCarouselWithVideos() {
    for (let slide of slides) {
        slide.style.display = 'block'; 
    }
    box.style.display = 'block'; 
    console.log('Carousel is now visible');
}

// Event Listeners
firstVideo.addEventListener('mouseenter', function () {
    firstVideo.play();
    console.log('First video is playing');
    firstVideo.addEventListener('ended', function () {
        this.play();
    });
    setHoverButtonText('Click Me');
    setHoverButtonIcon('fa-solid', 'fa-bolt');
    setHoverButtonStyle('background: radial-gradient(at left bottom, #ffd900 800px, #fffc48); border-style: none; box-shadow: 1px 1px 16px #fffc48;');
});

firstVideo.addEventListener('mouseleave', function () {
    firstVideo.pause();
    console.log('First video is paused');
    resetHoverButton();
    resetVideo();
});

hoverButton.addEventListener('mouseenter', function () {
    firstVideo.play();
    console.log('Hover button hovered, first video is playing');
    setHoverButtonText('Click Me');
    setHoverButtonIcon('fa-solid', 'fa-bolt');
    setHoverButtonStyle('background: radial-gradient(at left bottom, #ffd900 800px, #fffc48); border-style: none; box-shadow: 1px 1px 16px #fffc48;');
});

hoverButton.addEventListener('mouseleave', function () {
    firstVideo.pause();
    console.log('Hover button left, first video paused');
    resetHoverButton();
    removeHoverButtonIcon('fa-solid', 'fa-bolt');
});

hoverButton.addEventListener('click', function () {
    firstVideo.style.display = 'none';
    hoverButton.style.display = 'none'; 
    console.log('Hover button clicked, moving to the second video');
    secondVideo.style.display = 'block';
    secondVideo.play();
});

// Show the carousel with videos when the second video ends
secondVideo.addEventListener('ended', function () {
    secondVideo.style.display = 'none';
    firstVideo.style.display = 'none';
    hoverButton.style.display = 'none'; 
    console.log('Second video ended, showing carousel');
    showCarouselWithVideos(); 

    var nextButton = document.querySelector('.slick-next');
    if (nextButton) {
        console.log('Clicking the next button of the carousel');
        nextButton.click();
    } else {
        console.log('Next button not found');
    }
});
