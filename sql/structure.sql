CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE parsing(
    id uuid not null default uuid_generate_v4(),
    version serial,
    date timestamp default now()
);
ALTER TABLE parsing ADD CONSTRAINT pk_parsing PRIMARY KEY (id);
CREATE UNIQUE INDEX uq_parsing_version ON parsing (version);


CREATE TABLE trend(
    id uuid not null default uuid_generate_v4(),
    parse_id uuid not null,
    title varchar(100) not null,
    description varchar(500) not null,
    language varchar(50) not null,
    stars integer not null,
    forks integer not null,
    index_order integer not null
);
ALTER TABLE trend ADD CONSTRAINT pk_trend PRIMARY KEY (id);
ALTER TABLE trend ADD CONSTRAINT fk_trend_to_parsing FOREIGN KEY (parse_id) REFERENCES parsing (id) ON DELETE CASCADE;

