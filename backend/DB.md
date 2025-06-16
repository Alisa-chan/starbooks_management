# Steps i did in the Database

**1. Create the user**
- CREATE USER dost WITH PASSWORD 'd0stregi0n1' CREATEDB;

**2. Create a database named "dost" owned by "dost"**
- CREATE DATABASE dost OWNER dost;

**3. Download uuid-ossp**
- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

**4. Grant all privileges on the table** 
- GRANT ALL PRIVILEGES ON TABLE users TO dost;
- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO dost;


### Quick start
- psql -U postgres -d dost

**Just in case psql stop**
- sudo systemctl start postgresql sudo systemctl enable postgresql

**Delete User**
- USER DROP ROLE username;

**Drop/Delete Table**
- DROP TABLE users;

**Show table**
- SELECT * FROM users;

**Delete Row in table**
- DELETE FROM name WHERE school_id = 1;
