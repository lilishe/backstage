window.onload = function () {
    
    let heart = document.querySelectorAll('.fa-heart');
    heart.forEach((item) => {
        item.addEventListener("click", changestyle, false)
        function changestyle(){
            item.classList.toggle("touch")
          
        }
    })

    

  
}

