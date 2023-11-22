var questions = [
    {prompt: "What is 10 divided by 2?\n(a)3\n\
    (b)5\n(c)4",
    answer: "b"
    },
    {prompt: "What is 3 multiplied by 6?\n(a)24\n\
    (b)18\n(c)16",
    answer: "b"
    }
]
var score = 0;

for (let i = 0; i < questions.length; i++) {
    let response = window.prompt(questions[i].prompt);
    score++;
    if (response == questions[i].answer) {
        alert("Correct!");
    }else {
        alert("Wrong!");
    }
}
alert("You scored" + score + "/" + questions.length + "in your mathematics assignment")