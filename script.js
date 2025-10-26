document.getElementById('touch').addEventListener('click',touch)
// console.log(document.getElementById('touch'))

function touch(){
    console.log('4')
    let choose = document.querySelector(".choose").value;
    console.log('choose', choose)

    let message = "";

    if(choose === "Sad"){
        message = "Its okk to be sad"
    }
    else if(choose === "Anxious"){
        message = "Its okk to be anxious"
    }
    else if(choose === "Angry"){
        message = "Its okk to be angry"
    }
    else if(choose === "Scared"){
        message = "Its okk to be scared"
    }
    else{
        message = "Its okk to be compassionate"
    }

    console.log(document.querySelector('#placeToSee'))
     document.querySelector('#placeToSee').textContent = message;
}