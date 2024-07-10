import inquirer from "inquirer";
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25; // after -25 fuel value is 75
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = this.fuel + 25; // after+ 25 fuel value again is 100
        this.fuel;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25; // after -25 fuel value is 75
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
let answer = await inquirer.prompt({ message: "Please enter your name?",
    type: "input",
    name: "player"
});
let select = await inquirer.prompt([
    {
        message: "Please enter your opponent",
        type: "list",
        name: "opponent",
        choices: [
            "skeleton",
            "zombie",
            "monster"
        ]
    }
]);
let p1 = new player(answer.player);
let o1 = new opponent(select.opponent);
if (select.opponent === "zombie") {
}
let ask = await inquirer.prompt([{
        message: `what will you do`,
        type: `list`,
        name: `action`,
        choices: [
            "attack",
            "drink portion",
            "run for your life"
        ]
    }
]);
if (ask.action === "attack") {
    console.log(`${answer.player} vs ${select.opponent}`);
    let random = Math.random() * 2;
    if (random > 0) {
        p1.fuelDecrease();
        console.log(`${p1.fuel} fuel is ${p1.fuel}`);
        console.log(`${p1.fuel} fuel is ${o1.fuel}`);
    }
    else if (random <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.fuel} fuel is ${p1.fuel}`);
        console.log(`${p1.fuel} fuel is ${o1.fuel}`);
    }
}
else if (ask.action === "drink portion") {
    p1.fuelIncrease();
    console.log(`you drink health portion. your fuel is ${p1.fuel}`);
}
else if (ask.action === "run for your life") {
    console.log("you lost.Better luck next time!!!");
    process.exit();
}
else
    console.log(`${answer.player} vs ${select.opponent}`);
(select.opponent === "zombie");
{
    let ask = await inquirer.prompt([{
            message: `what will you do`,
            type: `list`,
            name: `action`,
            choices: [
                "attack",
                "drink portion",
                "run for your life"
            ]
        }
    ]);
}
if (ask.action === "attack") {
    let random = Math.floor(Math.random() * 2);
    if (random > 0) {
        p1.fuelDecrease();
        console.log(`${p1.fuel} fuel is ${p1.fuel}`);
        console.log(`${p1.fuel} fuel is ${o1.fuel}`);
    }
    else if (random <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.fuel} fuel is ${p1.fuel}`);
        console.log(`${p1.fuel} fuel is ${o1.fuel}`);
    }
}
console.log(`${answer.player} vs ${select.opponent}`);
console.log("battle finished");
process.exit();
