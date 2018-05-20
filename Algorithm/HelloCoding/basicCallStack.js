(function greet (name) {
    console.log("%s, %s!", "Hello,", name);
    howGreet(name);
    console.log("Getting ready to say bye ..");
    setTimeout(bye, 3000);
})("Sherly");

function howGreet (name) {
    console.log(`How are you, ${name}?`);
}

function bye () {
    console.log("Ok, Bye~!");
}