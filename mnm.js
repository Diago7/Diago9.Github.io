let mode=0;

function changeMode(){
    switch(mode){
        case 0:
            mode =1;
            document.body.style.backgroundColor = "black";
            document.getElementById('main-cont').style.borderColor = "white"
            document.getElementById('post1').style.borderColor = "white"
            document.getElementById('post2').style.borderColor = "white"
            document.getElementById('post3').style.borderColor = "white"
            document.body.style.color = "white"
            document.getElementById('home').style.color = "white"
            document.getElementById('bulb').style.color = "white"
            document.getElementById('bulb').className ="bi bi-lightbulb"


            break;
        case 1:
            mode =0;
            document.body.style.backgroundColor = "white";
            document.getElementById('main-cont').style.borderColor = "black"
            document.getElementById('post1').style.borderColor = "black"
            document.getElementById('post2').style.borderColor = "black"
            document.getElementById('post3').style.borderColor = "black"
            document.body.style.color = "black"
            document.getElementById('home').style.color = "black"
            document.getElementById('bulb').style.color = "black"
            document.getElementById('bulb').className ="bi bi-lightbulb-fill"


            break;

             
    }
}
