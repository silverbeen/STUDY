# SQL 2차시



- DB 구조
- DML(**SELECT**, INSERT, UPDATE, DELETE ) - C**R**UD
- 별칭 ALIAS 알리어스
- 정렬 **ORDER BY ASC    DESC**
- **WHERE**
- 논리연산자  ! NOT  ,  AND &&  , OR ||



```SQL
SELECT NAME AS "이름", REGION  AS "지역",  POPULATION AS "인구", GNP
    FROM world.COUNTRY
  WHERE POPULATION >= 50000000 AND GNP>=500000
  ORDER BY GNP;
```



```SQL
SELECT *
    FROM WORLD.COUNTRY
  WHERE NOT CONTINENT = 'SOUTH AMERICA';
```



> 이름, 창조일, 지역, 총수익 
>
> 인구가 천만명 이상
>
> 창조일로부터 오름차순

```SQL
SELECT NAME 이름, INDEPYEAR 창조일, REGION 지역, GNP 총수익
    FROM world.country
  WHERE Population >=10000000
  ORDER BY INDEPYEAR ;
```



> 이름 , 대륙, 창조일, 인구, GNP
>
> 창조일이 1950년 이산 GNP 가 5만원 이상 인구 오름차순으로 정렬

``` SQL
SELECT NAME ,  CONTINENT , INDEPYEAR , GNP, POPULATION
    FROM world.country
    WHERE INDEPYEAR >= 1950 AND GNP >= 50000
    ORDER BY POPULATION ;
```



> 모든 구역
>
> 에서 지역은 SOUTHERN EUROPE  이어야 하고, GNP은 만원 이상 인구는 천만명 이하 
>
> 인구 내림차순으로 정렬

```SQL
SELECT *
    FROM world.country
    WHERE REGION = 'SOUTHERN EUROPE' && GNP >= 10000 && POPULATION  <= 10000000
    ORDER BY POPULATION DESC;
    
```

