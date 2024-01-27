let person = [
    {
        username : "sam",
        password : "piyush"
    },
    {
        username : "piyush",
        password : "enterhere"
    }

]



function login(){

    let uname = document.getElementById('uname').value;
    let upassword = document.getElementById("upassword").value;

    for (i=0 ; i < person.length ; i++ ){
        if( uname == person[i].username && upassword == person[i].password )
        {
            console.log(uname + " logged in ");
            return;
        }    
        else {
            console.log("user credentails are wrong ");
        }
    }

}

// ???/

function signin(){

    let regname = document.getElementById('newname').value;
    let regpassword = document.getElementById("newpassword").value;
    let newuser = {
        username: regname,
        password: regpassword
    }

    for (i=0 ; i < person.length ; i++ ){
        if( regname == person[i].username)
        {
            alert("Username alredy registered");
            return
        }    
        else if (regpassword.length < 8){
            alert("password is too short");
            return
        }
    }

    person.push(newuser);
    console.log( regname + "account has been registered ");
    console.log(person);
}


let main = document.getElementById("main");

function newlog(){
    confirm("hello");
}


let label = document.getElementById("label");
let labelpass = document.getElementById("labelpass");


function translatelabel(){
    label.classList.remove("label");
    label.classList.add("label2");
}

function translatelabelpass(){
    labelpass.classList.remove("label");
    labelpass.classList.add("label2");
}