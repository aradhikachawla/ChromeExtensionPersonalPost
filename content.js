/*
Developer Names- Sonali aand Aradhika
*/

console.log('content.js')
chrome.runtime.onMessage.addListener(gotMessage);
let urls = []

//function to grab the message from background script when the extension get clicked. 
function gotMessage(message,sender,sendResponse){
   console.log("gotMessage:=");
   console.log("gotMessage:="+ message.txt);

   // If any message comes from  popup like text or button click Run the functions to grab the posts and download the csv.
     launch();
     download_csv_file();
  }



//function to grab the urn needed from web 
function launch() {
   console.log('Launch');
   document.querySelectorAll('[data-urn]').forEach(elem=>urls.push('https://www.linkedin.com/feed/update/'+elem.getAttribute("data-urn")));
   console.log(urls);
}



 //create a user-defined function to download CSV file 
 function download_csv_file() {
      console.log(urls);
     //define the heading for each row of the data
     var csv = 'Name\n';
     //merge the data with CSV 
     urls.forEach(function(row) {
          //   csv += row.join(',');\
             csv=csv+row;
             csv += "\n";
     });
     //display the created CSV data on the web browser 
     document.write(csv);
     var hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
     hiddenElement.target = '_blank';  
    
     //provide the name for the CSV file to be downloaded
     hiddenElement.download = 'ExtensionPosts.csv';
     document.body.appendChild(hiddenElement);
     hiddenElement.click();
      
 }