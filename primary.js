function fire(){
    const pin = document.getElementById("Pincode");
    const val = pin.value;
    console.log(val);
    let url ="https://api.postalpincode.in/pincode/";
    let newUrl =`${url}${val}`;
    fetch(newUrl).then((data)=>{
    return data.json()
    }).then((objectdata)=>{
        //console.log(objectdata[0].PostOffice[0].District);
        console.log(objectdata[0].PostOffice[0]);
        //console.log(objectdata[0].PostOffice[0].State);
        var disdata=objectdata[0].PostOffice[0].District;
        var statedata=objectdata[0].PostOffice[0].State;
        console.log(disdata);
        console.log(statedata);
        document.getElementById('City').value=disdata;
        document.getElementById('State').value=statedata;

    });
}
function ui2(){
    const pin = document.getElementById("Pincode");
    const val = pin.value;
    console.log(val);
    let url ="https://api.postalpincode.in/pincode/";
    let newUrl =`${url}${val}`;
    fetch(newUrl).then((data)=>{
    return data.json()
    }).then((objectdata)=>{
        //console.log(objectdata[0].PostOffice[0].District);
        console.log(objectdata[0].PostOffice[0]);
        //console.log(objectdata[0].PostOffice[0].State);
        var disdata=objectdata[0].PostOffice[0].District;
        var statedata=objectdata[0].PostOffice[0].State;
    
        var name = document.getElementById("Name").value;
        document.writeln("name <br>"+name+"<br><br>")
        document.writeln("Address <br>Street Address , Street Address<br><br>")
        document.writeln("City<br>"+disdata+" , "+val+"<br><br>")
        document.writeln("State<br>"+statedata+"<br><br>")
    });    
}
fire().then(ui2);
