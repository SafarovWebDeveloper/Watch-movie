window.addEventListener('DOMContentLoaded', function(){
    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsParents = document.querySelector('.tabheader__items'),
        tabContent = document.querySelectorAll('.tabcontent'),
        closeBtn = document.querySelector('.btn-close'),
        reklama = document.querySelector('.reklama'),
        closeBtn2 = document.querySelector('.btn-close-2'),
        reklama2 = document.querySelector('.reklama-2');

    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('none')
            item.classList.remove('show','fade')

        })
       tabs.forEach(item =>{
           item.classList.remove('tabheader__item_active');
       })

    }
    function showTabContent(i = 0) {
        tabContent[i].classList.add('show','fade')
        tabContent[i].classList.remove('none')
        tabs[i].classList.add('tabheader__item_active')

    }
    hideTabContent();
    showTabContent();



    tabsParents.addEventListener('click', (event)=> {
        if(event.target && event.target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if(event.target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    closeBtn.addEventListener('click', ()=>{
        reklama.style.display = 'none'
    })
    closeBtn2.addEventListener('click', ()=>{
        reklama2.style.display = 'none'
    })
})