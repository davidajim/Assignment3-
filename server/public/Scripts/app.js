// IIFE --> Immediately invoked function expression
(function(){
    function Start()
    {
        console.log("App Started");
    }
    let deletebuttons = document.querySelectorAll('.btn-danger');
    for(button of deletebuttons)
    {
        button.addEventListener('click',(event)=>{
            if(!confirm("Are you sure?"))
            {
                event.preventDefault();
                window.location.assign('/nba-list');
            }
        });
    }
    window.addEventListener("load", Start);


    
})();