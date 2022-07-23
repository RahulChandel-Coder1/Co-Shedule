function addnum() {
    let nums = +91
    let val = document.getElementById('con').value
    if(val == "") {
        val = nums
    }
}
var s
var d
var m
window.onload=()=>{
    var url=new URL(location)
    var params=new URLSearchParams(url.search)
    d=params.get('date')
    console.log(params.toString())
    m=params.get('month')
    s=params.get("slot")
    var  para=document.getElementById("booking")
     para.append(s+", "+d+"  "+m)
  console.log(s,d,m)
}

guestEmail = () => {
    event.preventDefault()
    var emd = document.getElementById('more-em')
    let btns = document.getElementById('guests')
    let lab = document.getElementById('lab')
    btns.style.display = "none"
    emd.style.display = 'block'
    lab.style.display = 'block'
}

bookingDone = () => {
    event.preventDefault()

    let nme = document.getElementById('nme').value
    let em= document.getElementById('em').value
    let con = document.getElementById('con').value
    let popupmsg = document.getElementById("popupname");
    let confirmedpop = document.getElementById("confirmedpop")
    let body1 = document.getElementById("fullbody")
    if(nme !== "" && em !== "" && con !== "") {
        body1.style.filter = "blur(8px)"
        confirmedpop.style.display = "block"
        confirmedpop.style.zindex = "2"
        popupmsg.innerHTML = "";
        let divname = document.createElement("div");
        let divtime = document.createElement("p");
        let divmsg = document.createElement("p");
        divname.innerHTML = `Hello ${nme} !`
        divtime.innerHTML = ` Your Demo has been scheduled at ${s} on ${d} ${m}`
        divmsg.innerHTML = ` You will soon receive an invite mail from Peter Pomonis(organize)`
        popupmsg.appendChild(divname);
        popupmsg.appendChild(divtime);
        popupmsg.appendChild(divmsg);
    }
    else {
        alert('Please fill all required fields')
    }
}
close = document.getElementById("buttonclose");
function closepop() {
    let body1 = document.getElementById("fullbody")
    confirmedpop1 = document.getElementById("confirmedpop");
    confirmedpop1.style.display = 'none';
    body1.style.filter = "none"

  }

 close.addEventListener('click', closepop)