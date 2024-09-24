function toggleCalendar() {
    var calendar = document.getElementById('calendardiv');
    calendar.style.display = (calendar.style.display === 'none') ? 'block' : 'none';
}

function feedback() {
    var feedback = document.getElementById('feedbacks');
    feedback.style.display = (feedback.style.display === 'none') ? 'block' : 'none';
}

function map() {
    var map= document.getElementById('map')
    map.style.display = (map.style.display === 'none') ? 'block' : 'none';
}

function toggleTranslator() {
    var translator = document.getElementById('google_translate_element');
    if (translator.style.display === 'none') {
        translator.style.display = 'block';
    } else {
        translator.style.display = 'none';
    }
}