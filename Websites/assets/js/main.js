 // Contact
 function on() {
     document.getElementById("overlay").style.display = "block";
 }

 function off() {
     document.getElementById("overlay").style.display = "none";
 }

 function myFunction() {
     var x = document.getElementById("myTopnav");
     if (x.className === "topnav") {
         x.className += " responsive";
     } else {
         x.className = "topnav";
     }
 }


 // Add more projects functions
 var projects = [
     `<h2><a href="courses/course.html" target="_blank"> Add & More fields</a></h2>
    <p style="text-align:left">The project will allow the user to click on the plus sign(+) 
    to add more course fields and click on the minus sign(-) to remove course field.</p>
    <div class="flex-container">
        <div class="container-box">
            <div class="img-shadow">
                <img src="assets/img/course.png" width="300" height="250" alt="">
                <P>March 11th, 2018</P>
            </div>
        </div>

        <div class="container-box">
            <h2>Idea</h2>
            <p>Javascript is a power script language that allows developers to make their websites more interactive. 
            The idea was to build functions using javascript that can add more or remove HTML tags.</p>
            <p> <span>Tools: </span> HMTL, Boostrap, JavaScript</p>
        </div>
    </div>
    <br>
    <hr>
    <br>`,

     `<h2><a href="form/index.php" target="_blank"> Contact Form</a></h2>
    <p style="text-align:left">This contact form does not record any information, it is a mock contact form that validation user input value before letting the user submit the form. </p>
    <div class="flex-container">
        <div class="container-box">
            <div class="img-shadow">
                <img src="assets/img/form.png" width="300" height="250" alt="">
                <P>March 1st, 2018</P>
            </div>
        </div>

        <div class="container-box">
            <h2>Idea</h2>
            <p>The idea was to learn to handle form validations. I'm always curious about how online form is able to prevent the user from filling from the wrong way.</p>
            <p> <span>Tools: </span> HMTL, CSS, PHP, JavaScript</p>
        </div>
    </div>
    <br>
    <hr>
    <br>`
 ];

 function addProjects() {

     var newfield = '';

     for (let i = 0; i < projects.length; i++) {
         newfield += projects[i];
     }

     document.getElementById('projects').innerHTML += newfield;

     document.getElementById('myBtn').disabled = true;
 }