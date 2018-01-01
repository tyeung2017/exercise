BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id bigserial PRIMARY KEY,
  username varchar(255) UNIQUE,
  password varchar(100),
  type varchar(50)
);

INSERT INTO users (username, password, type) VALUES ('admin', 'test', 'test');

COMMIT;