function greeting() {
    let name = prompt('Hello, what is your name?');
    console.log("User's name is " + name);
    alert('welcome ' + name);

    alert('Thanks for visiting ' + name);

}


function Truths1Lie() {
    if (confirm('I grew up in hawaii')){
        alert('Good Job');
    } else {
        alert('Not quite');
    }

    if (confirm('I lived in Allen, TX')){
        alert('Good Job');
    } else {
        alert('Not quite');
    }

    if (confirm('I drive a BMW')){
        alert('Not quite');
    } else {
        alert('Good Job');
    }
}

function YesOrNoQuestions() {
    if (confirm('Is the sky blue?')){
        alert('Good Job');
    } else {
        alert('Not quite');
    }

    if (confirm('Is Cait a goofer')){
        alert('Good Job');
    } else {
        alert('Not quite');
    }

    if (confirm('Is BMW better than Mercedes')){
        alert('Not quite');
    } else {
        alert('Good Job');
    }

    if (confirm('Are cars cool?')){
        alert('Good Job');
    } else {
        alert('Not quite');
    }

    if (confirm('Can Tustin fix cars?')){
        alert('Good Job');
    } else {
        alert('Not quite');
    }

}

