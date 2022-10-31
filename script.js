'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tab-btn'),
          tabContent = document.querySelectorAll('.content-text'),
          tabWrapper = document.querySelector('.tab');
         
    function tabsContentHide() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        
        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }
    
    function tabsContentShow(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('active');
    }
    
    tabsContentHide();
    tabsContentShow();
    
    tabWrapper.addEventListener('click', (event) => {
        const target = event.target;
        
        if (target && target.classList.contains('tab-btn')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    tabsContentHide();
                    tabsContentShow(i);
                }
            });
        }
    });
    
});