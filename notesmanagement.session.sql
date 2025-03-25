-- @block
CREATE TABLE User(
    user_id INT auto_increment,
    email VARCHAR(255) NOT NULL UNIQUE,
    _password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);
CREATE TABLE Note(
    id INT auto_increment,
    user_id INT NOT NULL,
    title NVARCHAR(255),
    content TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
);
Drop TABLE note;
-- @block
Drop TABLE users;
-- @block
SELECT *
FROM users;