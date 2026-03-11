## README.md

## RESTful API Activity – Angel Rose Dela Torre

### Best Practices Implementation

---

### 1. Environment Variables

**Why did we put BASE_URI in .env instead of hardcoding it?**

*Answer:*
We placed BASE_URI in the .env file to avoid hardcoding values inside the source code. This improves security and makes the application easier to maintain. If the base URL changes (for example, from development to production), we can update it in the .env file without modifying the code itself.

---

### 2. Resource Modeling

**Why did we use plural nouns (e.g., /dishes) for our routes?**

*Answer:*
We used plural nouns like /dishes because the endpoint represents a collection of dish resources. Each dish is an individual item within this collection, which can be accessed using /dishes/:id. This follows RESTful API standards and makes the API structure clear and consistent.

---

### 3. Status Codes

**When do we use 201 Created vs 200 OK?**

*Answer:*
201 Created is used when a new dish is successfully added to the system using a POST request.
200 OK is used when a request is successful but does not create a new resource, such as retrieving dishes with a GET request, updating a dish, or deleting a dish.

---

-Why is it important to return 404 instead of just an empty array or a generic error?

*Answer:*
Returning a 404 Not Found status code clearly indicates that the requested dish does not exist. This is important because it provides accurate feedback to the client, improves error handling, and follows proper HTTP standards instead of returning misleading or unclear responses.

---

### 4. Testing
![Screenshot](./image.png)

**Secure API**

1. Authentication vs Authorization

Answer:
Authentication checks if the user is really who they say they are. In our code, this happens when the user logs in with their email and password. If the credentials are correct, the system logs them in and gives a token.

Authorization happens after login. It checks what the user is allowed to access. The protect middleware makes sure only logged-in users can use protected routes.

2. Security (bcrypt)

Answer:
We used bcryptjs to hash passwords instead of saving them as plain text. This makes passwords safer because the real password is not stored in the database. Even if someone accesses the database, they will only see the hashed version of the password.

3. JWT Structure

Answer:
The protect middleware gets the JWT from the request header and checks if it is valid. If the token is correct, it finds the user in the database and allows access to the protected route. If the token is missing or invalid, the request is denied.