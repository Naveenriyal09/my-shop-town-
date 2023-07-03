const scrolbtn =document.querySelector('.fa-solid');
window.addEventListener('fa-solid',()=>
{
    if(window.pageYoffest>300){
        scrolbtn.style.display ="block";
    }
    else{
        scrolbtn.style.display ="none"
    }
});
scrolbtn.addEventListener('click',()=>
{
    window .fa-solidTo({
        top:0,
        behavior:"smooth",
    })
});