// var statuss = false;
// var sentence = prompt("Cumle yaz");
// do {
//     var number = prompt("Reqem yaz");
//     number = Number(number);
//     if (sentence.length >= number) {
//         console.log(sentence[number - 1]);
//         statuss = false;
//     } else {
//         var choose = confirm("Yeniden yazmaq isteyirsen?");
//         if (choose) {
//             statuss = true;
//         } else {
//             statuss = false;
//         }
//     }
// } while (statuss);


// var status = false;
// var sentence=prompt ("birsey yaz");
// if(sentence.length >=number){
// }

// var name = prompt("Adin?")
// var age = prompt("Yasin?")
// if (name.length > 5 && age > 18){
//     console.log("Uygundur")
// }

// else {
//     console.log("Uygun deyil")
// }


// var info = "zakhra"
// for (let i = 0; i < text.length; i++) {
//     console.log(text[i]);

// if (i===0){

// }
var names = [
    {
        name: "Murad",
        gender: "male",
    },
    {
        name: "Eliyar",
        gender: "male",
    },
    {
        name: "Harun",
        gender: "male",
    },
    {
        name: "Celil",
        gender: "male"
    },
    {
        name: "Yusif",
        gender: "male"
    },
    {
        name: "Ulvi",
        gender: "male"
    },
    {
        name: "Raul",
        gender: "male"
    },
    {
        name: "Ruslan",
        gender: "male"
    },
    {
        name: "Ehmed",
        gender: "male"
    },
    {
        name: "Ayla",
        gender: "female"
    },
    {
        name: "Inci",
        gender: "female",
    },
    {
        name: "Nigar",
        gender: "female",
    },
    {
        name: "Ulviyye",
        gender: "female",
    },
    {
        name: "Naile",
        gender: "female"
    },
    {
        name: "Emiliya",
        gender: "female"
    },
    {
        name: "Zehra",
        gender: "female",
    },
    {
        name: "Zeyneb",
        gender: "female",
    },
    {
        name: "Aydan",
        gender: "female",
    },
    {
        name: "Sema",
        gender: "female",
    },
];
var surnames = [
    "Zeynalova",
    "Ceferli",
    "Hesenov",
    "Memmedova",
    "Axundova",
    "Muradov",
    "Ebilova",
    "Xelilov",
    "Dadasov",
    "Yusifov",
    "Balayev",
    "Abuyeva",
    "Muradov",
    "Efendiyev",
    "Allahverdiyev",
    "Zeynalov",
    "Haqverdiyev",
    "Gulmahammadov",
    "Agayeva",
];

var randomNameIndex = Math.floor(Math.random() * 19);
var randomName = names[randomNameIndex].name;
var randomSurnameIndex = Math.floor(Math.random() * 19);
var randomSurname = surnames[randomSurnameIndex];
if (names[randomNameIndex].gender === "male") {
    console.log(randomSurname + " " + randomName);
} else {
    console.log(randomSurname + "a" + " " + randomName);
}














































