// console.log("hello world");
// const inputElement = document.getElementById("myFile");
// inputElement.addEventListener("change", handleFiles, false);
// async function handleFiles() {
//   const fileList = this.files; 
//   const data =  fileList[0];

//   let formData = new FormData();
//   formData.append('myFile', data);
 
//   await fetch("http://localhost:3000/api/files", {
      
//     // Adding method type
//     method: "POST",
      
//     // Adding body or contents to send
//     body: formData
// })
  
// // Converting to JSON
// .then(response => response.json())
  
// // Displaying results to console
// .then(json => console.log(json));
// }


const insideDiv = document.getElementById("inner-container");
let btn = document.createElement("button") 

const netLink='https://vishalkaushal32-file-share.herokuapp.com/api/files';
const localLink='http://localhost:3000/api/files';


document.querySelector('#myFile').addEventListener('change', event => {
    handleImageUpload(event).then( addLink()).catch(err=>console.log(err.message));
   
  });

addLink = ()=>{
    btn.innerText="download link"
     
    btn.addEventListener('click',()=>{
        
                window.location.href=globalLink;
            //   });
    })

    insideDiv.appendChild(btn);
  };

var globalLink="";

const handleImageUpload =async event => {
    const files = event.target.files
    const formData = new FormData()
    formData.append('myFile', files[0])
  
    fetch(localLink, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(data.file);
      globalLink=data.file;
    })
    .catch(error => {
      console.error(error)
    })
  }

//   document.getElementById("myBtn").addEventListener("click", ()=>{
//     window.location.href=globalLink;
//   });
const EmailDiv = document.getElementById("email-send-container");


addSendEmailButton = ()=>{
    let EmailBtn = document.createElement("button") ;
    let EmailTo = document.createElement("input");
    let EmailToLabel = document.createElement("label");

    let EmailFrom = document.createElement("input");
    let EmailFromLabel = document.createElement("label");

    EmailTo.type="text";
    EmailFrom.type="text";

    EmailTo.id="emailTo";
    EmailFrom.id="emailFrom";

    EmailToLabel.innerText="Enter the receipient email id";
    EmailFromLabel.innerText="Enter the sender email id";
    
    

    EmailBtn.innerText="Send the email";
    
    // EmailBtn.addEventListener('click',()=>{
        
    //             window.location.href=globalLink;
    //         //   });
    // })
   
    EmailDiv.appendChild(EmailToLabel);
    EmailDiv.appendChild(EmailTo);
    EmailDiv.appendChild(EmailFromLabel);
    EmailDiv.appendChild(EmailFrom);



   



    

    EmailBtn.addEventListener('click',()=>{
        console.log("hi",EmailTo.innerText);
        console.log(EmailFrom.innerText);

    });
    console.log("hhhh",document.querySelector('#emailTo').value);
    console.log(document.querySelector('#emailFrom').value);
    EmailDiv.appendChild(EmailBtn);

  };

  addSendEmailButton();


  