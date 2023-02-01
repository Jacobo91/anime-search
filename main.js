const sideMenu = document.querySelector('.sideMenu');
const navBar = document.querySelector('nav')
const navHeight = navBar.clientHeight;
const burguerBtn = document.querySelector('.burguer-btn');
const navbarIcon = document.querySelector('.burguer-menu-icon');
const selection = document.querySelector('.selected');





const toggleSideMenu = () => {
    sideMenu.classList.toggle('active');
    navbarIcon.classList.toggle('fa-xmark')
}

const handleSelection = async () => {
    const animeTitle = event.target.value;
    console.log(animeTitle);
    try{
        
    }
    catch(error){
        console.log(error);
    }
}





console.log();

burguerBtn.addEventListener('click', toggleSideMenu);
selection.addEventListener('change', handleSelection);