INSERT INTO Cities(name, x, y)
VALUES('Москва', 55.4507, 37.3656);

INSERT INTO Cities(name, x, y)
VALUES('Санкт-Петербург', 59.9311, 30.3609);

INSERT INTO Cities(name, x, y)
VALUES('Орёл', 52.0515, 113.4712);

INSERT INTO Cities(name, x, y)
VALUES('Нижний Новгород', 52.0515, 113.4712);

INSERT INTO Cities(name, x, y)
VALUES('Воронеж', 52.0515, 113.4712);

INSERT INTO Cities(name, x, y)
VALUES('Чита', 52.0515, 113.4712);

-- INSERT INTO Cities(name, x, y)
-- VALUES('Архангельск', 52.0515, 113.4712);

-- INSERT INTO Cities(name, x, y)
-- VALUES('Екатеринбург', 52.0515, 113.4712);

-- INSERT INTO Cities(name, x, y)
-- VALUES('Уфа', 52.0515, 113.4712);

-- INSERT INTO Cities(name, x, y)
-- VALUES('Омск', 52.0515, 113.4712);

-- INSERT INTO Cities(name, x, y)
-- VALUES('Якутск', 52.0515, 113.4712);

-- INSERT INTO Cities(name, x, y)
-- VALUES('Томск', 52.0515, 113.4712);

-- INSERT INTO Cities(name, x, y)
-- VALUES('Калининград', 52.0515, 113.4712);

-- INSERT INTO Cities(name, x, y)
-- VALUES('Подольск', 52.0515, 113.4712);

-- INSERT INTO Cities(name, x, y)
-- VALUES('Лондон', 52.0515, 113.4712);

-- INSERT INTO Cities(name, x, y)
-- VALUES('Хогвартс', 52.0515, 113.4712);


INSERT INTO Transport(name) VALUES('Car');
INSERT INTO Transport(name) VALUES('Bus');
INSERT INTO Transport(name) VALUES('Train');
INSERT INTO Transport(name) VALUES('Airplane');

INSERT INTO Carrier(name) VALUES('Аэрофлот');
INSERT INTO Carrier(name) VALUES('S7');
INSERT INTO Carrier(name) VALUES('РЖД');
INSERT INTO Carrier(name) VALUES('BlaBlaCar');
INSERT INTO Carrier(name) VALUES('ИП Аликулиев Руслан Заманович');
INSERT INTO Carrier(name) VALUES('ИП Бородина Лайма Витаутовна');
INSERT INTO Carrier(name) VALUES('ИП Коновалова Любовь Александровна');
INSERT INTO Carrier(name) VALUES('Nordwind Airlines');
INSERT INTO Carrier(name) VALUES('ВОПЛОЩАЙ МЕЧТЫ');
INSERT INTO Carrier(name) VALUES('ИП Барсуков');

-- Москва - СПб
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 2, 1, 4, 9, 1000, '01:20');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(2, 1, 1, 4, 8.5, 1100, '23:50');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 2, 2, 5, 8, 1129, '14:00');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(2, 1, 2, 5, 8, 1259, '14:00');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 2, 3, 3, 8.5, 1154, '00:39');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(2, 1, 3, 3, 9.3, 1364, '00:20');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 2, 4, 1, 1.3, 1399, '11:05');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(2, 1, 4, 1, 1.3, 1399, '11:25');

-- Москва - Орел
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 3, 1, 4, 4.5, 500, '06:00');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(3, 1, 1, 4, 5.3, 600, '07:40');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 3, 2, 6, 7.3, 1050, '12:10');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(3, 1, 2, 6, 7.3, 935, '10:45');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 3, 3, 3, 4, 1009, '03:54');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(3, 1, 3, 3, 5.5, 1438, '01:27');

-- Москва - Нижний Новгород
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 4, 1, 4, 7, 500, '07:10');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(4, 1, 1, 4, 7, 1000, '23:10');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 4, 2, 7, 7, 950, '20:00');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(4, 1, 2, 7, 6.5, 849, '06:30');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 4, 3, 3, 3.5, 888, '06:35');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(4, 1, 3, 3, 7, 1127, '03:34');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 4, 4, 1, 1.3, 1800, '13:10');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(4, 1, 4, 1, 1.3, 1800, '05:00');

-- СПб - Нижний Новгород
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(2, 4, 4, 8, 1.6, 3301, '07:05');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(4, 2, 4, 8, 1.6, 3500, '10:20');

-- Москва - Воронеж
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 5, 1, 4, 6.5, 850, '01:10');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(5, 1, 1, 4, 7, 1000, '02:00');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 5, 2, 9, 7.5, 1020, '08:00');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(5, 1, 2, 9, 8, 847, '08:30');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 5, 3, 3, 8.8, 1439, '00:35');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(5, 1, 3, 3, 6.5, 610, '08:14');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(1, 5, 4, 2, 1.3, 1650, '18:35');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(5, 1, 4, 2, 1.3, 1650, '08:10');

-- СПб - Воронеж
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(2, 5, 4, 8, 2, 1999, '12:15');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(5, 2, 4, 8, 2, 1999, '17:10');

-- Орел - Воронеж
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(3, 5, 1, 4, 4.2, 300, '15:20');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(5, 3, 1, 4, 5, 600, '17:25');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(3, 5, 2, 10, 7.5, 970, '15:10');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(5, 3, 2, 10, 6, 748, '22:40');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(3, 5, 3, 3, 8.15, 752, '04:15');
INSERT INTO Journeys(id_city1, id_city2, id_transport, id_carrier, time, cost, departure_time)
VALUES(5, 3, 3, 3, 8.5, 1218, '12:30');
