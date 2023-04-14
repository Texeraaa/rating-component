const arrayButton = document.querySelectorAll('#botao')

arrayButton.forEach((item) => {
    item.addEventListener('click', function(e){
        e.preventDefault();

        arrayButton.forEach((i) => {
            if(i != this){
                i.classList.remove('bg-medium-gray')
                i.classList.remove('text-white')
            }
            this.classList.toggle('bg-medium-gray')
            this.classList.toggle('text-white')
        })
    })
    
})
