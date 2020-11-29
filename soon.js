var image = ["a", "b","c"];
var i = image.length;
var first = true;
//function for the next image
function nextImage ()
{
    if (i <image.length) {
        i = i + 1;

    }
    else if(first)
    {
        i=2;
        first = false;
    }
    else { i = 1; }

    document.getElementById("box").innerHTML = "<img src='"+image[i-1] + ".jpeg'>";
 
};//end function nextiamge 
//function for the previous
function prewImage ()
{
    if (i<image.length+1 && i > 1) {
        i = i - 1;
    }
    
    document.getElementById("box").innerHTML = "<img src='"+image[i-1] + ".jpeg'>";
 
};