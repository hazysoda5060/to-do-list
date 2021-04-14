var inputVal = ''

document.querySelector('#item').addEventListener('change', function(event){
    inputVal = event.target.value
})

document.querySelector('form').addEventListener('submit', addTodo)

function addTodo(event){
    event.preventDefault()
    event.stopPropagation()
    const item = document.createAttribute('li')
    item.innerText = inputVal

    const button = document.createElement('button')
    button.innerText = 'x'
    button.addEventListener('click', removeTodo)
    item.appendChild(button)

    const list = document.querySelector('ul')
    list.appendChild(item)

    //reset input
    document.querySelector('#item').value = ''
    inputVal = ''
}

function removeTodo(event){
    event.target.parentNode.remove()
}