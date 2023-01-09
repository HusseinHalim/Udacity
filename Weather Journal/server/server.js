//declaring the projectData object
projectData={

}
/***********************************************************************************
 * 1- including express through this line of code***********************************
 * *********************************************************************************/
const express= require('express');
/***********************************************************************************/
/***********************************************************************************
 * 2- making application from express through this line of code*********************
 * *********************************************************************************/
    const app= express();
/***********************************************************************************/
/***********************************************************************************
 * 3- using the body-parser dependancy through those lines of code******************
 * *********************************************************************************/    
    const bodyParser= require('body-parser');
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
/***********************************************************************************/
/***********************************************************************************
 * 4- including cors in our application through this line of code*******************
 * *********************************************************************************/
    const cors= require('cors');
    app.use(cors());
/***********************************************************************************/
    app.use(express.static('../'));//initializing the main project folder
/***********************************************************************************
 * 5- setting up the port to run our server in our application through this line**** 
 * of code***************************************************************************
 * *********************************************************************************/
    const port= 3000;
/***********************************************************************************/
/***********************************************************************************
 * 6- testing the server in our application through this line of code****************
 * *********************************************************************************/    
    const server= app.listen(port,()=>{
        console.log(`listening on localhost port:${port}`);
    });
    /**********************************************************************************
     * ****************end of setting and testing the server **************************
     * **************** code begins from here******************************************
     **********************************************************************************/


    app.post('/',(req,res)=>{
        projectData= {
            temperature:req.body.temperature,
            date:req.body.date,
            userResponse:req.body.userResponse
        };
        console.log("in post route project data is");
        console.log(projectData);
    });//end of adding the post route to fill the projectData object
    app.get('/get_route',(req,res)=>{
        res.send(projectData);
        console.log('in get route the project data is:');
        console.log(projectData);
    })//adding get route to return the projectData object to the client
    