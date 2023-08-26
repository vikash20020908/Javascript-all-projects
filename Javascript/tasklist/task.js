
function addtolist() {
    var input = document.getElementById('input').value
    var myindex = document.getElementById('index')
    var newlist = document.createElement('div')
    
    let z = document.createElement('li')
    console.log(z)
    z.innerHTML = input

    var deletebtn = document.createElement('i')
    deletebtn.classList.add('far')
    deletebtn.classList.add('fa-trash-alt')
   

    newlist.appendChild(z)
    newlist.appendChild(deletebtn)
    myindex.appendChild(newlist)
     
};
var myindex = document.getElementById('index')
myindex.addEventListener('click', deleteitem)

function deleteitem (e) {
    const element = e.target
    if (element.classList[0] == 'far') {
        element.parentElement.remove()
    }
}


