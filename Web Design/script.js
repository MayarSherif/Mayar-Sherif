// $(function(){
//     $("#visible").click(function(){
//         $('#invisible').toggleClass("show");
//     });
// });
function toggleText(){
    var text = document.getElementById("invisible");
    if(text.style.display ==="none"){
        text.style.display = "block";
    }
    else{
        text.style.display ="none"
    }
}