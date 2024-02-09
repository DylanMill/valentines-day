"use strict";

// Selecting elements from the DOM
const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

// Maximum number of images available
const MAX_IMAGES = 12;

// Variables to control the game state
let play = true; // Flag to indicate whether the game is still active
let noCount = 0; // Counter to keep track of the number of times 'No' button is clicked

// Event listener for 'Yes' button click
yesButton.addEventListener("click", handleYesClick);

// Event listener for 'No' button click
noButton.addEventListener("click", function () {
   if (play) {
      // Only execute if the game is still active
      noCount++; // Increment the 'No' button click counter
      const imageIndex = Math.min(noCount, MAX_IMAGES); // Calculate the image index based on the number of 'No' button clicks
      changeImage(imageIndex); // Change the cat image
      resizeYesButton(); // Resize the 'Yes' button
      updateNoButtonText(); // Update the text of the 'No' button
      if (noCount === MAX_IMAGES) {
         // If the maximum number of images/messages is reached
         play = false; // Set the game flag to false, indicating the game is over
         noButton.style.display = "none"; // Hide the 'No' button
      }
   }
});

// Function to handle 'Yes' button click
function handleYesClick() {
   titleElement.innerHTML = "Yayyy!! I love you beautiful &hearts;"; // Update the title element
   buttonsContainer.classList.add("hidden"); // Hide the buttons container
   changeImage("yes"); // Change the cat image to a special one
}

// Function to resize the 'Yes' button
function resizeYesButton() {
   const computedStyle = window.getComputedStyle(yesButton);
   const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
   const newFontSize = fontSize * 1.27; // Increase the font size by 27%

   yesButton.style.fontSize = `${newFontSize}px`; // Apply the new font size to the 'Yes' button
}

// Function to generate the message displayed on the 'No' button
function generateMessage(noCount) {
   const messages = [
      "No",
      "Are you sure?",
      "Pookie please",
      "Don't do this to me :(",
      "You're breaking my heart",
      "I'm gonna cry...",
      "But I love you so much",
      "Okay... fine..",
      "Just kidding",
      "You don't have a choice",
      "I'll ask one more time will you be my valentine",
      "Say yes or I'm taking away the no button",
   ];

   const messageIndex = Math.min(noCount, messages.length - 1); // Ensure the message index doesn't exceed the length of the messages array
   return messages[messageIndex]; // Return the corresponding message based on the number of 'No' button clicks
}

// Function to change the cat image
function changeImage(image) {
   catImg.src = `img/cat-${image}.jpg`; // Update the source of the cat image
}

// Function to update the text of the 'No' button
function updateNoButtonText() {
   noButton.innerHTML = generateMessage(noCount); // Update the innerHTML of the 'No' button with the generated message
}
