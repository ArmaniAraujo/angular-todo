# Welcome to Angular-Todo!
Hello! This is my first (official) instruction guide for one of my application so feel free to fork it/recommend changes if you notice anything.

![](https://github.com/Your_Repository_Name/Your_GIF_Name.gif)


# Database Setup
1. Install MySQL Server and/or MySQL Workbench
	- https://dev.mysql.com/downloads/installer/
	- Personally, I installed Workbench as well for the ease of use (GUI), but if you are savy enough, you could make do with just the Server application and using Spring.
3. Set up the database
	* If you want to have a starter database, you can use this code below I created with a simple set up to store just Users for now. I will later update it once I have decided on the structure to store their todo list content.
 ```sql
CREATE TABLE Users (
    id			int				UNIQUE	NOT NULL	AUTO_INCREMENT,
    name			varchar(50)			NOT NULL,
	username		varchar(225)			NOT NULL,
    hashed_password	varchar(72)			NOT NULL,
    salt			varchar(72)			NOT NULL,
    email		varchar(225),
    user_image		varchar(225)
	PRIMARY KEY (username)
);
```

```sql
CREATE TABLE Todos (  
  tid 			int 		NOT NULL 	AUTO_INCREMENT,  
  item 			varchar(255) 	NOT NULL,  
  uid 			varchar(255) 	NOT NULL,  
  PRIMARY KEY (tid)  
);
```

Alternatively, you can just create your own Users and Todos database, do yo thang bud!
Note: The application does not have a create-user functionality. I just made them myself. Make them yourself too. Creating a user was not the focus of the application so meh.

# Workspace Setup
## Frontend
1. Install NPM - https://nodejs.org/en/download
2. Install Angular - https://angular.io/guide/setup-local
3. Run ```npm install```
4. Run the application


## Backend
1. Install Java - https://www.oracle.com/java/technologies/downloads/
2. Install Maven - https://maven.apache.org/download.cgi
3. I recommend using IntelliJ for an IDE but its up to you - https://spring.io/guides/gs/intellij-idea/
4. Ensure you have ${SPRING_DATASOURCE_PASSWORD} entered into your environment variables (or just change it in the application.properties file (whatever you want to do)
5. Run ```mvn install``` to install all dependencies
6. Run the application

## Webpage
- The frontend application runs on PORT 4200, backend runs on PORT 8080, database runs on PORT 3306. You can always change these accordingly.
- Please ensure you have users created, or run the following commands in your database before you get started.
