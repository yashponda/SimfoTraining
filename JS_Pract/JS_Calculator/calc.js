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
