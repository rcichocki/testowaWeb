document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')

    function addShadow() {
        if(window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))



    window.addEventListener('scroll',addShadow)
})


//DZIAŁANIE SKRYPTU:
// 1.Po kliknięniu w jakikolwiek link, nawigacja ma się zamknąć.
// 2. Za pokazanie/ukrycie nawigacji odpowiada klasa .show
//Potrzebujemy więc elementu, do którego ta klasa jest dodawania.