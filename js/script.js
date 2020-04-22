$('.search-input').mask('9 (999) 999-99-99').css({'color':'#817E82'});

const language = document.querySelector("#about-language");
const teembilding = document.querySelector('#about-teembilding');
const business = document.querySelector("#about-business");
const conversation = document.querySelector("#about-conversation");
const crisis = document.querySelector("#about-crisis");
const identity = document.querySelector("#about-identity");

language.onclick = function() {
    display_none();
    document.querySelector('.about-language').classList.remove("display-none");
};

teembilding.onclick = function() {
    display_none();
    document.querySelector('.about-teembilding').classList.remove("display-none");
};

business.onclick = function() {
    display_none();
    document.querySelector('.about-business').classList.remove("display-none");
};

conversation.onclick = function() {
    display_none();
    document.querySelector('.about-conversation').classList.remove("display-none");
}
crisis.onclick = function() {
    display_none();
    document.querySelector('.about-crisis').classList.remove("display-none");
}
identity.onclick = function() {
    display_none();
    document.querySelector('.about-identity').classList.remove("display-none");
}

function display_none(event) {
    document.querySelector('.about-language').classList.add('display-none');
    document.querySelector('.about-teembilding').classList.add('display-none');
    document.querySelector('.about-business').classList.add('display-none');
    document.querySelector('.about-conversation').classList.add('display-none');
    document.querySelector('.about-crisis').classList.add('display-none');
    document.querySelector('.about-identity').classList.add('display-none');
    }

let feedback = [document.querySelector('.feedback1'), document.querySelector('.feedback2'), document.querySelector('.feedback3'), document.querySelector('.feedback4'), document.querySelector('.feedback5')];

const left = document.querySelector('#left');
const right = document.querySelector('#right');

left.onclick = function() {
    for (var i=0; i < feedback.length; i++) { 
        if ( i == feedback.length-3 ) {
            if (feedback[i].classList.contains('feedback-mini-left')) {
                feedback[i].classList.add('feedback-outline');
                feedback[i].classList.remove('feedback-mini-left');
                feedback[i+1].classList.add('feedback-mini-left');
                feedback[i+2].classList.remove('feedback-mini-right');
                feedback[i+2].classList.remove('feedback-outline');
                feedback[0].classList.remove('feedback-outline');
                feedback[0].classList.add('feedback-mini-right');
              break;
        }
    }
        if ( i == feedback.length-2 ) {
            if (feedback[i].classList.contains('feedback-mini-left')) {
                feedback[i].classList.add('feedback-outline');
                feedback[i].classList.remove('feedback-mini-left');
                feedback[i+1].classList.add('feedback-mini-left');
                feedback[0].classList.remove('feedback-mini-right');
                feedback[0].classList.remove('feedback-outline');
                feedback[1].classList.remove('feedback-outline');
                feedback[1].classList.add('feedback-mini-right');
                break;
        }
    }
    if ( i == feedback.length-1 ) {
        if (feedback[i].classList.contains('feedback-mini-left')) {
            feedback[i].classList.add('feedback-outline');
            feedback[i].classList.remove('feedback-mini-left');
            feedback[0].classList.add('feedback-mini-left');
            feedback[1].classList.remove('feedback-mini-right');
            feedback[1].classList.remove('feedback-outline');
            feedback[2].classList.remove('feedback-outline');
            feedback[2].classList.add('feedback-mini-right');
            break;
    }
}
        if (feedback[i].classList.contains('feedback-mini-left')) {
            feedback[i].classList.add('feedback-outline');
            feedback[i].classList.remove('feedback-mini-left');
            feedback[i+1].classList.add('feedback-mini-left');
            feedback[i+2].classList.remove('feedback-mini-right');
            feedback[i+3].classList.remove('feedback-outline');
            feedback[i+3].classList.add('feedback-mini-right');
            break;
    }  
    }
}

right.onclick = function() {
    for (var i=0; i < feedback.length; i++) { 
        if ( i == 2 ) {
            if (feedback[i].classList.contains('feedback-mini-right')) {
                feedback[i].classList.remove('feedback-mini-right');
                feedback[i].classList.add('feedback-outline');
                feedback[i-1].classList.add('feedback-mini-right');
                feedback[i-2].classList.remove('feedback-mini-left');
                feedback[feedback.length-1].classList.remove('feedback-outline');
                feedback[feedback.length-1].classList.add('feedback-mini-left');
                break;
        }  
    }
        if ( i == 1 ) {
            if (feedback[i].classList.contains('feedback-mini-right')) {
                feedback[i].classList.remove('feedback-mini-right');
                feedback[i].classList.add('feedback-outline');
                feedback[i-1].classList.add('feedback-mini-right');
                feedback[feedback.length-1].classList.remove('feedback-mini-left');
                feedback[feedback.length-2].classList.remove('feedback-outline');
                feedback[feedback.length-2].classList.add('feedback-mini-left');
                break;
        }  
    }
    if ( i == 0) {
        if (feedback[i].classList.contains('feedback-mini-right')) {
            feedback[i].classList.remove('feedback-mini-right');
            feedback[i].classList.add('feedback-outline');
            feedback[feedback.length-1].classList.add('feedback-mini-right');
            feedback[feedback.length-2].classList.remove('feedback-mini-left');
            feedback[feedback.length-3].classList.remove('feedback-outline');
            feedback[feedback.length-3].classList.add('feedback-mini-left');
            break;
    } 
} 
        if (feedback[i].classList.contains('feedback-mini-right')) {
            feedback[i].classList.remove('feedback-mini-right');
            feedback[i].classList.add('feedback-outline');
            feedback[i-1].classList.add('feedback-mini-right');
            feedback[i-2].classList.remove('feedback-mini-left');
            feedback[i-3].classList.remove('feedback-outline');
            feedback[i-3].classList.add('feedback-mini-left');
            break;
    }  
}
}
