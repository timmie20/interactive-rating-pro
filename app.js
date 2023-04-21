const feedback = document.querySelector('.feedback')
const confirm = document.querySelector('.confirmation')
const submitBtn = document.getElementById('submit-btn')
const selected = document.querySelector('.selected')
const rates = document.querySelectorAll('.btn')

function loadAppreciation() {
  if(confirm.classList.contains('confirmation')){
    confirm.classList.add('active')
    feedback.classList.remove('active')
    console.log('Appreciation page loaded')
  }
}

function selectRating (){
  const span = document.createElement('span')
  span.className = 'span'
  rates.forEach(rate => {
    rate.addEventListener('click', function(){
      if(rate.classList.contains('btn')){
        rate.classList.add('active2')
      }
      span.innerText = `You selected ${rate.innerText} out of 5`
      console.log(span.innerText)
      selected.appendChild(span)
    })
  })
}

selectRating()
submitBtn.addEventListener('click', loadAppreciation)