                                // to display the value by pressing key from calc

function display(val){
    document.getElementById("root").value += val;
    let x = document.getElementById("root");
    function ke(e){
       // console.log(e.type + '' + e.keyCode + '' + string.fromCharcode(e.keyCode));
    }
    x.addEventListener("keydown", ke, false);
    x.addEventListener("keypress", ke, false);
    x.addEventListener("keyup", ke, false);
}

                // to display the value by pressing key from keyboard  

window.addEventListener("keydown", dis, false);
function dis(key){
        if (key.keyCode == "48"){
            document.getElementById("root").value += 0;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(48), dis());
        }
        else if (key.keyCode == "49"){
            document.getElementById("root").value += 1;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(49), dis());
        }
        else if (key.keyCode == "50"){
            document.getElementById("root").value += 2;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(50), dis());
            }
        else if (key.keyCode == "51"){
                document.getElementById("root").value += 3;
                let x = document.getElementById("root");
                document.getElementById("root").addEventListener(key.keyCode(51), dis());
        }
        else if (key.keyCode == "52"){
            document.getElementById("root").value += 4;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(52), dis());
        }
        else if (key.keyCode == "53"){
            document.getElementById("root").value += 5;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(53), dis());
        }
        else if (key.keyCode == "54"){
            document.getElementById("root").value += 6;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(54), dis());
        }
        else if (key.keyCode == "55"){
            document.getElementById("root").value += 7;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(55), dis());
        }
        else if (key.keyCode == "56"){
            document.getElementById("root").value += 8;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(56), dis());
        }
        else if (key.keyCode == "57"){
            document.getElementById("root").value += 9;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(57), dis());
        }

                        // from now its for number's of numpad

        else if (key.keyCode == "96"){
            document.getElementById("root").value += 0;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(96), dis());
        }
        else if (key.keyCode == "97"){
            document.getElementById("root").value += 1;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(97), dis());
        }
        else if (key.keyCode == "98"){
            document.getElementById("root").value += 2;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(98), dis());
        }
        else if (key.keyCode == "99"){
            document.getElementById("root").value += 3;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(99), dis());
        }
        else if (key.keyCode == "100"){
            document.getElementById("root").value += 4;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(100), dis());
        }
        else if (key.keyCode == "101"){
            document.getElementById("root").value += 5;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(101), dis());
        }
        else if (key.keyCode == "102"){
            document.getElementById("root").value += 6;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(102), dis());
        }
        else if (key.keyCode == "103"){
            document.getElementById("root").value += 7;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(103), dis());
        }
        else if (key.keyCode == "104"){
            document.getElementById("root").value += 8;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(104), dis());
        }
        else if (key.keyCode == "105"){
            document.getElementById("root").value += 9;
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(105), dis());
        } 
        else if (key.keyCode == "43"){
            document.getElementById("root").value += String.fromCharCode(key.keyCode);
            let x = document.getElementById("root");
            document.getElementById("root").addEventListener(key.keyCode(43), dis());
        } 
        //else {
        //  key.preventDefault();
        //}
    }


//////////////////////////////////     While Loop Not Working      ////////////////////////////////////////////////////
/*    
       window.addEventListener("keydown", dis, false);
        function dis(e){
                    var a = [];
                    var k = e.which;
                    while ( (39< i <58) || (95< i <106) ){
                        a.push(i);
                    }
                    if (!(a.indexOf(k)>=0))
                    e.preventDefault();
                    else {
                        document.getElementById("root").value +=String.fromCharCode(e.keyCode)
                    }
                } 
 ////////////////////////////        For Loop also Not Working     ///////////////////////////////// 
                window.addEventListener("keydown", dis, false);
                function dis(e){
                    var a = [];
                    var k = e.which;
                    for (i = 40 ; i < 57 ; i++)
                    a.push(i);
    
                    for (j = 96 ; j < 105 ; j++){
                        a.push(j);
                    }
                    
                    if (!(a.indexOf(k)>=0))
                    e.preventDefault();
                    else {
                        document.getElementById("root").value +=String.fromCharCode(e.keyCode)
                    }  
                }          
                */            
                


       
                        //to perform the final operation after clicking =
        window.addEventListener("keydown", oper , false);
        function oper(){   
            let x = document.getElementById("root").value;
            let y = eval(x);
            document.getElementById("root").value = y
            document.getElementById("root").addEventListener(e.keyCode(13), oper());
            
        } 
                    // to perform the final operation by clicking Enter key
                    window.addEventListener("keydown", operation , false);
                    function operation(key){
                        if (key.keyCode == "13"){
                            let x = document.getElementById("root").value;
                            let y = eval(x);
                            document.getElementById("root").value = y;
                        }
                    }
                                            //Ascii key of esc =27
                                            //Ascii key of enter =13

            // To clear everything after clicking Escape key.               
    window.addEventListener("keydown", resat, false);
    function resat(key){
        if (key.keyCode == "27"){
            document.getElementById("root").value = " ";
        }
    }






                                    // Phase-2 Local Storage , In progress
    /*      
                function typed(){
                    if (typeof(Storage) != undefined){
                        localStorage.setItem("value", value)
                        document.getElementById("root").innerHTML= localStorage.getItem("value");
                    }
                }

            */