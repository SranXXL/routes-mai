CREATE TABLE account (
    account_id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    login VARCHAR(100) UNIQUE,
    password VARCHAR(100) NOT NULL,
    creation_date TIMESTAMP NOT NULL,
    last_login_date TIMESTAMP,
    is_active boolean NOT NULL,
    account_external_id INTEGER NOT NULL
);
