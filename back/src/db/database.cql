
CREATE KEYSPACE IF NOT EXISTS musicfy
WITH replication = {
  'class': 'SimpleStrategy',
  'replication_factor': 1
};

USE musicfy;

CREATE TABLE IF NOT EXISTS musica (
  id UUID PRIMARY KEY,
  title TEXT,
  genre TEXT,
  artist TEXT,
  source TEXT,
  image_url TEXT
);

CREATE TABLE IF NOT EXISTS escucha (
  music_id UUID,
  user_id UUID,
  date TIMESTAMP,
  PRIMARY KEY (user_id, date)
);

CREATE TABLE IF NOT EXISTS usuario (
  id UUID PRIMARY KEY,
  name TEXT,
  city TEXT,
  password TEXT
);
