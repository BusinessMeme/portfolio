const hiddenCounters = document.querySelectorAll('.skills__power-item__hidden');
const lines = document.querySelectorAll('.skills__power-item__scale div');
const Counters = document.querySelectorAll('.skills__power-item__persentage');
let firstInteraction = [];
hiddenCounters.forEach(function () {
    firstInteraction.push(true);
});

function skillsLoading () {
    hiddenCounters.forEach( (item, i) => {
        if (firstInteraction[i] == true) {
            if (isInViewport(lines[i]) && Counters[i].innerHTML != item.innerHTML + '%') {
                lines[i].style.width = item.innerHTML + '%';
                let a = 0;
    
                let timer = setInterval(function() {
                    a++;      
                    Counters[i].innerHTML = a + '%';      
                    if (a == item.innerHTML) {
                        clearInterval(timer);
                    }        
                }, 20); //counting animation for persentage
                firstInteraction[i] = false;
            }
        }
    }); 
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= ((window.innerWidth || document.documentElement.clientWidth))
    );
}

export {skillsLoading};