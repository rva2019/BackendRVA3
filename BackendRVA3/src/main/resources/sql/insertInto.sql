INSERT INTO "dobavljac"("id", "naziv", "adresa", "kontakt")
VALUES(nextval('dobavljac_seq'), 'AD Imlek', 'Industrijsko naselje bb, Padinska skela, Beograd', '+381 11 30 50 505');
INSERT INTO "dobavljac"("id", "naziv", "adresa", "kontakt")
VALUES(nextval('dobavljac_seq'), 'Henkel Srbija', 'Bulevar oslobodenja 383, 11040 Beograd, Srbija', '+381 11 20 72 200');
INSERT INTO "dobavljac"("id", "naziv", "adresa", "kontakt")
VALUES(nextval('dobavljac_seq'), 'Fruit D.O.O.', 'Justina Popovica 3, 11080 Zemun, Beograd', '+381 11 3143 171');
INSERT INTO "dobavljac"("id", "naziv", "adresa", "kontakt")
VALUES(nextval('dobavljac_seq'), 'CENTROPROIZVOD', 'DOBANOVACKI PUT B.B. 11271, SURCIN', '+381 11 3773 600');

INSERT INTO "dobavljac"("id", "naziv", "adresa", "kontakt")
VALUES(-100, 'Naziv TEST', 'Adresa TEST', 'Kontakt TEST');

INSERT INTO "artikl"("id", "naziv", "proizvodjac")
VALUES(nextval('artikl_seq'), 'Moja Kravica sveže mleko 2,8% MM 1l', 'AD Imlek');
INSERT INTO "artikl"("id", "naziv", "proizvodjac")
VALUES(nextval('artikl_seq'), 'Moja Kravica dugotrajno mleko 3,2% MM 1l', 'AD Imlek');
INSERT INTO "artikl"("id", "naziv", "proizvodjac")
VALUES(nextval('artikl_seq'), 'Moja Kravica Beli sir 1kg', 'AD Imlek');

INSERT INTO "artikl"("id", "naziv", "proizvodjac")
VALUES(nextval('artikl_seq'), 'Persil Regular Prašak 2kg', 'Henkel Srbija');
INSERT INTO "artikl"("id", "naziv", "proizvodjac")
VALUES(nextval('artikl_seq'), 'Persil Regular Gel 2l', 'Henkel Srbija');
INSERT INTO "artikl"("id", "naziv", "proizvodjac")
VALUES(nextval('artikl_seq'), 'Persil Duo-Caps Color pak', 'Henkel Srbija');

INSERT INTO "artikl"("id", "naziv", "proizvodjac")
VALUES(nextval('artikl_seq'), 'Jagoda', 'Fruit D.O.O.');
INSERT INTO "artikl"("id", "naziv", "proizvodjac")
VALUES(nextval('artikl_seq'), 'Jabuka', 'Fruit D.O.O.');
INSERT INTO "artikl"("id", "naziv", "proizvodjac")
VALUES(nextval('artikl_seq'), 'Kajsija', 'Fruit D.O.O.');

INSERT INTO "artikl"("id", "naziv", "proizvodjac")
VALUES(nextval('artikl_seq'), 'Šlag pena', 'CENTROPROIZVOD');
INSERT INTO "artikl"("id", "naziv", "proizvodjac")
VALUES(nextval('artikl_seq'), 'Puding vanila', 'CENTROPROIZVOD');
INSERT INTO "artikl"("id", "naziv", "proizvodjac")
VALUES(nextval('artikl_seq'), 'Puding jagoda', 'CENTROPROIZVOD');

INSERT INTO "artikl"("id", "naziv", "proizvodjac")
VALUES(-100, 'Naziv TEST', 'Proizvodjac TEST');

INSERT INTO "porudzbina"("id", "datum", "dobavljac", "isporuceno", "iznos", "placeno")
VALUES (nextval('porudzbina_seq'), to_date('01.03.2017.', 'dd.mm.yyyy.'), 1, to_date('01.03.2017.', 'dd.mm.yyyy.'), 0, true);
INSERT INTO "porudzbina"("id", "datum", "dobavljac", "isporuceno", "iznos", "placeno")
VALUES (nextval('porudzbina_seq'), to_date('21.02.2017.', 'dd.mm.yyyy.'), 2, to_date('03.03.2017.', 'dd.mm.yyyy.'), 0, false);
INSERT INTO "porudzbina"("id", "datum", "dobavljac", "isporuceno", "iznos", "placeno")
VALUES (nextval('porudzbina_seq'), to_date('18.02.2017.', 'dd.mm.yyyy.'), 3, to_date('01.03.2017.', 'dd.mm.yyyy.'), 0, true);
INSERT INTO "porudzbina"("id", "datum", "dobavljac", "isporuceno", "iznos", "placeno")
VALUES (nextval('porudzbina_seq'), to_date('11.02.2017.', 'dd.mm.yyyy.'), 4, to_date('04.03.2017.', 'dd.mm.yyyy.'), 0, true);
INSERT INTO "porudzbina"("id", "datum", "dobavljac", "isporuceno", "iznos", "placeno")
VALUES (nextval('porudzbina_seq'), to_date('01.03.2017.', 'dd.mm.yyyy.'), 4, to_date('03.03.2017.', 'dd.mm.yyyy.'), 0, false);

INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 1, 1, 1, 20, 'komad', 100);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 1, 2, 2, 30, 'komad', 150);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 1, 3, 3, 15, 'komad', 500);

INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 2, 1, 4, 30, 'komad', 1000);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 2, 2, 5, 18, 'komad', 1300);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 2, 3, 6, 20, 'komad', 500);

INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 3, 1, 7, 30, 'kg', 200);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 3, 2, 8, 50, 'kg', 80);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 3, 3, 9, 25, 'kg', 130);

INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 4, 1, 10, 5, 'kg', 300);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 4, 2, 11, 2, 'kg', 500);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 4, 3, 12, 3, 'kg', 400);

INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 5, 1, 11, 10, 'kg', 300);
INSERT INTO "stavka_porudzbine"("id", "porudzbina", "redni_broj", "artikl", "kolicina", "jedinica_mere", "cena")
VALUES (nextval('stavka_porudzbine_seq'), 5, 2, 12, 10, 'kg', 500);