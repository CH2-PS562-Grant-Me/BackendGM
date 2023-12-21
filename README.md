# Grant Me Backend
This is a JavaScript code built using Node.js, so make sure you have Node.js installed on your system.
This service is using MySQL as the database, so you also have to run MySQL on your system.

## Instalation 
```bash
npm install
```
### Clone Repository
```bash
git clone https://github.com/CH2-PS562-Grant-Me/BackendGM.git
```
In the root directory of this project, make a new file named .env to provide the configurations needed.
Provide these details in the .env file:
```bash
# Fill "" with your database username ex: root
DB_USERNAME=""
# Fill "" with your database name 
DB_NAME=""
# Fill "" with your database password
DB_PASSWORD=""
# Fill "" with your database host name ex: localhost
DB_HOSTNAME=""
# No need to change this
ACCESS_TOKEN="secret"
# Fill "" with the url of the predict api ex: http://localhost:5000
URL_MODEL=""
# Fill "" with the project_id value from the grant-me-credentials.json file
GCLOUD_PROJECT= ""
# Fill "" with you bucket name on cloud storage
GCS_BUKCET=""
```
Before create
Start your the application at http://localhost:8080/:
```bash
npm start
```
To create Scholarships and Articles data
```bash
npm run seed:all
```
You can check the public API documentation that we used for the mobile app <a href= "https://documenter.getpostman.com/view/26660252/2s9YkrZeFi">here</a>.