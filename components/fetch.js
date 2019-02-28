import * as firebase from 'firebase';
export function getRequests(params) {
    
  return fetch('http://iot.geniuserc.me/getrequest.php') 
    .then((response) => {console.log("success");return response.json()})
    .catch((error) => {
      console.error(error);
    });
  }  
  
  
 export  function postRequest(params){
    var xx = "";
      params.map((l)=>{
      xx += encodeURIComponent(l.key)+'='+encodeURIComponent(l.value)+'&';
  })
  xx = 'http://iot.geniuserc.me/postrequest.php?'+xx;
  console.log(xx);
  return fetch(xx).catch((error) => {
      console.error(error);
    });
    }
    
    export function postMail(params){
      var url = 'http://iot.geniuserc.me/mail.php?receiver=977'+ encodeURIComponent(params.numberToSend) +'&donator='+encodeURIComponent(params.myNumber)+'&name='+ encodeURIComponent(params.myName);
      
      return fetch(url).then((response)=>{ return response.json()}).catch((error)=>{console.log(error)});
    }
