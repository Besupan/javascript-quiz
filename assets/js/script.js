/*
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score*/
what = function() {
    const questions = {
    q1:{
        q:'Somedumbshit', 
        answer:{
             a:'thas',
             b:'thos',
             c:'thus',
             d:'this',
    },
    },
    q2:{
        q:'moreshit',
        answer:{
            a:'thas',
            b:'thos',
            c:'thus',
            d:'this',
       },
    }, 
    q3:{
        q: 'yougetitbynow',
        answer:{
            a:'thas',
            b:'thos',
            c:'thus',
            d:'this',
       },
    },
};
for (const [key, value] of Object.entries(questions.q1.answer)) {
    console.log(`${key}:${value}`);
};
};

what();

