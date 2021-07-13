                                // to display the value by pressing key from calc

function display(val){
    document.getElementById("root").value += val
    let x = document.getElementById("root");
    function ke(e){
        console.log(e.type + '' + e.keyCode + '' + string.fromCharcode(e.keyCode));
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
                }
                
       
          /*      
                // Local Storage 
                function typed(){
                    if (typeof(Storage) != undefined){
                        localStorage.setItem("value", value)
                        document.getElementById("root").innerHTML= localStorage.getItem("value");
                    }
                }
                
            */

                        //to perform the final operation after clicking =
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
