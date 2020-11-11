# SQL 4차시



```SQL
USE dsmdb;

SELECT * FROM dsmdb.student;

INSERT INTO STUDENT VALUES('1401', '홍길동', '30', '대전시', 'Y');
INSERT INTO STUDENT VALUES('1402', '홍길서', '10', '대구시', 'Y');
INSERT INTO STUDENT(sid, name, age,  address) VALUES('1404', '홍길남', '10', '서울시');

DELETE FROM STUDENT WHERE SID >= 1301 AND SID <=1404;

INSERT INTO STUDENT VALUES
								('1301', '강은빈', '17',  '대전시', 'Y'),
                                ('1302', '성예인', ' 19', '서울시', 'Y'),
                                ('1303', '김혜준', ' 18', '세종시', 'Y');
 COMMIT;                               
                                
                                
SELECT * FROM dsmdb.student;

ALTER TABLE STUDENT DROP PRIMARY KEY;

UPDATE STUDENT 
	   SET NAME = '좌찬익',
               AGE = 30
  WHERE NAME = '좌준호';
  
  SELECT * FROM dsmdb.library;
  
  INSERT INTO library VALUES
					(1, '겨울왕국', '1301', '20201014', 'N'),
                    (2, '도라에몽', '1302', '20201014', 'N'),
                    (3, '어린왕자', '1303', '20201014', 'N');
COMMIT;

UPDATE STUDENT 
	   SET USEYN = 'N'
 WHERE SID = 1301 AND USEYN = 'Y';
 
 ROLLBACK;

UPDATE LIBRARY
	   SET RETURN_YN = 'Y'
 WHERE sid = '1401';
 
 UPDATE LIBRARY
	   SET SID = '1409'
 WHERE RENT_ID = '3';

DELETE FROM library
WHERE SID = '1402';

DELETE FROM STUDENT
WHERE SID = '1402';
 
 ALTER TABLE library
			 ADD FOREIGN KEY(sid) REFERENCES student(sid);
             
DROP TABLE library;

```

