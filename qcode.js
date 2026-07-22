document.querySelector(".code").addEventListener("click",function(){
    if(confirm("Are you sure want to reset the code")){
        document.querySelector(".text").value= "";
    }
});