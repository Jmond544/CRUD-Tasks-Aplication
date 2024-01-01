-- Table tasks

CREATE TABLE tasks (
    id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
    user_id BINARY(16) NOT NULL,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(300),
    done BOOLEAN NOT NULL DEFAULT 0,
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Table users

CREATE TABLE users (
    id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
    username VARCHAR(200) NOT NULL UNIQUE,
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL
);