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
    school_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    school_name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    phone_number VARCHAR(20),
    province VARCHAR(100),
    municipality VARCHAR(100),
    unit_code VARCHAR(50),
    established_year INT CHECK (established_year >= 1800 AND established_year <= EXTRACT(YEAR FROM CURRENT_DATE))
);
