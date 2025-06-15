-- DATABASE Schema for Dost
CREATE DATABASE dost;


CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    user_role VARCHAR(50) NOT NULL DEFAULT 'user' -- 'admin' or 'it' 
);


-- Alterd the database 
ALTER TABLE users ADD COLUMN user_role VARCHAR(50) NOT NULL DEFAULT 'user';


-- Normal user
INSERT INTO users (user_email, user_password, user_role)
VALUES ('testing@gmail.com', 'Test123', 'user');

-- Admin
INSERT INTO users (user_email, user_password, user_role)
VALUES ('admin@gmail.com', 'admin123', 'admin');

-- IT Super Admin
INSERT INTO users (user_email, user_password, user_role)
VALUES ('it@gmail.com', 'it123', 'it');


--Still not encrypted just testing yet