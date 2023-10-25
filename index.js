gsap.from(".girl", {opacity:0, duration:2.5, x:-200})
gsap.from(".par", {opacity:0, duration:2.5, x:200})
gsap.from("#btn", {opacity:0, duration:2.5, repeat: -1, stagger:0.6})

const mainPars = document.querySelectorAll('.mainPar');
mainPars.forEach(mainPar=> {
    mainPar.addEventListener('click', () => {
        removeFocus();
        mainPar.classList.add('selected');
        
    })
    removeFocus = () => {
        mainPars.forEach (mainPar => {
            mainPar.classList.remove ('selected')
        })
    }
})