/*
Developer Names - Sonali aand Aradhika
*/

function setup(){

   let userbutton = select('#userButton');
   userbutton.mouseClicked(changeText)
   // let userinput = select('#userinput');
  //  userinput.input(changeText);


    function changeText(){
        let params= {
            active:true,
            currentWindow:true
    }      
  


        chrome.tabs.query(params,gotTabs);
        function gotTabs(tabs){
      //  let message = userinput.value();
        let msg = { txt : "Sonali" }
        chrome.tabs.sendMessage(tabs[0].id, msg);

        }

    }   


}

 