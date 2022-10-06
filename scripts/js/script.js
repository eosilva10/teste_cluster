let click = 1 

// MOTRAR MENU
function mostraMenu() {
    click ++ 

    const na = document.getElementById('navbarBtn')
    const item = document.getElementById('menu4')
    const item2 = document.getElementById('menu5')
    const item3 = document.getElementById('menu6')
    const header = document.getElementById('header')

    if (click % 2 == 0) {
        na.style.transform = 'translateX(0%)'
        item.style.display = 'inherit'
        item2.style.display = 'inherit'
        item3.style.display = 'inherit'
        item3.style.marginBottom = "30px"
        header.style.marginBottom = "0"
    } else {
        na.style.transform = 'translateX(-100%)'
        item.style.display = 'none'
        item2.style.display = 'none'
        item3.style.display = 'none'
        header.style.marginBottom = "30px"
    }
        
} 