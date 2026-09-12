<<<<<<< HEAD
const themeMode = document.querySelector('.ThemeMode');

themeMode.addEventListener('click', () => {
    const temaAtual = document.body.getAttribute('tema-atual');
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('tema-atual', novoTema);
=======
const themeMode = document.querySelector('.ThemeMode');

themeMode.addEventListener('click', () => {
    const temaAtual = document.body.getAttribute('tema-atual');
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('tema-atual', novoTema);
>>>>>>> e28b6e6 (update)
});