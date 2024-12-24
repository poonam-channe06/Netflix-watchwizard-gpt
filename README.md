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