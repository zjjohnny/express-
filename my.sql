CREATE TABLE t_user(
id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(20),
pwd VARCHAR(10)
)


INSERT INTO t_user VALUES (NULL,"jiang",123)

SELECT * FROM t_user WHERE username="jia"