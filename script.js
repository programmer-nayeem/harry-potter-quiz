const questions = [
    {
        question : " Who is Harry Potter's godfather?",
        answers : [
            {text:"Remus Lupin" , correct : false},
            {text:"Sirius Black" , correct : true},
            {text:"Albus Dumbledore" , correct : false},
            {text:"Severus Snape" , correct : false},
        ]
    },
    {
        question : " Which Hogwarts House does Harry Potter belong to?",
        answers : [
            {text:"Gryffindor" , correct : true},
            {text:"Hufflepuff" , correct : false},
            {text:"Ravenclaw" , correct : false},
            {text:"Slytherin" , correct : false},
        ]
    },
    {
        question : " Who is Harry Potter's best friend?",
        answers : [
            {text:"Ron Weasley" , correct : true},
            {text:"Sirius Black" , correct : false},
            {text:"Neville Longbottom" , correct : false},
            {text:"Ginny Weasley" , correct : false},
        ]
    },
    {
        question : " What is the name of the school Harry Potter attends?",
        answers : [
            {text:"Hogwarts School of Witchcraft and Wizardry" , correct : true},
            {text:"Ilvermorny School of Witchcraft and Wizardry" , correct : false},
            {text:"Durmstrang Institute" , correct : false},
            {text:"Beauxbatons Academy of Magic" , correct : false},
        ]
    },
    {
        question : " What was the estimated budget for the first Harry Potter movie, \"Harry Potter and the Philosopher's Stone\"?",
        answers : [
            {text:"$100 million" , correct : false},
            {text:"$125 million" , correct : true},
            {text:"$150 million" , correct : false},
            {text:"$175 million" , correct : false},
        ]
    },
    {
        question : " Who is the main antagonist in the Harry Potter series?",
        answers : [
            {text:"Lord Voldemort" , correct : true},
            {text:"Draco Malfoy" , correct : false},
            {text:"Lucius Malfoy" , correct : false},
            {text:"Bellatrix Lestrange" , correct : false},
        ]
    },
    {
        question : " Which Harry Potter movie had the highest production budget?",
        answers : [
            {text:"Harry Potter and the Deathly Hallows – Part 1" , correct : false},
            {text:"Harry Potter and the Deathly Hallows – Part 2" , correct : true},
            {text:"Harry Potter and the Half-Blood Prince" , correct : false},
            {text:"Harry Potter and the Order of Phoenix" , correct : false},
        ]
    },
    {
        question : " Who is the headmaster of Hogwarts School of Witchcraft and Wizardry?",
        answers : [
            {text:"Remus Lupin" , correct : false},
            {text:"Minerva McGonagall" , correct : false},
            {text:"Albus Dumbledore" , correct : true},
            {text:"Dolores Umbridge" , correct : false},
        ]
    },
    {
        question : " Who is Harry Potter's arch-nemesis in school?",
        answers : [
            {text:"Neville Longbottom" , correct : false},
            {text:"Draco Malfoy" , correct : true},
            {text:"Ron Weasley" , correct : false},
            {text:"Hermione Granger" , correct : false},
        ]
    },
    {
        question : " What was the production budget for \"Harry Potter and the Goblet of Fire\"?",
        answers : [
            {text:"$100 million" , correct : false},
            {text:"$125 million" , correct : false},
            {text:" $150 million" , correct : true},
            {text:"$175 million" , correct : false},
        ]
    },
    {
        question : " Who is the Defense Against the Dark Arts teacher in Harry Potter and the Philosopher's Stone?",
        answers : [
            {text:"Gilderoy Lockhart" , correct : true},
            {text:"Remus Lupin" , correct : false},
            {text:"Alastor Moody" , correct : false},
            {text:"Dolores Umbridge" , correct : false},
        ]
    },
    {
        question : " Who is the half-giant groundskeeper at Hogwarts School of Witchcraft and Wizardry?",
        answers : [
            {text:"Rubeus Hagrid" , correct : true},
            {text:"Argus Filch" , correct : false},
            {text:"Horace Slughorn" , correct : false},
            {text:"Pomona Sprout" , correct : false},
        ]
    },
    {
        question : " What is the name of the magical object that allows the user to travel through time?",
        answers : [
            {text:"Time-Turner" , correct : true},
            {text:"Time-Twister" , correct : false},
            {text:"Time-Turn" , correct : false},
            {text:"Time-Looper" , correct : false},
        ]
    },
    {
        question : " Who is the author of the Harry Potter series?",
        answers : [
            {text:"J.K. Rowling" , correct : true},
            {text:"Stephenie Meyer" , correct : false},
            {text:"Suzanne Collins" , correct : false},
            {text:"Veronica Roth" , correct : false},
        ]
    },
    {
        question : " What is the name of the sport played on broomsticks in the Harry Potter series?",
        answers : [
            {text:"Broomstick Ball" , correct : false},
            {text:"Nimbus Racing" , correct : false},
            {text:" Flying Soccer" , correct : false},
            {text:"Quidditch" , correct : true},
        ]
    },
    {
        question : " What is the name of Harry Potter's owl?",
        answers : [
            {text:"Scabbers" , correct : false},
            {text:"Nagini" , correct : false},
            {text:"Hedwig" , correct : true},
            {text:"Crookshanks" , correct : false},
        ]
    },
    {
        question : " What is the name of the first book in the Harry Potter series?",
        answers : [
            {text:"Harry Potter and the Prisoner of Azkaban" , correct : false},
            {text:"Harry Potter and the Goblet of Fire" , correct : false},
            {text:"Harry Potter and the Philosopher's Stone" , correct : true},
            {text:"Harry Potter and the Chamber of Secrets" , correct : false},
        ]
    },
    {
        question : " What is the name of the Hogwarts School of Witchcraft and Wizardry's gamekeeper?",
        answers : [
            {text:"Remus Lupin" , correct : false},
            {text:"Rubeus Hagrid" , correct : true},
            {text:"Albus Dumbledore" , correct : false},
            {text:"Severus Snape" , correct : false},
        ]
    },
    {
        question : " Which Harry Potter movie had the lowest production budget?",
        answers : [
            {text:"Harry Potter and the Prisoner of Azkaban" , correct : true},
            {text:"Harry Potter and the Goblet of Fire" , correct : false},
            {text:"Harry Potter and the Chamber of Secrets" , correct : false},
            {text:"Harry Potter and the Half-Blood Prince" , correct : false},
        ]
    },
    {
        question : " What is the name of the potion that makes the drinker lucky for a short period of time?",
        answers : [
            {text:"Amortentia" , correct : false},
            {text:"Polyjuice Potion" , correct : false},
            {text:"Felix Felicis" , correct : true},
            {text:"Veritaserum" , correct : false},
        ]
    },
    {
        question : " Which Hogwarts house is known for valuing bravery, daring, and chivalry?",
        answers : [
            {text:"Hufflepuff" , correct : false},
            {text:"Ravenclaw" , correct : false},
            {text:"Slytherin" , correct : false},
            {text:"Gryffindor" , correct : true},
        ]
    },
    {
        question : " What is the name of the giant snake that lives in the Chamber of Secrets?",
        answers : [
            {text:"Nagini" , correct : false},
            {text:"Aragog" , correct : false},
            {text:"Fluffy" , correct : false},
            {text:"Basilisk" , correct : true},
        ]
    },
    {
        question : " What is the name of the group of students that Harry forms to learn and practice defensive magic?",
        answers : [
            {text:"Dumbledore's Army" , correct : true},
            {text:"Order of the Phoenix" , correct : false},
            {text:"Death Eaters" , correct : false},
            {text:"The Inquisitorial Squad" , correct : false},
        ]
    },
    {
        question : " Who is the potions master at Hogwarts?",
        answers : [
            {text:"Albus Dumbledore" , correct : false},
            {text:"Rubeus Hagrid" , correct : false},
            {text:"Severus Snape" , correct : true},
            {text:"Gilderoy Lockhart" , correct : false},
        ]
    },
    {
        question : " What was the birth name of Lord Voldemort?",
        answers : [
            {text:"Lucius Malfoy" , correct : false},
            {text:"Peter Pettigrew" , correct : false},
            {text:"Severus Snape" , correct : false},
            {text:"Tom Riddle" , correct : true},
        ]
    },
    {
        question : " Which creature has a strong affinity for shiny objects?",
        answers : [
            {text:"Niffler" , correct : true},
            {text:"Bowtruckle" , correct : false},
            {text:"Thestral" , correct : false},
            {text:"Hippogriff" , correct : false},
        ]
    },
    {
        question : " Which of the following is NOT one of the Horcruxes created by Lord Voldemort?",
        answers : [
            {text:"Marvolo Gaunt's ring" , correct : false},
            {text:"Helga Hufflepuff's cup" , correct : false},
            {text:"Salazar Slytherin's locket" , correct : false},
            {text:"Godric Gryffindor's sword" , correct : true},
        ]
    },
    {
        question : " Who killed Lord Voldemort in the Battle of Hogwarts?",
        answers : [
            {text:"Harry Potter" , correct : true},
            {text:"Ron Weasley" , correct : false},
            {text:"Hermione Granger" , correct : false},
            {text:"Neville Longbottom" , correct : false},
        ]
    },
    {
        question : " In which book did Hermione and Ron share their first kiss?",
        answers : [
            {text:"Harry Potter and the Philosopher's Stone" , correct : false},
            {text:"Harry Potter and the Goblet of Fire" , correct : false},
            {text:"Harry Potter and the Deathly Hallows" , correct : true},
            {text:"They never kissed" , correct : false},
        ]
    },
    {
        question : " What is the name of the wizard prison in the Harry Potter universe?",
        answers : [
            {text:"Nurmengard" , correct : false},
            {text:"Gringotts" , correct : false},
            {text:"Hogwarts" , correct : false},
            {text:"Azkaban" , correct : true},
        ]
    },
    {
        question : " What is Ron's middle name?",
        answers : [
            {text:"Charlie" , correct : false},
            {text:"Cedric" , correct : false},
            {text:"Bartholomew" , correct : false},
            {text:"Bilius" , correct : true},
        ]
    },
    {
        question : " In which class did Hermione punch Draco Malfoy?",
        answers : [
            {text:"Herbology" , correct : false},
            {text:"Defense Against the Dark Arts" , correct : true},
            {text:"Potions" , correct : false},
            {text:"Transfiguration" , correct : false},
        ]
    },
    {
        question : " Which Hogwarts professor is a werewolf?",
        answers : [
            {text:"Remus Lupin" , correct : true},
            {text:"Minerva McGonagall" , correct : false},
            {text:"Albus Dumbledore" , correct : false},
            {text:"Severus Snape" , correct : false},
        ]
    },
    {
        question : " Who betrayed Harry Potter's parents to Lord Voldemort?",
        answers : [
            {text:"Peter Pettigrew" , correct : true},
            {text:"Sirius Black" , correct : false},
            {text:"Albus Dumbledore" , correct : false},
            {text:"Severus Snape" , correct : false},
        ]
    },
    {
        question : " What is the name of Harry Potter's magic wand?",
        answers : [
            {text:"Elder Wand" , correct : false},
            {text:"Phoenix Wand" , correct : false},
            {text:"Holly Wand" , correct : true},
            {text:"Willow Wand" , correct : false},
        ]
    },
    {
        question : " What is the length of Harry Potter's wand?",
        answers : [
            {text:"10 inches" , correct : false},
            {text:"11 inches" , correct : true},
            {text:"12 inches" , correct : false},
            {text:"13 inches" , correct : false},
        ]
    },
    {
        question : " What is the occupation of Dobby the House Elf in the \"Harry Potter\" series by J.K. Rowling?",
        answers : [
            {text:"Butler" , correct : false},
            {text:"Chef" , correct : false},
            {text:"Housekeeper" , correct : false},
            {text:"Caretaker" , correct : true},
        ]
    },
    {
        question : " What is the name of Hagrid's half-brother in the Harry Potter series?",
        answers : [
            {text:"Grawp " , correct : true},
            {text:"Grindelwald" , correct : false},
            {text:"Grimmauld " , correct : false},
            {text:"Gryffindor" , correct : false},
        ]
    },
    {
        question : " What is the name of Ron's pet rat that was later revealed to be a human animagus?",
        answers : [
            {text:"Wormtail" , correct : false},
            {text:"Scabbers" , correct : true},
            {text:"Crookshanks" , correct : false},
            {text:"Fang" , correct : false},
        ]
    },
    {
        question : " What species is Hagrid's half-brother Grawp?",
        answers : [
            {text:"Giant" , correct : true},
            {text:"Werewolf" , correct : false},
            {text:"Centaur " , correct : false},
            {text:"Goblin" , correct : false},
        ]
    },
    {
        question : " Who did Hermione go to the Yule Ball with?",
        answers : [
            {text:"Viktor Krum" , correct : true},
            {text:"Neville Longbottom" , correct : false},
            {text:"Cedric Diggory" , correct : false},
            {text:"Harry Potter" , correct : false},
        ]
    },
    {
        question : " What was Harry Potter's mother's name?",
        answers : [
            {text:"Lily" , correct : true},
            {text:"Hermione" , correct : false},
            {text:"Ginny" , correct : false},
            {text:"Molly" , correct : false},
        ]
    },
    {
        question : " What is J.K. Rowling's real name?",
        answers : [
            {text:"Joanne Kathleen Rowling" , correct : true},
            {text:"Jessica Karen Rowling" , correct : false},
            {text:"Jane Kristin Rowling" , correct : false},
            {text:"John Kevin Rowling" , correct : false},
        ]
    },
    {
        question : " What was Harry Potter's father's name?",
        answers : [
            {text:"Albus" , correct : false},
            {text:"James" , correct : true},
            {text:"Sirious" , correct : false},
            {text:"Severus" , correct : false},
        ]
    },
    {
        question : " What was Lily Potter's maiden name?",
        answers : [
            {text:"Evans" , correct : true},
            {text:"Jones" , correct : false},
            {text:"Smith" , correct : false},
            {text:"Johnson" , correct : false},
        ]
    },
    {
        question : " In the \"Harry Potter\" series by J.K. Rowling, what is Hermione Granger's middle name?",
        answers : [
            {text:"Jane" , correct : false},
            {text:"Elizabeth" , correct : false},
            {text:"Lily" , correct : false},
            {text:"Jean" , correct : true},
        ]
    },
    {
        question : " What was J.K. Rowling's profession before she became an author?",
        answers : [
            {text:"Teacher" , correct : false},
            {text:"Lawyer" , correct : true},
            {text:"Doctor" , correct : false},
            {text:"Accountant" , correct : false},
        ]
    },
    {
        question : " Which of the following books is not written by J.K. Rowling?",
        answers : [
            {text:"Harry Potter and the Philosopher's Stone" , correct : false},
            {text:"The Cuckoo's Calling" , correct : false},
            {text:"Fantastic Beasts and Where to Find Them" , correct : false},
            {text:"The Hunger Games" , correct : true},
        ]
    },
    {
        question : " What is the name of Harry's aunt?",
        answers : [
            {text:"Petunia" , correct : true},
            {text:"Lily" , correct : false},
            {text:"Hermione" , correct : false},
            {text:"Ginny" , correct : false},
        ]
    },
    {
        question : " Why am I a fan of Harry Potter series?",
        answers : [
            {text:"I like it" , correct : false},
            {text:"That's why my friend saw it" , correct : false},
            {text:"Because I don't understand anything" , correct : false},
            {text:"Because I'm crazy" , correct : true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "block";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
} 


function showScore(){
    resetState();
    questionElement.innerHTML = `Harry Crazy You ${score} out of ${questions.length} !!!  (Nayeem) => No need to worry it's just a dream world .😀😀😀`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click" , () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();