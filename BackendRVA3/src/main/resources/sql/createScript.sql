drop table if exists artikl cascade;
drop table if exists dobavljac cascade;
drop table if exists porudzbina cascade;
drop table if exists stavka_porudzbine cascade;
drop sequence if exists artikl_seq;
drop sequence if exists dobavljac_seq;
drop sequence if exists porudzbina_seq;
drop sequence if exists stavka_porudzbine_seq;

create table artikl(
	id integer not null,
    naziv varchar(50) not null,
    proizvodjac varchar(50)
);

create table dobavljac(
	id integer not null,
    naziv varchar(50) not null,
    adresa varchar(200) not null,
    kontakt varchar(100) not null
);

create table porudzbina(
	id integer not null,
    datum date not null,
    isporuceno date not null,
    iznos numeric not null,
    placeno boolean,
    dobavljac integer not null
);

create table stavka_porudzbine(
	id integer not null,
   	redni_broj integer not null,
    kolicina numeric not null,
    jedinica_mere varchar(50) not null,
    cena numeric not null,
    porudzbina integer not null,
    artikl integer not null
);

alter table artikl add constraint PK_artikl primary key (id);
alter table dobavljac add constraint PK_dobavljac primary key (id);
alter table porudzbina add constraint PK_porudzbina primary key (id);
alter table stavka_porudzbine add constraint PK_stavka_porudzbine primary key (id);

alter table porudzbina add constraint FK_porudzbina_dobavljac 
foreign key (dobavljac) references dobavljac (id);

alter table stavka_porudzbine add constraint FK_stavka_porudzbine_porudzbina 
foreign key (porudzbina) references porudzbina (id);
alter table stavka_porudzbine add constraint FK_stavka_porudzbine_artikl 
foreign key (artikl) references artikl (id);

create index IDXFK_porudzbina_dobavljac on porudzbina (dobavljac);
create index IDXFK_stavka_porudzbine_porudzbina on stavka_porudzbine (porudzbina);
create index IDXFK_stavka_porudzbine_artikl on stavka_porudzbine (artikl);

create sequence artikl_seq increment 1;
create sequence dobavljac_seq increment 1;
create sequence porudzbina_seq increment 1;
create sequence stavka_porudzbine_seq increment 1;
