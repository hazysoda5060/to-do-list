let inputVal = ''

document.querySelector('#item').addEventListener('change', function(event){
    inputVal = event.target.value
})

document.querySelector('form').addEventListener('submit', addTodo)

function addTodo(event){
    event.preventDefault()
    event.stopPropagation()
    const item = document.createAttribute('li')
    item.innerText = inputVal
    console.log(item.innerText)

    const list = document.querySelector('ul')
    list.appendChild(item)

    //reset input
    document.querySelector('#item').value = ''
    inputVal = ''
}