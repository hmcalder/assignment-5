# assignment-5
##  TV Show Gallery

## Project Description 

This application allows users to search for any TV show and using TVmaze's API, give them up to 10 shows that match their search, and display the shows premiere date, genres, rating, summary, and cast members. Users can also get more information on each show by clicking on the TV shows name viewing a separate page with additional information. 

## How to Run my Project

1. Download or clone the project repository in gitHub.
2. Open your project folder in Visual Studio Code. 
3. Open your terminal inside of VS code. 
4. Run the command, npm install, to install the dependencies for this application.
5. Then run the command, npm run dev, to start the development server and get your projects link.
6. Click on that link by holding typing command and select and open your localHost URL.

## React Concepts Used 

| React Concept   | Where I used it     | How I used it     |
-------------------------------------------------------------
|Components and Props | App.jsx, Search.jsx, ShowList.jsx, ShowCard.jsx, ShowDetail.jsx | I divided the application into seperate components so each one hadles a different part of the website. Props were used to pass information between compnents. That includes search values and TV show data. |
-------------------------------------------------------------------------------------------------------------------------------------------------
|Lists and Keys | ShowList.jsx, ShowDetail.jsx | I used map() to display TV shows and cast members and gave them each a special key. |
-------------------------------------------------------------------------------------------------------------------------------------------------
|Conditional Rendering | SearchStatus.jsx, ShowCard.jsx, ShowDeail.jsx | I displayed information depending on if the information was loading, missing, or null. 
-------------------------------------------------------------------------------------------------------------------------------------------------
Conrolled Form | SearchFrom.jsx, App.jsx | I used value and onChange to dictate the search input and useState to keep track of what the user types.
-------------------------------------------------------------------------------------------------------------------------------------------------
|State | App.jsx, ShowCard.jsx, ShowDetails.jsx | I used UseState to store the search results, cast members, loading staes and error. | 
-------------------------------------------------------------------------------------------------------------------------------------------------
|Effects and fetch | App.jsx, ShowCard.jsx, ShowDetails.jsx | I used Use Effect and fetch to get information from the TVmaze API. |
-------------------------------------------------------------------------------------------------------------------------------------------------
|Lifted State | Ap.jsx, SearchForm.jsx, ShowList.jsx | I kept my information in App.jsx and passed it to other components using props. That way they could share data.
-------------------------------------------------------------------------------------------------------------------------------------------------
|Routing | Main.jsx, App.jsx, ShowCard.jsx, ShowDetail.jsx | I used BrowserRouter, Routes, Link, and useParams to navigate between the gallery and individual show pages. |
-------------------------------------------------------------------------------------------------------------------------------------------------

## Reflection 

While creating this project, I found that displaying the information and creating new HTML elements was much easier than vanilla JavaScript. I liked being able to create functions and components that I could reuse throughout the application rather than having to copy and paste the same code. This made organizing the website much simpler because each component could handle a different part of my application. I also found that if/else statements made sense to me and helped with the logic and when certain elements should be displayed.


Two things that I struggled with were useEffect and Routing. I had trouble understanding when useEffects would run and how the dependency array worked. Routing also proved to be difficult because I had to understand how to connect different pages and retrieve a show's ID from its URL.


I kept my search state in App.jsx so multiple components could access the information through props. I kept the cast state inside ShowCard.jsx and ShowDetail.jsx because each component needed to manage its own cast information.


Overall, this project helped me to figure out what parts of React I understand and which parts I need to sit down and work on.


## AI-Use Acknowledgment 

I used ChatGPT as a learning resource while completing this assignment. I used it to explain the concept of React, routing, and passing information between components. It helped me identify where I had written the wrong code as well as give me naming ideas to better track each variable. I used it to help me debug as well as give me CSS suggestions on how my page would look professional. 

