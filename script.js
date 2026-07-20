const audio = document.getElementById("audio");
const lyrics = document.getElementById("lyrics");
const disco = document.querySelector(".cover");

const letra = [

    {time:0,text:"Preparando la canción..."},

    {time:5,text:"Primera línea..."},

    {time:10,text:"Segunda línea..."},

    {time:15,text:"Tercera línea..."},

    {time:20,text:"Cuarta línea..."},

    {time:25,text:"Quinta línea..."}

];

audio.onplay=()=>{

disco.classList.add("playing");

}

audio.onpause=()=>{

disco.classList.remove("playing");

}

audio.ontimeupdate=()=>{

for(let i=0;i<letra.length;i++){

if(audio.currentTime>=letra[i].time){

lyrics.innerHTML=letra[i].text;

}

}

}