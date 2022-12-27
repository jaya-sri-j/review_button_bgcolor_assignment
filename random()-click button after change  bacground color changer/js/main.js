function Background() 
{
   var x = Math.ceil(Math.random() * 256);
   var y= Math.ceil(Math.random() * 256);
   var z= Math.ceil(Math.random() * 256);
   document.body.style.background = "rgb(" + x + ", " + y+ ", " + z + ")";
}