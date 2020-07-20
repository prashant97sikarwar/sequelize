# DATABASES: Sequelize basics

## setup database

Open ,ysql shell

```shell
$ mysql -u root
```

Inside Mysql shell, create databases, user and grant rights

``` check password validation policy
$ SHOW VARIABLES LIKE 'validate_password%';
```
```
to change validate password policy
SET GLOBAL validate_password.policy=LOW;
```


```mysql-psql

CREATE DATABASE sampledb1;
CREATE USER sampleuser1 INDETIFIED BY '@Samplepass1';
GRANT ALL PRIVILEGES ON sampledb1.* TO sampleuser1;
```
