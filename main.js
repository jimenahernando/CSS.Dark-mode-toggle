document.getElementById('theme-toggle').addEventListener('click', (e) => {
    const checked = e.target.checked;
    // document.body.setAttribute('class', checked ? 'light': 'dark');
    document.body.classList.toggle("dark");  
    document.body.classList.toggle("light");  
});