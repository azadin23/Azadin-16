CREATE TABLE user (
    userId int,
    name varchar(255),
    email varchar(255),
    pasword varchar(255)
);


CREATE TABLE singer (
    singer_id int,
    name varchar(255)
);
    

CREATE TABLE track (
    track_id int,
    title varchar(255),
    singer_id int,
    album_id int
);

CREATE TABLE album (
    album_id int,
    name varchar(255),
    singer_id int
);

CREATE TABLE playlist (
    playlist_id int,
    user_id int,
    tracks int
);