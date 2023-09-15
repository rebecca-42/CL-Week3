const batches = ["Avocado", "Banana", "Coconut", "Dragonfruit"];
window.addEventListener("load", function(){
    console.log("page loaded");
    // 1. ID the button
        let button1 = document.getElementById("button1");
    // 2. Listen for click
        button1.addEventListener("click", function() {
            console.log("button 1 clicked");
    // 3. When clicked, get a random number and name
            let index = Math.floor(Math.random()* 4);
            console.log(batches[index]);
            document.getElementById("heading").innerHTML = batches[index];
        });
const happenings = ["they have depleted the world's supply of Arduinos.", "P5.js had to close down (citing an overabundance of wonder) after the cohort had made the most fantastical sketch ever seen.", "they had forgotten their program was partially remote, and missed their fellow fruits.", "they made media so interactive, noninteractive media became obselete."];
    // 1. ID the button
        let button2 = document.getElementById("button2");
    // 2. Listen for click
        button2.addEventListener("click", function() {
            console.log("button 2 clicked");
    // 3. When clicked, get a random number and name
            let index = Math.floor(Math.random()* 4);
            console.log(happenings[index]);
            document.getElementById("story").innerHTML = happenings[index];
        });


})