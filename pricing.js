let count=0
function submit()
{
    let a=document.createElement("h1")
    let b=document.createElement("p")
    count++
    if(count%2==0)
    {
      document.getElementById("price").innerHTML=null
      document.getElementById("price").appendChild(a)
      document.getElementById("price").appendChild(b)
      a.innerHTML="$29"
      b.innerHTML="Billed Monthly"
    }
    else
    {
        document.getElementById("price").innerHTML=null
        document.getElementById("price").appendChild(a)
        document.getElementById("price").appendChild(b)
        a.innerHTML="$39"
        b.innerHTML="Billed Annually"
      }
}
close = document.getElementById("close");
 close.addEventListener('click', function() {
   note = document.getElementById("note");
   note.style.display = 'none';
 }, false);

 window.onload=()=>{
  setTimeout(()=> {
    let a=document.getElementById("note")
    a.style.display="block";
}, 3000);
}