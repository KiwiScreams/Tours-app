function Navigate()
{
    let element = document.getElementById('navigation');
    let display = element.style.display;
    if(display == "none")
    {
        element.style.display = "block";
    }
    else
    {
        element.style.display = "none";
    }
}