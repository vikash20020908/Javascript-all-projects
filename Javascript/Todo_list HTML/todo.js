function addtolist() {

    var taskname = document.getElementById('taskname').value
    var tododiv = document.getElementById('mytodo')
    var newtodoitem = document.createElement('div')  
    var existingli = document.getElementsByTagName('li')
    var n = existingli.length
    //.log(n),
    //console.log(existingli)
    for (var i = 0; i < n; i++) {
        console.log(existingli[i].innerText)
        if (taskname == existingli[i].innerText) {
            alert('this task already exist')
            return
        }
    }
    var todoname = document.createElement('li')
    todoname.innerHTML = taskname

    var deletebtn = document.createElement('i')
    deletebtn.classList.add('far')
    deletebtn.classList.add('fa-trash-alt')

    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletebtn)
    tododiv.appendChild(newtodoitem)

}
var tododiv = document.getElementById('mytodo')
tododiv.addEventListener('click', deleteitem)

function deleteitem(e) {
    const element = e.target
    if (element.classList[0] == 'far') {
        element.parentElement.remove()
    }
}
