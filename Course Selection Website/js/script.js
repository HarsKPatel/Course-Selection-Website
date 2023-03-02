/* 
 * Main scripts file for the timetable website.
 * Assignment 4, CSCI 1170, Winter 2022
 * Starter code provided by Dr. Raghav V. Sampangi
 */

//Reffered to Zybooks for some properties of JSON object
//     URL:https://learn.zybooks.com/zybook/DALCSCI1170SampangiWinter2022/chapter/9/section/1
//     Date accessed:23/03/2022

// converting the JSON object to string
let var1=JSON.stringify(courseInfo)
// Converting String to JSON object
let var2=JSON.parse(var1);
// Used loop to access all the elements from JSON object
for(i=0;i<courseInfo.length;i++)
{
    // Creating a div element for storing values for each courses
    var div = document.createElement('div');
    //setting id to each div element
    div.id = 'section'+i;
    // setting class name to div element
    div.className='CourseInformation';
    // Used appenchild() method to append the div element to the container class, in order to show content in the webpage
    document.getElementsByClassName("container")[0].appendChild(div);
    // Adding paragraph to each div element with appropriate information
    document.getElementById("section"+i).innerHTML+="<p class='code-name'>"+courseInfo[i].code+" - "+courseInfo[i].name+"</p>"; 
    document.getElementById("section"+i).innerHTML+="<p class='professor'>"+courseInfo[i].prof+"</p>";
    document.getElementById("section"+i).innerHTML+="<p class='enrollment'>Current Enrollment: "+courseInfo[i].currEnroll+" (max:"+courseInfo[i].maxEnroll+")</p>";
    document.getElementById("section"+i).innerHTML+="<p class='schedule'>Location: "+ courseInfo[i].location + " (schedule:" + courseInfo[i].schedule+")</p>";
    document.getElementById("section"+i).innerHTML+="<p class='info'>"+courseInfo[i].info+"</p>";
    // Adding submit button to each div element
    document.getElementById("section"+i).innerHTML+="<input type='button'"+ "value='Sign-up for course'"+ "name='signup-btn'"+ "id=signup-btn"+i+">";
    
    //Used if,else if conditions for just selecting and priting the information of the course whose submit button is clicked
    if(i==0)
    {
        let click_btn=document.getElementById("signup-btn"+i)
        // Adding click event listner in order to print the message when button is clicked
        click_btn.addEventListener("click",review)
        // creating a function which will be called when the button is clicked
        function review(){
            let finalans=courseInfo[0].code+": "+courseInfo[0].name;
            let p=document.createElement("p")
            p.innerHTML=finalans
            document.querySelector(".course-selection-bag").appendChild(p)
        }
        
    }
    else if(i==1)
    {
        let click_btn=document.getElementById("signup-btn"+i)
        // Adding click event listner in order to print the message when button is clicked
        click_btn.addEventListener("click",review)
        // creating a function which will be called when the button is clicked
        function review(){
            let finalans=courseInfo[1].code+": "+courseInfo[1].name;
            let p=document.createElement("p")
            p.innerHTML=finalans
            document.querySelector(".course-selection-bag").appendChild(p)
        }
    }
    else if(i==2)
    {
        let click_btn=document.getElementById("signup-btn"+i)
        // Adding click event listner in order to print the message when button is clicked
        click_btn.addEventListener("click",review)
        // creating a function which will be called when the button is clicked
        function review(){
            let finalans=courseInfo[2].code+": "+courseInfo[2].name;
            let p=document.createElement("p")
            p.innerHTML=finalans
            document.querySelector(".course-selection-bag").appendChild(p)
        }
    }
    else if(i==3)
    {
        let click_btn=document.getElementById("signup-btn"+i)
        // Adding click event listner in order to print the message when button is clicked
        click_btn.addEventListener("click",review)
        // creating a function which will be called when the button is clicked
        function review(){
            let finalans=courseInfo[3].code+": "+courseInfo[3].name;
            let p=document.createElement("p")
            p.innerHTML=finalans
            document.querySelector(".course-selection-bag").appendChild(p)
        }
    }
    else if(i==4)
    {
        let click_btn=document.getElementById("signup-btn"+i)
        // Adding click event listner in order to print the message when button is clicked
        click_btn.addEventListener("click",review)
        // creating a function which will be called when the button is clicked
        function review(){
            let finalans=courseInfo[4].code+": "+courseInfo[4].name;
            let p=document.createElement("p")
            p.innerHTML=finalans
            document.querySelector(".course-selection-bag").appendChild(p)
        }
    }
    else if(i==5)
    {
        let click_btn=document.getElementById("signup-btn"+i)
        // Adding click event listner in order to print the message when button is clicked
        click_btn.addEventListener("click",review)
        // creating a function which will be called when the button is clicked
        function review(){
            let finalans=courseInfo[5].code+": "+courseInfo[5].name;
            let p=document.createElement("p")
            p.innerHTML=finalans
            document.querySelector(".course-selection-bag").appendChild(p)
        }
    }
    else if(i==6)
    {
        let click_btn=document.getElementById("signup-btn"+i)
        // Adding click event listner in order to print the message when button is clicked
        click_btn.addEventListener("click",review)
        // creating a function which will be called when the button is clicked
        function review(){
            let finalans=courseInfo[6].code+": "+courseInfo[6].name;
            let p=document.createElement("p")
            p.innerHTML=finalans
            document.querySelector(".course-selection-bag").appendChild(p)
        }
    }
    else if(i==7)
    {
        let click_btn=document.getElementById("signup-btn"+i)
        // Adding click event listner in order to print the message when button is clicked
        click_btn.addEventListener("click",review)
        // creating a function which will be called when the button is clicked
        function review(){
            let finalans=courseInfo[7].code+": "+courseInfo[7].name;
            let p=document.createElement("p")
            p.innerHTML=finalans
            document.querySelector(".course-selection-bag").appendChild(p)
        }
    }

}



