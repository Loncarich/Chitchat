# Chitchat
Simple Messaging App

##To Run
1. Run npm install
2. Run webpack --watch
3. Run npm start
4. Visit http://localhost:3000 in your Chrome browser. (Experiencing issues in Safari- likely due to Flexbox)

## About the App and Technologies Used
To work the app, you first select your username from the dropdown at the left. From there, you can navigate between different people in the dropdown to the left and send them messages using the chat box on the right. The App has full socket functionality and users will be updated in real-time with messages. Moreover, the app persists state when the browser is refreshed

It's built with React, Node, Express, and Socket.io.

## Thoughts, Reflections, What I'd Do Differently, and What'd I'd Do With More Time
Again, I found my biggest obstacle to be focusing too closely on higher-level concepts/design choices for the app. As I began creating the app, I would run into issues like how are we going to identify which user is sending these messages? We don't have a login or authentication.

If I were to do the project again, I would spend more time mapping out these design choices and definitively make and scale down these design choices in the beginning so as the project can be easily completed in the 24 hours. Also, if I were to do the project again, I would used Firebase for socket functionality and data storage and I would use some sort of Flux architecture on the front-end (probably Redux). I initially avoided Firebase as I didn't want to invest too much of the limited 24 hours trying to dig through the Firebase docs. However, with the time I spent connecting/placing the sockets and manually working with the data on the server, it would've been more efficient just to buckle down and go with Firebase. Moreover, with the number of props being passed down from parent to children components and the number of levels these props are being passed through, it would be about time to start considering using Redux or some sort of Flux Store in the app.

Given more time, of course I'd work to prove the UI. Right now, it's barely MVP and needs to be improved. I also wanted to implement some sort of search function for the users. As you type in a username into the search bar, the app would immediately begin to bring up usernames with letters matching your search query i.e. you want to find 'ann' so, as you type 'a', all usernames with first letter 'a' are rendered and as you type 'n', all users with 'an' are rendered. Lastly, I would refactor in Firebase.



