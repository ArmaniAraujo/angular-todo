# Welcome to Angular-Todo!
Hello! This is my first (official) instruction guide for one of my application so feel free to fork it/recommend changes if you notice anything.

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
);
```
Alternatively, you can just create your own Users and Todos database, do yo thang bud!
Note: The application does not have a create-user functionality. I just made them myself. Make them yourself too. Creating a user was not the focus of the application so meh.

# Workspace Setup

1. Install NPM - https://nodejs.org/en/download
2. Install Angular - https://angular.io/guide/setup-local
3. Run ```npm install```
