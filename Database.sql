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




-- Initial 
CREATE TABLE AddMou (
    id SERIAL PRIMARY KEY,
    institutional_name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    recipient_name VARCHAR(100),
    institution_type VARCHAR(255),
    i_code VARCHAR(50),
    sex VARCHAR(20),
    email_add VARCHAR(255) NOT NULL UNIQUE,
    contact_number VARCHAR(20), 
    province VARCHAR(100),
    date_of_deployment DATE NOT NULL,
    year_distributed_number INT CHECK (
        year_distributed_number >= 1800 
        AND year_distributed_number <= EXTRACT(YEAR FROM CURRENT_DATE)
    )
);




-- file initial 
CREATE TABLE files (
    id SERIAL PRIMARY KEY,
    name_id INTEGER NOT NULL REFERENCES name(id) ON DELETE CASCADE,
    filename TEXT NOT NULL,
    filetype TEXT,
    filepath TEXT,        -- For local storage 
    fileurl TEXT,         -- For cloud storage 
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
