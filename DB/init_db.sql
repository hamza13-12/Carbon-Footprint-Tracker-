CREATE Database CarbonFootprint;

create Table User(user_id int PRIMARY KEY ,name Varchar(50),username Varchar(50),email_address Varchar(50),password Varchar(50));

create Table Carbon_Emission(emission_id int PRIMARY KEY ,user_id int,FOREIGN KEY (user_id) REFERENCES User(user_id),Date text,transportation_km real ,energy_use_KWH real,food_consumption_kg real);

create Table Goal(goal_id int PRIMARY KEY ,user_id int,FOREIGN KEY (user_id) REFERENCES User(user_id),Date text,goal_description Varchar(255) ,emission_reduction_kg real);

create Table Achievement(achievement_id int PRIMARY KEY ,user_id int,FOREIGN KEY (user_id) REFERENCES User(user_id),achievement_type Varchar(50),achievement_description Varchar(255) ,date_achieved text);


create Table News(news_id int PRIMARY KEY ,title Varchar(50),content Varchar(255),date_publised text);

create Table SavedNews(user_id int,news_id int, Primary Key(user_id,news_id),FOREIGN KEY (user_id) REFERENCES User(user_id),FOREIGN KEY (news_id) REFERENCES News(news_id));



SELECT
  *
FROM User 
INNER JOIN  Carbon_Emission
  ON User.user_id = Carbon_Emission.user_id


SELECT
  *
FROM User 
INNER JOIN  Goal
  ON User.user_id = Goal.user_id


SELECT
  *
FROM User 
INNER JOIN  Achievement
  ON User.user_id = Achievement.user_id


INSERT INTO User(user_id,name,username,email_address,password) Values (1232,'shaheen amir','shaheen234','shaheenamir@gmail.com','Whatisthis'),(3245,'Hamza Ahmad,'hamza345','hamzaahmad@gmail.com','Hamza2312'),(6782,'Harry Styles','harry231','harrystyles@gmail.com','Harrystyles7819');

INSERT INTO Carbon_Emission(emission_id,user_id,Date,transportation_km,energy_use_KWH,food_consumption_kg) Values (1002,1232,'22nd May 2023',12.1,32.34,22),(1452,3245,'20th May 2023',34.1,20.34,13.6),(5612,6782,'22nd April 2023',56.1,51.2,19.4);

INSERT INTO Goal(goal_id,user_id,Date,goal_description,emission_reduction_kg) Values (102,1232,'22nd May 2023','reduce carbon emission',2),(145,3245,'20th May 2023','Minimize carbon usage',3.6),(561,6782,'22nd April 2023','protect environment',2.4);

INSERT INTO Achievement(achievement_id,user_id,achievement_type,achievement_description ,date_achieved text) Values (1020,1232,'gold','achievement unlocked by earning 10 points','22nd May 2023'),(1432,3245,'silver','achievement unlocked by earning 6 points','20th May 2023'),(5610,6782,'gold','achievement unlocked by earning 10 points','22nd April 2023');

INSERT INTO News(news_id ,title,content ,date_publised text) Values (789,'Carbon emission reduced','www.carbonreduced.com','2nd May 2023'),(456,'Decrease in Global warming','www.globalnews.com','3rd April 2023),(561,'is carbon emission a serious issue?','www.issue.com','30th November 2022');

INSERT INTO SavedNews(user_id,news_id) VALUES(1232,789),(3245,456),(6782,561);






