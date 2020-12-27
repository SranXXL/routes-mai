CREATE TABLE Cities
(
	id SERIAL PRIMARY KEY,
	name TEXT,
	x DOUBLE PRECISION,
	y DOUBLE PRECISION
);

CREATE TABLE Transport
(
	id SERIAL PRIMARY KEY,
	name TEXT
);

CREATE TABLE Carrier
(
	id BIGSERIAL PRIMARY KEY,
	name TEXT
);

CREATE TABLE Delays
(
	id_city1 BIGINT REFERENCES Cities (id),
	id_city2 BIGINT REFERENCES Cities (id),
	time_delay TIME,
	time_start_delay TIME
);

CREATE TABLE Journeys
(
	id SERIAL PRIMARY KEY,
	id_city1 BIGINT REFERENCES Cities (id),
	id_city2 BIGINT REFERENCES Cities (id),
	id_transport BIGINT REFERENCES Transport (id),
	id_carrier BIGINT REFERENCES Carrier (id),
	time DOUBLE PRECISION,
	cost DOUBLE PRECISION,
	departure_time TIME
);
