function btnClick(){

    document.querySelector("#two").addEventListener("click",function(){
        document.querySelector("#one").style.backgroundColor = "#222";
        document.querySelector("#two").style.backgroundColor = "#333";
        document.querySelector("#encrypt").style.display = "none";
        document.querySelector("#decrypt").style.display = "block";
        document.querySelector(".ri-arrow-right-line").style.rotate = "180deg";
        document.querySelector("#result").style.display = "none";
        document.querySelector("#txtmsg").value = "";
        document.querySelector("#password").value = "";
    });

    document.querySelector("#one").addEventListener("click",function(){
        document.querySelector("#two").style.backgroundColor = "#222";
        document.querySelector("#one").style.backgroundColor = "#333";
        document.querySelector("#encrypt").style.display = "block";
        document.querySelector("#decrypt").style.display = "none";   
        document.querySelector(".ri-arrow-right-line").style.rotate = "0deg";
        document.querySelector("#result").style.display = "none";
        document.querySelector("#emojimsg").value = "";
        document.querySelector("#finalPassword").value = "";
    });

    document.querySelector("#ebtn").addEventListener("click",function(){
        document.querySelector("#result").style.display = "block";
    });
}
btnClick();

var clutter = "";
function encryption(){
    document.querySelector("#ebtn").addEventListener("click",function(){
        var input = document.getElementById("txtmsg").value;
        var password = document.getElementById("password").value;

        const str = input.split("");
        str.forEach(element => {
            clutter+=`&#128${element.charCodeAt()} `;
        });
        
        document.querySelector("#result").innerHTML = clutter;;

        var dataArr = [];
        if(JSON.parse(localStorage.getItem('data1'))){
            dataArr = JSON.parse(localStorage.getItem('data1'));
            dataArr.push({
                "pass":password,
                "input":input,
                "clutter":clutter
            });
        }else{
            dataArr = [{
                "pass":password,
                "input":input,
                "clutter":clutter
            }];
        }
        localStorage.setItem('data1', JSON.stringify(dataArr));
    })
}
encryption();

function decryption(){
    var clutter2 = '';
    document.querySelector("#dbtn").addEventListener("click",function(){
        var input2 = document.querySelector("#emojimsg").value;
        var finalPass = document.querySelector("#finalPassword").value;

        var user = JSON.parse(localStorage.getItem('data1'));
        var str2 = input2.split(" ");

        str2.forEach(element => {
            clutter2 += `&#${(element.codePointAt(0))} `;
        });

        var found,flag=0;
        for(let i of user){
            if(i.clutter == clutter2 && i.pass == finalPass){
                found = i;
                flag=1;
            }
        }
        if(flag==1){
            document.querySelector("#result").style.display = `block`;
            document.querySelector("#result").style.color = `#eee`;
            document.querySelector("#result").innerHTML = found.input;
        }else{
            document.querySelector("#result").style.display = `block`;
            document.querySelector("#result").style.color = `red`;
            document.querySelector("#result").innerHTML = "Wrong password!";
        }
    });
}
decryption();