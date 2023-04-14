const arrayButton = document.querySelectorAll('#botao')
const send = document.getElementById('send')


arrayButton.forEach((item,index) => {
    item.addEventListener('click', function(e){

        e.preventDefault();

        let rating = 0
        rating = index + 1

        arrayButton.forEach((i) => {
            if(i != this){
                i.classList.remove('bg-medium-gray')
                i.classList.remove('text-white')
            }
            this.classList.toggle('bg-medium-gray')
            this.classList.toggle('text-white')
        })

    document.querySelector('#label').innerHTML = `
    <p class="text-orange opacity-20 text-base">You selected ${rating} out of 5</p>
    `
    })
})
const start = document.getElementById('start')
const thank = document.getElementById('thank')
send.addEventListener('click', () => {
    start.classList.replace('flex', 'hidden')
    thank.classList.replace('hidden', 'flex')
    // start.classList.add('hidden')
    // thank.classList.remove('hidden')
    // thank.classList.add('flex flex-col gap-6')
    
})
