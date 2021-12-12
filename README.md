# REST-APIs---User-ID-s

Create a REST API using the data in data. Your API needs to be fully RESTful with all CRUD routes (create, read, update, delete).

Remember to break down the task and tackle it bit by bit.

Start by looking at the data and familiarizing yourself with how it's structured.
Then write the functions in your models that will interact with the data, perform the CRUD action, and return the specific user object or array from the data.
Then use those functions to write your routes in app.js. Test each route by sending requests via Postman as you write them.
If you are still fuzzy on Postman, you can read more about it here.

Optional extensions
See if you can implement a generateID function in your models/users.js file, and use it in your createUser function.

/**
 * BONUS:
 * This function could be used when creating new users
 * It would ensure that new IDs are valid and follow our pattern
 */
function generateID() {
  // Look through the users list
  // Find the first ID number missing, or the next number in the sequence
  // return that number
}
Once you've finished your API and thoroughly tested via Postman to make sure each route is working and you've made your generateID function, keep developing! Think through what ideas you can come up with to improve functionality.

This can include:

Making a front end to consume your data
Additional routes that include searching the data using queries
Implementing middleware (start with a simple logger, and then explore what else you can add).
