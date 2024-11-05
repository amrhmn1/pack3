document.getElementById('play-button').addEventListener('click', function() {
    const song = document.getElementById('birthday-song');
    if (song.paused) {
        song.play();
        this.textContent = 'Hentikan Lagu';
    } else {
        song.pause();
        this.textContent = 'Putar Lagu';
    }
});
