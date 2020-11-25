var image = ["a", "b","c"];
var i = image.length;

//function for the next image
function nextImage ()
{
    if (i <image.length) {
        i = i + 1;

    }
    else { i = 1; }

    document.getElementById("box").innerHTML = "<img src='"+image[i-1] + ".jpg'>";
 
};//end function nextiamge 
//function for the previous
function prewImage ()
{
    if (i<image.length+1 && i > 1) {
        i = i - 1;
    }
    
    document.getElementById("box").innerHTML = "<img src='"+image[i-1] + ".jpg'>";
 
};