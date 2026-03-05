// Dark Mode Toggle
const toggle = document.getElementById('mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Project modal
const projects = document.querySelectorAll('.project');
const modal = document.getElementById('project-modal');
const modalDesc = modal.querySelector('#modal-desc');
const closeModal = modal.querySelector('.close');

projects.forEach(proj => {
    proj.addEventListener('click', () => {
        // Remove previous video if exists
        const existingVideo = modal.querySelector('video');
        if (existingVideo) existingVideo.remove();

        // Show video if type="video"
        const type = proj.dataset.type;
        if(type === 'video'){
            const video = document.createElement('video');
            video.src = proj.dataset.src;
            video.controls = true;
            video.autoplay = true;
            video.style.width = '100%';
            video.style.borderRadius = '10px';
            modal.querySelector('.modal-content').prepend(video);
        }

        modalDesc.textContent = proj.dataset.desc;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    const video = modal.querySelector('video');
    if(video){
        video.pause();
        video.currentTime = 0;
        video.remove();
    }
    modal.style.display = 'none';
});

window.addEventListener('click', e => { 
    if(e.target == modal){
        const video = modal.querySelector('video');
        if(video){
            video.pause();
            video.currentTime = 0;
            video.remove();
        }
        modal.style.display = 'none';
    }
});