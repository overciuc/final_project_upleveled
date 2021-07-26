# **Hood Review**

**designed by:**
Olga Verciuc

**Description:**
Hood Review is a service that allows users to leave reviews about their district in the city of Vienna.
One of the important aspects of moving to a new house or appartment is to know what kind of area it is. Are the schools nearby? Are there hospitals or clinics in a close vicinity? How long will it take me in the morning to get to work? These are just a few questions I was asking myself when looking for a new place to live. And it is even more important when you have kids.
That is the reason behind making Hood Review, to help get a bit of feedback from real people who live in the area that you might be intersted in moving to.

***



**Landing Page**
Anyone can see the reviews left by users based on one of 8 criterias. 
![1 Home_screen](https://user-images.githubusercontent.com/81855159/126960067-1a8f840c-13d4-41c8-be13-2347a67e6ff8.png)



**Landing Page with review popup:**
Click on a map marker to see a popup with comments and ratings. The popup shows Average rating from multiple users for this criteria for this address, as well as individual rating and comments by each user.
Home, Blog, About and Contact pages can be accessed without registration.
![2 home_page_popup](https://user-images.githubusercontent.com/81855159/126960378-22647aec-33e9-4234-b1eb-890af4eead38.png)



**Signup Page:**
In order to write a review, users need to register and make an account. The Nav bar is dynamic and the buttons will change if there is a logged in user or not.
![3 signup_screen](https://user-images.githubusercontent.com/81855159/126960436-391e6c1d-ac2a-439f-85c4-a97b3c1fca3b.png)



**User profile page:**
Here registered users can see their details and can edit first name, last name and email address. Or delete an account.
![4 user_profile_screen](https://user-images.githubusercontent.com/81855159/126960865-21f9fea8-f2fd-40d9-a441-3f1883536cdb.png)



**User reviews page:**
Here users can see all of their reviews, can create, edit or delete a review.
![5 user_reviews_screen](https://user-images.githubusercontent.com/81855159/126960936-6fe55119-b409-46ae-9971-5925ff639946.png)



**Single review page:**
For the new review user needs to select a district for which this review will be made. Street name and house number are optional. Use slider to set the rating from 1-10 on the 8 provided criterias. Writting a comment for each criteria is optional, but greately appreciated.
The street name and house number will converted to latitude and longitude using Geocoding. Once the review is saved, it will appear on the user reviews page and as a marker on the map. 



![6 review_screen](https://user-images.githubusercontent.com/81855159/126961056-a621111f-f79b-4b54-95a3-509d904c6529.png)



**Blog page:**
This page is accessible by anyone. Shows a list of blog posts with images.
![7 blog_screen](https://user-images.githubusercontent.com/81855159/126961961-acf517f1-e5a7-41ec-9a52-79b03152b8eb.png)



**Blog page with popup:**
By clicking on Read More ... a popup appears with extended text.
![8 blog_popup](https://user-images.githubusercontent.com/81855159/126962027-b94ac04a-455a-48dd-8c49-7462b6f6fb8c.png)



**About Page:**
Page with information about the Hood Review service and it's developer.
![9 about_screen](https://user-images.githubusercontent.com/81855159/126962254-d86e8b3c-cd11-439c-aa86-c0a4fa0a73c5.png)



**Contact Page:**
Contact page with a simple form, that is able to send emails with a custom domain setup.
![10 contact_screen](https://user-images.githubusercontent.com/81855159/126962514-e213e675-d98f-49da-8662-5b49f6804bf6.png)



***


**Technologies used:**
1. Next.js for server-side-rendering and Front End development.
2. PostgreSQL database
3. Jest and Cypres for E2E and Unit Testing.
4. Ley for data migration.
5. [Positionstack](https://positionstack.com/) for Geocoding.
6. [Namecheap](https://www.namecheap.com/) for domain registration.
7. [SendGrid](https://sendgrid.com/) for email service.
8. [React Leaflet](https://leafletjs.com/examples/choropleth/) for the map, markers, polygons.



***


**Setup Instructions:**
1. $ git clone the GitHub repo onto your local machine.
2. Install Next.js by running `yarn add create-next-app` or `npx create-next-app`.
3. Similarly, install PostgreSQL for database function.
4. Install required dependencies.
5. Run `yarn dev` to start the server and go to the proposed host url.
6. You are in the project..yippi. :)


***


**Heroku Deployment:**
***Setup Heroku:***
1. Sign up for Heroku: https://signup.heroku.com/
2. Create a new App
3. Choose a name and select the "Europe" Region
4. Click on the button in the middle called "Connect to GitHub"
5. Search for your repository in the search box at the bottom of the page and click on the "Connect" button
6. Click on the button for "Enable Automatic Deploys"
7. Go back to the Overview tab and click on "Configure Add-On"
8. Search for "Postgres" and select "Heroku Postgres" from the results

Everything should work from there. Enjoy!!








