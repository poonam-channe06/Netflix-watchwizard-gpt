# What this project about

✅ GPT Search, using the latest GPT-3.5 Turbo API 🚀.

✅ Authentication - Sign Up, Log In, Sign Out.

✅ Form Handling, and Form validations

✅ Advanced Tailwind.

✅ useRef hook.

✅ covered the concept of Memoization.

✅ Build Multi-Language support.

✅ Advanced data handling with Redux Toolkit.

✅ Use of .env files to secure secret API keys


# Getting Started with Netflix GPT 

- Create React App
- Configured Tailwind css
- Header 
- Routing of App
- Login form 
- Sign up form
 When you put the email addres and passsowrd and the click on the Sign in button , you can see it will refresh the page,
 so we have to do something known as `e.preventDefault`
```<form onSubmit={(e)=>e.preventDefault()} className=" w-3/12 ">```

- Form validation
- UseRef Hook 
- Firebase Setup 
- Deploying our app to production 
- Create SignUp user Account 
- implement sign in user API 
- we created our redux store with userSlice
- Implemented sign out
- update profile
- BugFix: Sign up user displayName and profile picture updated 
- BugFix: if the user is not logged in Redirect/browse to login page and vice-versa 
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constant file 
- Register TMDB API and craete an app & get acces token 
- Get data from TMDB now playing movie list
<!-- ```
        - Main container
         -video background 
         - video title

        - Second container
         - movielist * n
         - cards * n
 ``` -->

- we have crreated custome hooke for nowPlayingMovies useMovieTrailer
- create movie slice
- Update store with movies 
- Planning for main container and secondary container 
- fetch data for trailer video 
- update the store with trailer video data 
- Embeded the Youtube video and make it auto play and mute 
- we added tailwind classes make it lok awesome
- build secondary component
- build the movie list ,movie card , found out image CDN
- Made the broswe page look better using tailwind css and we hve created the custom hooks
- create cutomes hooks 
- GPT Search Feature
- Make the Search multilingual - hindi, english , spanish, japanase [Bonus]
- Also make one option button for selection langauge add the functionality using redux store
- Gpt search bar handling using selector 
- Adding GPT feature in our app 
- Added GPT Search feature
- Adding GPT Movie sugestion feature 
- Understanding the memoization of data in our apps
- Making our app Mobile responsive 

# Features

- Login / Sign up 
    - sign in/sign up form
    - redirect to Browse page 
- Browse page (after authentication)
    - Header 
    - Main Movie 
        - Trailer in Background
        - Title & Description 
        - MovieSuggestions
            MovieList * n
- NetflixGPT
    - SearchBar
    - Movie Suggestions

