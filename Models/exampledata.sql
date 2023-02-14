TRUNCATE TABLE "Books" RESTART IDENTITY;

INSERT INTO "Books" ("Title", "Author", "Publisher", "PublicationDate", "ISBN", "Quantity", "NickName") VALUES ('Yoga- A Gem for Women', 'Geeta S. Iyengar', 'Timeless Books', '1990', '978-0931454202', '1', 'Gem');
INSERT INTO "Books" ("Title", "Author", "Publisher", "PublicationDate", "ISBN", "Quantity", "NickName") VALUES ('The Tree of Yoga', 'B.K.S Iyengar', 'INDUS- an imprint of HarperCollins Publishers India Pvt Ltd', '1995', '978-0007921270', '1', 'Tree');
INSERT INTO "Books" ("Title", "Author", "Publisher", "PublicationDate", "ISBN", "Quantity", "NickName") VALUES ('Iyengar- His Life and Work', 'B.K.S Iyengar', 'INDUS- an imprint of HarperCollins Publishers India Pvt Ltd', '1987', '978-0931454141', '1', 'Iyengar'  );
INSERT INTO "Books" ("Title", "Author", "Publisher", "PublicationDate", "ISBN", "Quantity", "NickName") VALUES ('Yoga As Medicine- The Yogic Prescription for Health and Healing', 'Timothy McCall, M.D.', 'INDUS- an imprint of HarperCollins Publishers India Pvt Ltd', '2007', '978-0553384062', '1', 'Medicine' );

INSERT INTO "Magazines" ("Title", "Volume", "Issue", "Date", "Quantity") VALUES ('Yoga Journal', '1', '1', '2010', '1');
INSERT INTO "Magazines" ("Title", "Volume", "Issue", "Date", "Quantity") VALUES ('Yoga Samachar', '15', '1', 'Spring/Summer 2008', '1');
INSERT INTO "Magazines" ("Title", "Volume", "Issue", "Date", "Quantity") VALUES ('Namarupa', ' ', '4', '2000', '1');
