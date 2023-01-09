

   /**
    * making the api client
    */
   const API_KEY= '3bcea8c41f667e7bf8d0357844463a94&units=imperial';//my key obtained by signing in to open weather map api
   const BASE_URL='https://api.openweathermap.org/data/2.5/weather?';//here is a global variable holdin the base url for the api
   
   
   let apiResponse= '';
   let userResponse= '';
   let projectData={};//the object that will hold the weather objects
   let weatherInfo='';
   /**
    * getData async method to get the data (tempreature and date) from the api
    * and then posting data to the localhost server at port 3000
    * after that it will be updating the UI 
    */
   const getWeather= async(url)=>{
         await fetch(url)
         .then(async (response)=>{
             weatherInfo= await response.json();//getting the response and storing it
        })//end of the first chain of then to fetch data from api
        .then((url="/",projectData= {
            temperature:weatherInfo.main.temp  ,
            date:new Date(weatherInfo.dt*1000)+"",
            userResponse:userResponse
        })=>{
            postDataToLocalHost(url,projectData);

        })//end of the second chain of then to send data to local host server 3000
        .then(async()=>{
            document.getElementById('zip').value="";
            document.getElementById('feelings').value="";
            document.getElementById('display__data').innerHTML = `The Tempreature in <i class="values" id="city__name">${weatherInfo.name}</i>
            in<i class="values" id="country__name">${weatherInfo.sys.country}<i/>is
            <i class="values" id="temp__value">${weatherInfo.main.temp}</i>
            <br><hr>The Date Today Is<i class="values" id="date__value">${new Date(weatherInfo.dt*1000)}</i> <br><hr>
            Your Response Today Is <i class="values" id="response__value">${userResponse}</i>`;
            
        })//end of the third chain of then to update UI elements
   }//end of getWeather arrow function
   /**
    * end of getData
    */



   /**
    * postData function to post data to server
    */
   const postDataToLocalHost= async(url="",data={})=>{
        await fetch(url,{
            method:'POST',
            credentials:"same-origin",
            headers:{'Content-Type':'application/json',},
            body:JSON.stringify(data),
        })
   }//end of postDataToLocalHost
   
   
   
   /**
    * adding click event to the button to display the weather info
    */
   document.getElementById('generate').addEventListener('click',function getData(event){
        event.preventDefault();
        const ZIP_CODE= document.getElementById('zip').value;
        const API_FULL_URL=`${BASE_URL}zip=${ZIP_CODE}&appid=${API_KEY}`;
        userResponse= document.getElementById('feelings').value;
        getWeather(API_FULL_URL,projectData);
   });

   /**
    * end of adding the event
    */
