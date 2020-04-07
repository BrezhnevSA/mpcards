# mpcards

>Prototype version 0.1

## Description

A tool for metaphorical and other cards.

---

## Setup development environment

In your system should be installed:
- NodeJS, version >= 10.\*.\*;
- npm, version >= 6.\*.\*.

## Frontend: before first bulding

To setup frontend dependencies you should run command `npm install` in root folder.

---

## Building

### Frontend

For building project:
- Run command `npm run start`. Navigate to URL `http://localhost:3000/`. The app will automatically reload if you change any of the source files (**these way only for testing frontend without normal backend**).

> For setting port of API you must change base URL in `config/config.js` file:
~~~~javascript
baseUrl: 'http://localhost:3001'
~~~~

### Database

Now application using the json-server with embedded DB, so all data stores in `db.json` file in JSON format.

### Backend

Now simple json-server, so run next command:
~~~~ bash
json-server --watch db.json --port 3001
~~~~