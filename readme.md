# JWT Authentication with Node.js
# Deployed URL
```markdown
https://task-11-user-authentication.onrender.com/api/auth/
```
## Setup
1. Clone the repository
2. Run `npm install`
3. Set up MongoDB and configure `.env` file
4. Run `npm start`

## API Endpoints

### POST /api/auth/register
```markdown
https://task-11-user-authentication.onrender.com/api/auth/register
```
- Request body: `{ "username": "user", "email": "user@example.com", "password": "password123" }`
- Response: `{"message": "User registered successfully"}`

### POST /api/auth/login
```markdown
https://task-11-user-authentication.onrender.com/api/auth/login
```
- Request body: `{ "email": "user@example.com", "password": "password123" }`
- Response: `{"token": "jwt_token_here"}`

### GET /api/auth/me (protected)
```markdown
https://task-11-user-authentication.onrender.com/api/auth/me
```
- Headers: `Authorization: Bearer <JWT Token>`
- Response: `{"username": "user", "email": "user@example.com"}`
