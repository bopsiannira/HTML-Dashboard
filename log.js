function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Bops" && password=="1912")
{

        alert("Stay Connected");
        
       console.log("Your username is " +username+ ". Your password  " +password);
        return false;
}
else
{

        alert("Please Try Again");
}



}    