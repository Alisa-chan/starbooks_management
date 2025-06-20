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
CREATE TABLE name (
    id SERIAL PRIMARY KEY,
    INSTITUTIONAL_NAME VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    RECIPIENT_NAME VARCHAR(100),
    INSTITUTION_TYPE VARCHAR(255),
    I_CODE VARCHAR(50),
    SEX VARCHAR (20)
    EMAIL_ADD VARCHAR(255) NOT NULL UNIQUE,
    CONTACT_NUMBER VARCHAR(20), 
    PROVINCE VARCHAR(100),
    DATE_OF_DEPLOYMENT DATE NOT NULL,  -- <== (YYYY-MM-DD)
    YEAR_DISTRIBUTED_NUMBER INT CHECK (established_year >= 1800 AND established_year <= EXTRACT(YEAR FROM CURRENT_DATE))
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
