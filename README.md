# Hiring Channel App

## INTRO
Here is a simple app called hiring-app-express-api,an app for connecting between company and engineer on hiring transactions.

## TOOLS
1. VS Code
2. Postman
3. Chrome (for phpmyadmin)

## DATA
1. Depedencies
2. Endpoints
3. How to filter



### Dependencies
1. bcryptjs : 2.4.3
2. body-parser : 1.19.0
3. cors : 2.8.5
4. crypto: 1.0.1
5. dotenv: 8.2.0
6. express: 4.17.1
7. helmet: 3.21.2
8. jsonwebtoken: 8.5.1
9. morgan: 1.9.1
10. mysql: 2.17.1

### Endpoints

#### 1. get("/") : Homepage
#### 2. get("/company") : Companies List
#### 3. get("/engineer") : Engineers List
#### 4. get("/skill") : Skill List
#### 5. get("/showcase") : Showcase List
#### 6. get("engineer/filter") : Filter engineer List

### How to filter
1. Get /engineer/filter
2. Fill in the body,what do you want to filter
3. Default value of order is ASC
