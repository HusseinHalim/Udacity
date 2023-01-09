/**
 * global variables here which are the sections titles and descriptions
 */
    const sectionOneTitle= 'HTML';
    const sectionOneDescription= `The HyperText Markup Language or HTML is the standard 
        markup language for documents designed to be displayed in a web browser. It can be 
        assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages 
        such as JavaScript.Web browsers receive HTML documents from a web server or from local
        storage and render the documents into multimedia web pages. HTML describes the 
        structure of a web page semantically and originally included cues for the 
        appearance of the document.HTML elements are the building blocks of HTML pages. 
        With HTML constructs, images and other objects such as interactive forms may be 
        embedded into the rendered page. HTML provides a means to create structured 
        documents by denoting structural semantics for text such as 
        headings, paragraphs, lists, links, quotes, and other items. 
        HTML elements are delineated by tags, written using angle brackets.`;
    const sectionTwoTitle= 'CSS';
    const sectionTwoDescription= `Cascading Style Sheets (CSS) is a style sheet language 
        used for describing the presentation of a document written in a markup language 
        such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).
        CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.`;
    const sectionThreeTitle= 'JavaScript';
    const sectionThreeDescription= `JavaScript , often abbreviated as JS, is a programming
         language that is one of the core technologies of the World Wide Web, alongside 
         HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for
         webpage behavior, often incorporating third-party libraries. All major web 
         browsers have a dedicated JavaScript engine to execute the code on users devices.`;
    const sectionFourTitle= 'ReactJs'; 
    const sectionFourDescription= `React (also known as React.js or ReactJS) is a free 
        and open-source front-end JavaScript library for building user interfaces based on 
        UI components. It is maintained by Meta (formerly Facebook) and a community of 
        individual developers and companies. React can be used as a base in the development 
        of single-page, mobile, or server-rendered applications with frameworks like Next.js.
        However, React is only concerned with state management and rendering that state to 
        the DOM, so creating React applications usually requires the use of additional 
        libraries for routing, as well as certain client-side functionality.`;
    const sectionFiveTitle= 'BootStrap'; 
    const sectionFiveDescription= `Bootstrap is a free and open-source CSS 
        framework directed at responsive, mobile-first front-end web development. 
        It contains HTML, CSS and (optionally) JavaScript-based design templates for 
        typography, forms, buttons, navigation, and other interface components.
        As of December 2022, Bootstrap is the 14th most starred project 
        (4th most starred library) on GitHub, with over 161,000 stars.`;
    const sectionSixTitle= 'JSX'; 
    const sectionSixDescription= `JSX (JavaScript Syntax Extension and occasionally
         referred as JavaScript XML) is a React extension to the JavaScript language 
         syntax which provides a way to structure component rendering using syntax 
         familiar to many developers. It is similar in appearance to HTML.
         React components are typically written using JSX, although they do not have to
         be as components may also be written in pure JavaScript. JSX is created by 
         Meta (formerly Facebook). It is similar to another extension syntax created 
         by Meta for PHP called XHP.`;
    const sectionSevenTitle= 'MySQL'; 
    const sectionSevenDescription= `MySQL is an open-source relational database management 
        system (RDBMS).Its name is a combination of "My", the name of co-founder 
        Michael Widenius's daughter My, and "SQL", the abbreviation for Structured 
        Query Language.`;
    const sectionEightTitle= 'PHP'; 
    const sectionEightDescription= `PHP is a general-purpose scripting language geared
       toward web development.It was originally created by Danish-Canadian programmer
       Rasmus Lerdorf in 1993 and released in 1995.The PHP reference implementation 
       is now produced by The PHP Group.PHP originally stood for Personal Home Page,
       but it now stands for the recursive initialism PHP: Hypertext Preprocessor.`;
    const sectionsTitlesArray= [sectionOneTitle,sectionTwoTitle,sectionThreeTitle,sectionFourTitle,
        sectionFiveTitle,sectionSixTitle,sectionSevenTitle,sectionEightTitle];
    const sectionsDescriptionsArray= [sectionOneDescription,sectionTwoDescription,
        sectionThreeDescription,sectionFourDescription,sectionFiveDescription,
        sectionSixDescription,sectionSevenDescription,sectionEightDescription];      
    /**end of the sections global variables */
    /**
     * sections adding functions to add section to the page
     * @param (title of the section , section description text)
        */
    let addSection= (sectionTitle,sectionDescription) => {
        
        let section= document.createElement('section');//creating section element
        section.setAttribute('class','section');/**assingnig class of section to every added
        *section to control its looking via css
        **/
        section.setAttribute('id',sectionTitle+"__section");
        let title= document.createElement('h2');//making the title of the section
        title.setAttribute('class','section-title title-point');/**assingnig class of title to every added
        *section title to control its looking via css
        **/
        let horizontalLine= document.createElement('hr');//making horizontal line between title
        
        let description= document.createElement('p');//making paragraph to hold section description
        
        title.textContent= sectionTitle;//setting the section title to the given title 
        description.textContent= sectionDescription;//setting the section description to the given description
        
        /**appending child elements to the section element */
        section.appendChild(title);
        section.appendChild(horizontalLine);
        section.appendChild(description);
        /**end of making the section */
        document.getElementById('sections__div').insertAdjacentElement("beforeend",section);//appending the section to sections div 
    }//end of adding section arrow function
 /**
  * checking if the title is in the top of viwe port
  * 
  */
 let checkTitleLocation= ()=> {
    document.addEventListener('scroll',(event)=>{
        let sectionsInNavBar= document.querySelectorAll('.nav-bar-item');
        let sections= document.querySelectorAll('section');
        let inTop= [];
        let inTopCounter= 0;
        for (const section of sections) {
            document.getElementById(section.id).classList.remove('test');
                if (section.getBoundingClientRect().bottom<= 0) {
                    continue;
                }else{
                    inTop[inTopCounter]= section.firstChild.textContent;
                    inTopCounter++;
                }
        }//end of for..of loop to check if the whole section in the view port
       
        let inTopSection= inTop[0];
        for (let index= 0; index < sectionsInNavBar.length; index++) {
            if (sectionsInNavBar[index].textContent === inTopSection) {
                sectionsInNavBar[index].classList.add('active');
                sections[index].classList.add('active');
            } else {
                if(sectionsInNavBar[index].classList.contains('active') ){
                    sectionsInNavBar[index].classList.remove('active');
                    sections[index].classList.remove('active');
                }
            }
        }//end of for..of loop to loop over titles
        
    })
    
 }//end of checkTitleLocation arrow function
/**
 * making the navigation bar based on the number of sections
 * no params required for this functions
 */
    let makeNavBar= ()=>{
        let titlesNames= document.querySelectorAll('.section-title');
        /**
         * getting all the titles fo sections
         */
        let navBar= document.createElement('ul');//making the nav bar as an unordered list
        navBar.setAttribute('id','nav-bar__list');//assignig id to the list
        
        /**making for..of loop to loop through titles and nake navigation bar
         * items according to the titles
         */
        for (const title of titlesNames) {
            let titleName= title.textContent;//getting the title
            let titleTag= document.createElement('a');//mainh anchor tag to move to a title
            titleTag.textContent = titleName;
            /**adding click event to the anchor tag to make it scrolling to the selected section */
            titleTag.addEventListener('click',(event)=>{
                event.preventDefault();
                document.getElementById(`${titleName}__section`).scrollIntoView({behavior:'smooth'});
            });
            /** end of addding the click event listener */
            let navBarItem= document.createElement('li');//making list item to hold the anchor tag
            navBarItem.setAttribute('class','nav-bar-item');

            navBarItem.appendChild(titleTag);//appending the title to the list item
            navBar.appendChild(navBarItem);//appending the list item to the list

            document.getElementById('nav-bar__tag').insertAdjacentElement("afterbegin",navBar);
        }// end of the  for..of statement to loop arround the page sections to get titles
        
    }// end of makeNavBar arrow function
    /**
     * addSections arrow function to add all the sections at a time 
     */
    let addSections= ()=> {
        for (let index = 0; index < sectionsTitlesArray.length; index++) {
            addSection(sectionsTitlesArray[index],sectionsDescriptionsArray[index]);
            
        }
    }//end of addSection arrow function
    addSections();
    makeNavBar();
    checkTitleLocation();