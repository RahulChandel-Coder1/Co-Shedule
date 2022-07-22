
    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// *******appending team divs*******
 let team_members=[
    {Image:"https://coschedule.com/img/team-headshots/ShannonWiedman.png",name:"SHANNON WIEDMAN",role:"Head of Product"},
    {Image:"https://coschedule.com/img/team-headshots/LuisVegerano.png",name:"LUIS VEGERANO",role:"Director of Engineering"},
    {Image:"https://coschedule.com/img/team-headshots/JadenVanEckhout.png",name:"JADEN VANECKHOUT",role:"Lead Platform Engineer"},
    {Image:"https://coschedule.com/img/team-headshots/ChrisHarwood.png",name:"CHRIS HARWOOD",role:"Support Operations Lead / Escalated Support"},
    {Image:"https://coschedule.com/img/team-headshots/HaleyNelson2.png",name:"HALEY NELSON",role:"Product Design Lead"},
    {Image:"https://coschedule.com/img/team-headshots/JonStreckert.png",name:"JON STRECKERT",role:"Quality Assurance Lead"},
    {Image:"https://coschedule.com/img/team-headshots/BritniSchwartz.png",name:"BRITNI SCHWARTZ",role:"Senior Product Manager"},
    {Image:"https://coschedule.com/img/team-headshots/GustavoSanJose.png",name:"GUSTAVO SAN JOSE",role:"Senior Software Engineer"},
    {Image:"https://coschedule.com/img/team-headshots/MitchHelbling.png",name:"MITCH HELBLING",role:"Senior Software Engineer"},
    {Image:"https://coschedule.com/img/team-headshots/ChadHelbling.png",name:"CHAD HELBLING",role:"Senior Software Engineer"},
    {Image:"https://coschedule.com/img/team-headshots/LanceHendrickson.png",name:"LANCE HENDRICKSON",role:"Business Analyst"},
    {Image:"https://coschedule.com/img/team-headshots/ChrisStAmant.png",name:"CHRIS ST. AMANT",role:"Senior Product Designer"},
    {Image:"https://coschedule.com/img/team-headshots/PaulSethre.png",name:"PAUL SETHRE",role:"Senior Software Engineer"},
    {Image:"https://coschedule.com/img/team-headshots/SamanthaAlbrecht.png",name:"SAMANTHA ALBRECHT",role:"Product Designer"},
    {Image:"https://coschedule.com/img/team-headshots/AlexAyala.png",name:"ALEX AYALA",role:"Technical Support Agent"},
    {Image:"https://coschedule.com/img/team-headshots/TylerSchroeder.png",name:"TYLER SCHROEDER",role:"Quality Assurance Engineer"},
    {Image:"https://coschedule.com/img/team-headshots/KeenanKaufman.png",name:"KEENAN KAUFMAN",role:"Software Engineer"},
    {Image:"https://coschedule.com/img/team-headshots/BenHapip.png",name:"BEN HAPIP",role:"Software Engineer"},
    {Image:"https://coschedule.com/img/team-headshots/JMorganLegreid.png",name:"J.MORGAN LEGREID",role:"Software Engineer"},
    {Image:"https://coschedule.com/img/team-headshots/AnthonySmith.png",name:"TONY SMITH",role:"Jr. Quality Assurance Engineer"},


 ];
 let append=team_members.forEach(function(el){
  let cont=document.getElementById("team-container");
  let div=document.createElement("div");
  let img=document.createElement("img");
  img.src=el.Image;
  let h4=document.createElement("h4");
  h4.innerText=el.name;
  let p=document.createElement("p");
  p.innerText=el.role;
  
  div.append(img,h4,p)
  cont.append(div);
 });
append();


