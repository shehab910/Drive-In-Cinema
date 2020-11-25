var mainid, mvimg, mvname, dirname, actorname, description, trailer;

function change()
{
    mainid = document.getElementById("movie-id").value;

    mvimg = document.getElementById("movie-img").value;
    changeimg(mvimg);

    mvname = document.getElementById("movie-name").value;
    changeName(mvname);

    dirname = document.getElementById("dir-name").value;
    changedir(dirname);

    actorname = document.getElementById("actor-name").value;
    changeactor(actorname);

    description = document.getElementById("description").value;
    changedesc(description);

    trailer = document.getElementById("movie-url").value;
    changetrailer(trailer);
}

function changeimg(imglink)
{
    var id = mainid + "-img";
    document.getElementById(id).src = imglink;
}

function changeName(name)
{
    var id = mainid + "-name";
    document.getElementById(id).innerHTML = name;
}

function changedir(dirname)
{
    var id = mainid + "-dirname";
    document.getElementById(id).innerHTML = dirname;
}

function changeactor(actorname)
{
    var id = mainid + "-actname";
    document.getElementById(id).innerHTML = actorname;
}

function changedesc(description)
{
    var id = mainid + "-desc";
    document.getElementById(id).innerHTML = description;
}

function changetrailer(trailer)
{
    var id = mainid + "-trailer";
    document.getElementById(id).href = trailer;
}

var username = 'admin';
var password = 'admin';

function showAdmin()
{
    document.getElementById("admin-validation").style.display = 'inline'

}

function adminLogin()
{
    var un = document.getElementById("admin-un").value;
    var pass = document.getElementById("admin-pass").value;
    if (username === un && password == pass)
    {
        document.getElementById("adminn").style.display = 'inline';
        document.getElementById("admin-validation").style.display = 'none';
        document.getElementById("admin-button").style.display = 'none';
    }
    else
    {
        alert("you are not admin");
        document.getElementById("admin-validation").style.display = 'none';
        
    }
}