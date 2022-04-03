# Venue Listing and Review API Specifications

Create the backend for a venue directory website. The frontend/UI will be created in another repo. This API will allow venues to list thier information and allow bands to contact them for booking, review the venue, and ultimately use this site to book full tours on their own. All of the functionality below needs to be fully implemented in this project.

## Band Profiles

- List all bands in the database
  - Pagination
  - Select specific fields in result
  - Limit number of results
  - Filter by fields
- Search bands by radius from zipcode
  - Use a geocoder to get exact location and coords from a single address field
- Get single band
- Create new band profile
  - Authenticated users only
  - Must have role of "publisher" or "admin"
  - Only one band per publisher (admins can create more)
  - Field validation via Mongoose
- Upload a photo of Band (possibly multiple)
  - Owner Only
  - Photo will be uplaoded to local filesystem
- Update Band profile
  - Owner only
  - Validation on update
- Delete Profile & User
  - Owner only
- Bands have abilty to Post in discussion general forum
  - can delete their own posts
  - like and unlike post discussions
  - add & remove own comments to post discussions

## Venues Profiles

- List all venues in the database
  - Pagination
  - Select specific fields in result
  - Limit number of results
  - Filter by fields
- Search venus by radius from zipcode
  - Use a geocoder to get exact location and coords from a single address field
- Get single venue
- Create new venue
  - Authenticated users only
  - Must have role of "publisher" or "admin"
  - Only one venue per publisher (admins can create more)
  - Field validation via Mongoose
- Upload a photo of Venue (possibly multiple)
  - Owner Only
  - Photo will be uplaoded to local filesystem
- Update Venues
  - Owner only
  - Validation on update
- Delete Venue
  - Owner only
- Calculate the average rating from the reviews for a Venue

## Shows

- List all shows for venues
- List all show in general
  - Pagination, filtering, etc
- Get single show
- Create a new show
  - Authenticated users only
  - Must have the role "publisher" or "admin"
  - Only the owner or an admin can create a show for a venue
  - Publishers can create multiple shows
- Update show
  - Owner only
- Delete show
  - Owner only

## Reviews

- List all reviews for a venues
- List all reviews in general
  - Pagination, filtering, etc
- Get a single review
- Create a review
  - Authenticated users only
  - Must have the role "user" or "admin" (no publishers)
- Update review
  - Owner only
- Delete review
  - Owner only

## Users & Authentication

- Authentication will be ton using JWT/cookies
  - JWT and cookie should expire in 30 days
- User registration
  - Register as a "user" or "publisher"
  - Once registered, a token will be sent along with a cookie (token = xxx)
  - Passwords must be hashed
- User login
  - User can login with email and password
  - Plain text password will compare with stored hashed password.
  - Once logged in, a token will be sent along with a cookie (token = xxx)
- User logout
  - Cookie will be sent to set token = none
- Get user
  - Route to get the currently logged in user (via token)
- Password reset (lost password)
  - User can request to reset password
  - A hashed token will be emailed to the users registered email address
  - A put request can be made to the generated url to reset password
  - The token will expire after 10 minutes
- Update user info
  - Authenticated user only
  - Separate route to update password
- User CRUD
  - Admin only
- Users can only be made admin by updating the database field manually

## Security

- Encrypt passwords and reset tokens
- Prevent NoSQL injections
- Add headers for security (helmet)
- Prevent cross site scripting - XSS
- Add a rate limit for requests of 100 requests per 10 minutes
- Protect against http param polution
- Use cors to make API public (for now)

## Documentation

- Use Postman to create documentation
- Use docgen to create HTML files from Postman
- Add html files as the / route for the api

## Deployment (Digital Ocean or AWS)

- More info to come

## Code Related Suggestions

- NPM scripts for dev and production env
- Config file for important constants
- Use controller methods with documented descriptions/routes
- Error handling middleware
- Authentication middleware for protecting routes and setting user roles
- Validation using Mongoose and no external libraries
- Use async/await (create middleware to clean up controller methods)
- Create a database seeder to import and destroy data
