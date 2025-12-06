document.addEventListener('DOMContentLoaded', () => {
    const initialCard = document.getElementById('initial-card');
    const letterCard = document.getElementById('letter-card');
    const openHeartBtn = document.getElementById('open-heart-btn');
    const envelope = document.querySelector('.envelope');
    const continueBtn = document.getElementById('continue-btn');

    // Step 1: Handle click on "Open My Heart" button
    openHeartBtn.addEventListener('click', () => {
        // Hide the initial card with animation
        initialCard.style.opacity = '0';
        initialCard.style.transform = 'scale(0.8)';

        setTimeout(() => {
            initialCard.classList.add('hidden');
            
            // Show the letter card with animation
            letterCard.classList.remove('hidden');
            // Force reflow/repaint to ensure transition works
            void letterCard.offsetWidth; 
            letterCard.style.opacity = '1';
            letterCard.style.transform = 'scale(1)';
        }, 500); // Wait for the transition to complete
    });

    // Step 2: Handle click on the envelope
    envelope.addEventListener('click', () => {
        // "Open" the envelope
        envelope.classList.add('opened');
        
        // Hide the "Click to open" prompt
        document.querySelector('#envelope-container .click-prompt').style.display = 'none';
        document.querySelector('.special-delivery').style.display = 'none';

        // Show the "Continue" button after a short delay
        setTimeout(() => {
            continueBtn.classList.remove('hidden');
            continueBtn.style.opacity = '1';
        }, 1500); // 1.5 seconds delay
    });

    // Step 3: Handle click on "Continue" button
    continueBtn.addEventListener('click', () => {
        alert('This is where you would link to your dedicated playlist page! 🎶');
        // For a real project, you would change window.location.href to 'playlist.html'
    });
});
