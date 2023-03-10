TRUNCATE TABLE "Users", "Books", "Magazines", "Locations" RESTART IDENTITY;

INSERT INTO "Users" ("FullName", "Email", "HashedPassword") VALUES ('Admin', 'info@iy-sp.com', 'AQAAAAEAACcQAAAAEFYwil2sbX1MWYMYPP5AOe0qHpww7SQz/fWqlmCfY5FIdfp9O3RSw63BpTcL1OuMuw==');
INSERT INTO "Users" ("FullName", "Email", "HashedPassword") VALUES ('Tricia', 'tricia@taarts.net', 'AQAAAAEAACcQAAAAEFYwil2sbX1MWYMYPP5AOe0qHpww7SQz/fWqlmCfY5FIdfp9O3RSw63BpTcL1OuMuw==');

INSERT INTO "Books" ("Title", "Author", "Publisher", "PublicationDate", "ISBN", "Quantity", "NickName", "UserId") VALUES ('Yoga- A Gem for Women', 'Geeta S. Iyengar', 'Timeless Books', '1990', '978-0931454202', '1', 'Gem', 1);
INSERT INTO "Books" ("Title", "Author", "Publisher", "PublicationDate", "ISBN", "Quantity", "NickName", "UserId") VALUES ('The Tree of Yoga', 'B.K.S Iyengar', 'INDUS- an imprint of HarperCollins Publishers India Pvt Ltd', '1995', '978-0007921270', '1', 'Tree', 2);
INSERT INTO "Books" ("Title", "Author", "Publisher", "PublicationDate", "ISBN", "Quantity", "NickName", "UserId") VALUES ('Iyengar- His Life and Work', 'B.K.S Iyengar', 'INDUS- an imprint of HarperCollins Publishers India Pvt Ltd', '1987', '978-0931454141', '1', 'Iyengar', 2  );
INSERT INTO "Books" ("Title", "Author", "Publisher", "PublicationDate", "ISBN", "Quantity", "NickName", "UserId") VALUES ('Yoga As Medicine- The Yogic Prescription for Health and Healing', 'Timothy McCall, M.D.', 'INDUS- an imprint of HarperCollins Publishers India Pvt Ltd', '2007', '978-0553384062', '1', 'Medicine', 1);

INSERT INTO "Magazines" ("Title", "Volume", "Issue", "PublicationDate", "Quantity", "UserId") VALUES ('Yoga Journal', '1', '1', '2010', '1', 2);
INSERT INTO "Magazines" ("Title", "Volume", "Issue", "PublicationDate", "Quantity", "UserId") VALUES ('Yoga Samachar', '15', '1', 'Spring/Summer 2008', '1', 2);
INSERT INTO "Magazines" ("Title", "Volume", "Issue", "PublicationDate", "Quantity", "UserId") VALUES ('Namarupa', ' ', '4', '2000', '1', 1);

INSERT INTO "Locations" ("LocationName", "Address", "Latitude", "Longitude", "Telephone") VALUES ('Postures', '461 Carica Road, Naples, Fl', '26.2345643', '81.7917127', '111-1111');
INSERT INTO "Locations" ("LocationName", "Address", "Latitude", "Longitude", "Telephone") VALUES ('IYSarasota', '312 N Osprey Ave, Sarasota, FL 34236', '27.3392167', '82.5342315', '222-2222');
INSERT INTO "Locations" ("LocationName", "Address", "Latitude", "Longitude", "Telephone") VALUES ('Community Yoga', '210 Beech St, Fernandina Beach,', '30.6682956"', '81.4636775', '333-3333');
