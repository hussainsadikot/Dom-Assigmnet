function addFooter() {
    const footer = document.createElement('footer');
    footer.textContent = 'This is the footer.';
    document.body.appendChild(footer);
    console.log("footer added")
}