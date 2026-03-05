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
        // Remove any previous media in modal
        const existingMedia = modal.querySelector('video, img');
        if (existingMedia) existingMedia.remove();

        const type = proj.dataset.type;
        const src = proj.dataset.src;

        if(type === 'video'){
            const video = document.createElement('video');
            video.src = src;
            video.controls = true;
            video.autoplay = true;
            video.style.width = '100%';
            video.style.borderRadius = '10px';
            modal.querySelector('.modal-content').prepend(video);
        } else if(type === 'image'){
            const img = document.createElement('img');
            img.src = src;
            img.alt = proj.querySelector('p').innerText;
            img.style.width = '100%';
            img.style.borderRadius = '10px';
            modal.querySelector('.modal-content').prepend(img);
        }

        modalDesc.textContent = proj.dataset.desc;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    const media = modal.querySelector('video, img');
    if(media){
        if(media.tagName === 'VIDEO'){
            media.pause();
            media.currentTime = 0;
        }
        media.remove();
    }
    modal.style.display = 'none';
});

window.addEventListener('click', e => { 
    if(e.target == modal){
        const media = modal.querySelector('video, img');
        if(media){
            if(media.tagName === 'VIDEO'){
                media.pause();
                media.currentTime = 0;
            }
            media.remove();
        }
        modal.style.display = 'none';
    }
});
