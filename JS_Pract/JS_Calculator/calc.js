                                // to display the value by pressing key from calc

function display(val){
    document.getElementById("root").value += val;
    let x = document.getElementById("root");
    function ke(e){
    }
}
        window.addEventListener("keydown", dis, false);
            function dis(e){
                    var a = [];
                    var k = e.which;
                    for (i = 40 ; i < 58 ; i++){
                        a.push(i);
                    }
                        for (j = 96 ; j < 106 ; j++){
                            a.push(j);
                        }
                    a.push(106,107,109,110,111);      // 106 for * ,107 for + ,109 for - ,110 for . ,111 for / from Numpad
                    a.push(16,8);                     // 16 for shift , 8 for backspace
                    a.push(186,187,189,190,191 );     // 186 for * ,187 for + ,189 for - ,190 for . ,191 for /  ...for numbers with shift
                        if (!(a.indexOf(k)>=0))
                            e.preventDefault();
                            else {
                            }  
        }      
                        //to perform the final operation after clicking =
        //window.addEventListener("keydown", oper , false);
        function oper(){   
            let x = document.getElementById("root").value;
                if(x=="" || x== null || x==0){
                }
                else{
                    let y = eval(x);
                    document.getElementById("root").value = y
                }
        } 
            
                    // to perform the final operation by clicking Enter key
                    window.addEventListener("keydown", operation , false);
                    function operation(key){
                        if ((key.which || key.keyCode || 0) == "13"){             //Ascii key of enter =13
                            let x = document.getElementById("root").value;
                            if(x == "" || x== null || x==0){
                            }
                            else{
                                let y = eval(x);
                                document.getElementById("root").value = y;
                            }
                        }
                    }

            // To clear everything after clicking Escape key.               
    window.addEventListener("keydown", resat, false);
        function resat(key){
            if (key.keyCode == "27"){                                           //Ascii key of esc =27
                document.getElementById("root").value = " ";
            }
        }




                                    // Phase-2 Local Storage , In progress
 /*              
                document.getElementById("ttt").onclick = () => {
                let localy = document.getElementById("root").value;
                localStorage.setItem("numbers",localy);

                let printy = localStorage.getItem("numbers");
                console.log(printy);
            }
                                    
                                        document.onclick = function resat(){
                                            localStorage.clear();
                                        }
*/

 /*
            window.onbeforeunload = function() {
                var localy = document.getElementById("ttt"); 
                localStorage.setItem("fran_name", localy.value);
            }

            window.onload = function() {
                var localy = localStorage.getItem(localy);
                if (localy !== null) document.getElemenyById("localy").value = localy;
                
            }
*/
