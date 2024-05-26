document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.querySelector('.netflix-intro').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
        document.body.style.overflow = 'auto'; // Restore scrollbar
    }, 5000); // Match this duration with your animation timing
});
//password logic
let selectedProfile = '';

function promptPassword(profile) {
    selectedProfile = profile;
    document.getElementById('passwordModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('passwordModal').style.display = 'none';
}
//password logic

function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    if (password === 'urgay') {
        closeModal();
        showProfile(selectedProfile);
    } else {
        alert('Incorrect password. Please try again.');
    }
}


function showProfile(profile) {
    document.querySelector('.profiles').style.display = 'none';
    if (profile === 'food') {
        document.getElementById('food').classList.add('active');
    }
    if (profile === 'anything') {
        document.getElementById('anything').classList.add('active');
    }
}


function backToProfiles() {
    document.querySelector('.profiles').style.display = 'flex';
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
}