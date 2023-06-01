function button() {
    var tab1= document.getElementById("Name").value;
    document.getElementById("data").innerHTML=(tab1);
    var tab2= document.getElementById("fName").value;
    document.getElementById("data3").innerHTML=(tab2);
    var tab3= document.getElementById("cnic").value;
    document.getElementById("data4").innerHTML=(tab3);
    var tab4= document.getElementById("Batch").value;
    document.getElementById("data5").innerHTML=("Batch="+tab4);
    
}