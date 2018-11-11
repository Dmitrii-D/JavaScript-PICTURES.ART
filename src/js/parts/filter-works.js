function filter(){
    
    let allActive = document.querySelector(".all"),
        lovers = document.querySelector(".lovers"),
        chef = document.querySelector(".chef"),
        girl = document.querySelector(".girl"),
        guy = document.querySelector(".guy"),
        grandmother = document.querySelector(".grandmother"),
        granddad = document.querySelector(".granddad"),
        portfolioNo = document.querySelector(".portfolio-no"),
        portfolioMenu =  document.querySelector(".portfolio-menu"),
        portfolioBlockAll =document.querySelectorAll(".portfolio-block"),
        li = portfolioMenu.children;
    
      for (let i = 0; i < li.length; i++) {
            li[i].addEventListener('click', () => {
                for (let i = 0; i < li.length; i++) {
                    li[i].classList.remove('active');
                }
                li[i].classList.add('active');
            });
        }
    
    
    function showWorks(btnPhoto, peopleGroup) {
        btnPhoto.addEventListener('click', () => {
            btnPhoto.classList.add("active"); 
            for (let i = 0; i<portfolioBlockAll.length;i++){
                if(!portfolioBlockAll[i].classList.contains(peopleGroup)){
                    portfolioBlockAll[i].style.display = "none"; 
                    if(peopleGroup == 'grandmother' || peopleGroup == 'granddad') {
                        portfolioNo.style.display = "block";
                    } else {
                        portfolioNo.style.display = "none";
                    }
                }else{
                    portfolioBlockAll[i].style.display = "block";
                }
            }
        })
    }
    
    showWorks(allActive, 'all');
    showWorks(lovers, 'lovers');
    showWorks(chef, 'chef');
    showWorks(girl, 'girl');
    showWorks(guy, 'guy');
    showWorks(grandmother, 'grandmother');
    showWorks(granddad, 'granddad');
    }

module.exports = filter;