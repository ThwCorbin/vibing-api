
## Vibing API
This API is the database for all information on the Vibes website

- Link to API https://vibing-api.herokuapp.com/

## Prerequisites
- API
- Express
- Mongoose
- Models
- Restful routing
- Node
## API Routes
USE CRUD
- Create: Create a new player 
- Read: find an existing player or team
- Update: update the name of a 
- Delete: deleting an unwanted player
- Check all CRUD methods using Postman (www.postman.com OR download at https://www.postman.com/downloads/)

### Define routes here:

#### GET 
- "/home/"
- "/home/inspirations/" List of all inspirational quotes
- "/home/posts/" List of all posts
- "/home/users/" List of all users

#### POST 
- "/home/inspirations/" Add to inspirational quotes
- "/home/posts/" Add to posts
- "/home/users/" Add to users

#### PUT 
- "/home/inspirations/:id" Edit an inspirational quote by id
- "/home/posts/:id" Edit a post by id
- "/home/users/:username" Edit a post by username

#### DELETE 

- "/home/inspirations/:id" Delete an inspirational quote by id
- "/home/posts/:id" Delete a post by id
- "/home/users/:username" Delete a post by username


