var localnm;
window.onload = () => {
    let data = localStorage.getItem('localuser')
    data = JSON.parse(data)
    console.log(data)
    localnm = data[0].name
    console.log(localnm)
    let n = document.getElementById('username')
    n.textContent = localnm
    n.style.marginLeft = "10px"
    n.style.fontWeight = '700'
    // localem = user[0].email;
    // console.log(localem)
    let funs = document.getElementById('funs')
    funs.addEventListener('click', showdatas)
}

showMeNotification =() => {
    event.preventDefault()
    let hide = document.getElementById('assigned')
    hide.style.display = "none"
    let task = document.getElementById('task')
    task.style.display = "none"
    let not = document.getElementById('notify')
    let rec = document.getElementById('recent')
    let fav = document.getElementById('fav')
    not.style.display = "block"
    fav.style.display = "none"
    rec.style.display = "none"
}
showdatas = () => {
    document.getElementById('showData').innerHTML = ""
    document.getElementById('pone').innerHTML = ""
    document.getElementById('ptwo').innerHTML = ""
    document.getElementById('pthree').innerHTML = ""
    document.getElementById('choose').innerText = ""
    document.getElementById('notify').innerHTML = ""
    document.getElementById('recent').innerHTML = ""
    document.getElementById('fav').innerHTML = ""
    let datas = document.getElementById('showData')
    let n = document.getElementById('username').textContent
    let loginman = document.getElementById('loginman')
    loginman.innerText = n
    loginman.style.color = "#2A4564"

    let hide = document.getElementById('assigned')
    let task = document.getElementById('task')
    task.style.display = "block"
    hide.style.display = "block"
    let dd = document.getElementById('dropD')
    dd.style.display = "block"

    let padd = document.getElementById('datas')
    padd.style.padding = "0px"
    let choose = document.getElementById('choose')
    let b = document.createElement('p')
    b.innerText = "Edit Task"
    choose.append(b)
    b.style.marginLeft = "10px"
    let p = document.createElement('input')
    p.style.width= "80%";
    p.style.border = "none"
    p.style.height = "50px"
    p.placeholder = "Task name..."
    datas.append(p)
}
showMeRecents =() => {
    event.preventDefault()
    let rec = document.getElementById('recent')
    let not = document.getElementById('notify')
    let fav = document.getElementById('fav')
    let hide = document.getElementById('assigned')
    let task = document.getElementById('task')
    task.style.display = "none"
    hide.style.display = "none"

    rec.style.display = "block"
    not.style.display = "none"
    fav.style.display = "none"
}
showMeFav =() => {
    event.preventDefault()
    let hide = document.getElementById('assigned')
    hide.style.display = "none"
    let task = document.getElementById('task')
    task.style.display = "none"
    let fav = document.getElementById('fav')
    let rec = document.getElementById('recent')
    let not = document.getElementById('notify')
    fav.style.display = "block"
    not.style.display = "none"
    rec.style.display = "none"
}
showUser = () => {
    let pops = document.getElementById('pops')
    pops.style.display = "block"
}
stopUser = () => {
    let pops = document.getElementById('pops')
    pops.style.display = "none"
}