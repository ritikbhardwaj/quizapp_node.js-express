# Online Quiz App 
Made using Express.js running on Node.js and Mysql

![](public/images/file.gif)

## Technology

* Express.js - Server side framework
* EJS - Server side templating engine
* Sequelize - versatile ORM can be used for (postgres, sqlite, Microsoft SQL, mysql)
* Jquery - Front end library for DOM manipulation

## Directory structure
```
-- bin
    -- www
-- config
    -- config.json
-- models
    -- questions.js
-- public
    -- images
    -- javascripts
        -- login.js
        -- quiz.js
    -- stylesheets
        -- login.css
        -- quiz.css
-- routes
    -- index.js
-- utils
-- views
    -- login.ejs
    -- quiz.ejs
-- app.js
-- database.js
-- package-lock.json
-- package.json
```

## How to run?

```bash
npm install nodemon -g 
nodemon 
```
or
```
npm start
```