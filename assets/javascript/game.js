var wins = 0;
var losses = 0;
var totalScore=0;
// Here we establish the "tarcgdetNumber" (set to 50 in this example).
var targetNumber = 53;

// Here we set the "number-to-guess" header to match the "targetNumber".
// Eventually this will allow us to change the HTML to match the value in the JavaScript.
$("#number-to-guess").text(targetNumber);

// Here we created an on-click event that responds to button clicks of the crystal image.
// Here we created a counter, we'll be using this to track the user's total.
var counter = 0;

// Here we created code that selects a number either 10 or 11.
  // We begin by expanding our array to include four options.
  var numberOptions = [10, 9, 3, 4];
 // Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {
// For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    var imageCrystal1 = $("<img>");
    var imageCrystal2 = $("<img>");
    var imageCrystal3 = $("<img>");

// First each crystal will be given the class ".crystal-image".
// This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    imageCrystal1.addClass("crystal-image");
    imageCrystal2.addClass("crystal-image");
    imageCrystal3.addClass("crystal-image");
    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://www.crystalinks.com/librarycrystal.jpg");
    imageCrystal1.attr("src", "http://www.crystalclearintentions.co.nz/wp-content/uploads/crystals.jpg");
    imageCrystal2.attr("src", "https://cdn.shopify.com/s/files/1/0912/7764/articles/blue-crystals-vector-clipart.png?v=1518408542");
    imageCrystal3.attr("src", "https://cdn.shopify.com/s/files/1/0912/7764/files/safe_image_1_dfd63a86-36a6-4376-98c2-fc4f62258150_1024x1024.jpg?v=1487900248");
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    imageCrystal1.attr("data-crystalvalue", numberOptions[i]);
    imageCrystal2.attr("data-crystalvalue", numberOptions[i]);
    imageCrystal3.attr("data-crystalvalue", numberOptions[i]);
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
    $("#crystals").append(imageCrystal1);
    $("#crystals").append(imageCrystal2);
    $("#crystals").append(imageCrystal3); 
}     


// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {

// Determining the crystal's value requires us to extract the value from the data attribute.
// Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
// Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
// Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);
// We then add the crystalValue to the user's "counter" which is a global variable.
// Every click, from every crystal adds to the global counter.

// This time we increase the counter by *10* each time the user clicks.
counter += crystalValue;

 // We then output the new counter value each time the crystal is clicked.
 alert("New score: " + counter);


// Here we created some logic to "check" if the click counter matches the targetNumber.
    // Remember, this click event will be triggered with each click.
    // With each click the counter will increase by 10 and be re-evaluated against target.
    if (counter === targetNumber) {

// If the numbers match we'll celebrate the user's win.
wins++;
        document.querySelector("#wins").innerHTML = wins;
alert("You win!");
resetGame();
}
// Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
else if (counter >= targetNumber) {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
// Then they are alerted with a loss.
// alert("You lose!!");
resetGame();
}

// This is fine except the way our code is written every user will win first (when they hit 50).
// But will then lose immediately if they click again. Seems pointless right?
// To make this a game we need to create additional code to randomize the counter and targetScore.


    function resetGame(){
      counter = 0;
      targetNumber = Math.floor(Math.random() * 50);
    }
    var html =
    "<p>Total Score: " + counter + "</p>";

    document.querySelector("#crystalGame").innerHTML = html;
    
});