document.addEventListener('DOMContentLoaded', () => {
    const affirmations = [
        "Anja, you are the love of my life!",
        "I cannot wait to spend the rest of my life with you, Anja.",
        "Remember our first kiss? I was so stoked.",
        "You are the most genuine person I know.",
        "You care, authentically, about everyone around you.",
        "You always make me laugh!",
        "You are the most beautiful woman on planet Earth.",
        "You make me into a better person each and every day.",
        "I think about you all the time (most likely even right now!).",
        "You are the most important person in my life.",
        "I am inspired by your courage and resilience.",
        "I cannot imagine life without you by my side.",
        "When I hold your hand, it just fits! And that always makes me so happy.",
        "You have the most stunning smile.",
        "You are so incredibly smart.",
        "I dream about Pirate's Cove, where we got engaged, every single day.",
        "I am awestruck at how lucky I am to have you in my life.",
        "I could talk to you forever and never get bored.",
        "You make my life so interesting and so vivid.",
        "You have a powerful drive and persistence, nothing can stop you.",
    ];

    const button = document.getElementById('new-affirmation');
    const affirmationDisplay = document.getElementById('affirmation');

    button.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        affirmationDisplay.textContent = affirmations[randomIndex];
        generateHearts(button);
    });
});

function generateHearts(button) {
    const heartCount = 30; // Number of hearts to generate
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        document.body.appendChild(heart);
        // Positioning hearts randomly around the button
        const buttonRect = button.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;
        const angle = Math.random() * Math.PI * 2; // Random angle
        const distance = Math.random() * 100 + 50; // Random distance from the button
        heart.style.left = `${buttonCenterX + distance * Math.cos(angle) - 15}px`; // Adjust -10 to center the heart
        heart.style.top = `${buttonCenterY + distance * Math.sin(angle) - 15}px`; // Adjust -10 to center the heart

        // Remove the heart after animation completes
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}
