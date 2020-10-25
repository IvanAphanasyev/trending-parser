CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE trend(
    id uuid not null
);
ALTER TABLE trend ADD CONSTRAINT pk_trend PRIMARY KEY (id);