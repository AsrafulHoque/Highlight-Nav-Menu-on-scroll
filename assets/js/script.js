/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // code should be execute here

    let allSection = document.querySelectorAll('section');
    let allLi = document.querySelectorAll('nav, .navbar-nav, li');
    window.addEventListener("scroll",() => {
        let current = '';
        allSection.forEach( section =>{
            let sectiontop = section.offsetTop;
            let sectionheight = section.clientHeight;
            if(pageYOffset >= (sectiontop - sectionheight / 3)){
                current = section.getAttribute('id');
            }
        })

        allLi.forEach(li =>{
            li.classList.remove('active');
            if(li.classList.contains(current)){
                li.classList.add('active')
            }
        })


        
    })

});
