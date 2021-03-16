# CRUD - Book Store
This repository was created to simulate a Book Store. This project was built in NodeJS for the subject of Distributed Systems at Universidade São Judas Tadeu

## Install

This project was built with Yarn instead of npm, so to run this project, so to download you just need to click [here](https://yarnpkg.com/getting-started/install) and proceed with the installation.

After that, clone the repository and run the command yarn to install all dependencies.

---

## Run

To run this project, run the command yarn dev. This command will start the nodemon and you can use the CRUD through insomnia or postman

## Routes

Method: post
Route: /books
Description: This route is used to create a new book. Keep in mind that if the isbn is already in use, you'll be unable to create another book with this it.

Method: get
Route: /books
Description: This route is used to get all books that was created.

Method: put
Route: /books/:id
Description: This route is used to update the book title, keep in mind that you need to use the book's id as parameter.

Method: delete
Route: /books/:id
Description: This route is used to delete the book. Keep in mind that you need to use the book's id as a parameter.
