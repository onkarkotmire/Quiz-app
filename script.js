
const que_count = document.getElementById("que_count");

const Questions = [{
    id: 0,
    q: "What is capital of India?",
    a: [{ text: "gandhinagar", isCorrect: false, selected: false },
    { text: "Surat", isCorrect: false, selected: true},
    { text: "Delhi", isCorrect: true, selected: false},
    { text: "mumbai", isCorrect: false, selected: false }
    ]

},
{
    id: 1,
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
    { text: "phuket", isCorrect: false },
    { text: "Ayutthaya", isCorrect: false },
    { text: "Bangkok", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: false },
    { text: "gandhinagar", isCorrect: true },
    { text: "mumbai", isCorrect: false },
    { text: "rajkot", isCorrect: false }
    ]
},

{
    id: 3,
    q: "What is the capital of Maharashtra",
    a: [{ text: "mumbai", isCorrect: true },
    { text: "vadodara", isCorrect: false },
    { text: "surat", isCorrect: false },
    { text: "rajkot", isCorrect: false }
    ]

},

{
    id: 4,
    q: "What is the capital of Tamilnadu",
    a: [{ text: "chennai", isCorrect: true },
    { text: "vadodara", isCorrect: false },
    { text: "surat", isCorrect: false },
    { text: "rajkot", isCorrect: false }
    ]
}

]

// Set start
var start = true;

function iterate(id) {


    const question = document.getElementById("question");


    // Setting the question text
    question.innerText = Questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;


    var selected = "";


    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
        if(selected === true){
            op1.style.backgroundColor = "green";
        }
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
        if(selected === true){
            op2.style.backgroundColor = "green";
        }
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
        if(selected === true){
            op3.style.backgroundColor = "green";
        }
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
        if(selected === true){
            op4.style.backgroundColor = "green";
        }
    })


    const result = document.getElementsByClassName("result");
    const evaluate = document.getElementsByClassName("evaluate")[0];
    const next = document.getElementsByClassName('next')[0];
    next.style.display = "none";

    // Evaluate method
    evaluate.addEventListener("click", startquiz);
    const time_left = document.getElementById("time_left");
    const ptagoftimeleft = document.getElementById("ptagoftimeleft");
    let interval;
    function startquiz() {
        interval = setInterval(() => {
            time_left.innerText = parseInt(time_left.innerText) - 1;
        }, 1000)

        setTimeout(() => {
            clearInterval(interval);
            time_left.innerText = 8;
            next.style.display = "flex";
            ptagoftimeleft.innerText = "Time Up";
            time_left.style.display = "none";
        }, 8000)
    }
}




const next = document.getElementsByClassName('next')[0];
var id = 0;

if (start) {
    iterate("0");
}

next.addEventListener("click", () => {
    const evaluate = document.getElementsByClassName("evaluate")[0];
    if (id <= 4) {
        start = false;
        id++;
        iterate(id);
        console.log(id);
        que_count.innerText = id + 1;
        time_left.innerText = 8;
        startquiz();
        evaluate.style.display = "none";
        ptagoftimeleft.innerText = "Time left";
        time_left.style.display = "flex";
    }
    else{
        const main_container = document.getElementsByClassName("main_container")[0];
        const body = document.getElementsByTagName("body")[0];
        main_container.style.display = "none";
        let heading = document.createElement("h1");
        heading.setAttribute("class", "endheading");
        heading.innerText = "Your Test is submitted Successfully..!!"
        body.append(heading);
        console.log("hello")
    }
    
    function startquiz() {
        interval = setInterval(() => {
            time_left.innerText = parseInt(time_left.innerText) - 1;
        }, 1000)

        setTimeout(() => {
            clearInterval(interval);
            time_left.innerText = 0;
            next.style.display = "flex";
            ptagoftimeleft.innerText = "Time Up";
            time_left.style.display = "none";
        }, 8000)
    }

    op3.style.backgroundColor = "";
    op2.style.backgroundColor = "";
    op1.style.backgroundColor = "";
    op4.style.backgroundColor = "";


})




