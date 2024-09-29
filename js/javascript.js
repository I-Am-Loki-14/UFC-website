const menubar = document.getElementById('menubar');
console.log(menubar);
 const mediaNavLinks = document.getElementById('media-nav-links');
 console.log(mediaNavLinks);

 menubar.addEventListener('click',()=>{
    mediaNavLinks.classList.toggle('show');
    if (mediaNavLinks.classList.contains('show')) {
        menubar.src="img/Closebar.svg";
    } else {
        menubar.src="img/Menubar.svg";
    }
 })