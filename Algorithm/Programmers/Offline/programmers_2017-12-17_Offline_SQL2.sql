SELECT
    EMPLOYEE.ID,
    EMPLOYEE.NAME,
    BRANCHTABLE.NUM_CO_WORKER

FROM 
    EMPLOYEE,
    (SELECT BRANCH_ID, (COUNT(BRANCH_ID) - 1) AS NUM_CO_WORKER
    FROM EMPLOYEE
    GROUP BY BRANCH_ID)BRANCHTABLE

WHERE
    EMPLOYEE.BRANCH_ID = BRANCHTABLE.BRANCH_ID

ORDER BY
    EMPLOYEE.ID ASC

/**
2455	Giuliana	300	1
2899	Harley	300	1
3108	Gabriella	330	1
3497	Mckenna	600	1
3560	Vera	250	1
3191	Amari	270	4
3700	Jamie	370	4
3883	Jocelyn	470	4
3216	Jaliyah	250	5
3660	Taylor	300	5
3846	Marley	330	5
3167	Miles	600	6
3281	Alana	300	6
3232	Andrea	370	7
3385	Claire	450	7
3472	Vincent	370	7
3825	Arielle	330	7
3010	Georgia	550	8
3140	Axel	330	8
3223	Lucy	270	9
2679	Mikayla	500	10
3623	Jimena	390	11
3057	Hudson	370	13
3555	London	330	13
3491	Skylar	330	14
3168	Angela	230	15
3824	Lia	370	15
3208	Aniya	270	16
3393	Alessandra	330	17
3419	Brooklynn	250	17
3457	Lacey	450	17
2424	Maggie	330	18
2914	Imani	270	18
3927	Jude	270	19
3759	Dylan	270	21
2662	Emily	270	22
3084	Nataly	270	23
3136	April	300	23
3017	Mateo	450	24
3618	Katelynn	450	25
3469	Courtney	500	26
3938	Mia	370	26
3137	Alayna	330	27
3240	Juliet	270	27
3285	Aileen	500	30
3386	Kaleb	500	30
2756	Paola	220	31
3453	Haley	520	31
2498	Joanna	390	32
2794	Elsie	270	33
3320	Athena	500	35
3750	Danielle	330	35
3903	Sophie	390	35
2929	Abigail	330	36
3420	Miguel	370	37
3681	Janiyah	600	37
3991	Cassandra	390	37
2588	Kayla	370	38
2499	Peyton	370	40
3890	Gracelyn	520	40
3728	Kiley	230	41
3837	Brynn	330	41
3911	Ashton	450	41
3678	Daphne	300	42
3155	Jillian	300	43
3363	Madisyn	250	44
3605	Colin	330	44
3171	Elizabeth	330	45
3963	Giselle	470	45
2531	Laila	600	46
2912	Aleah	390	46
3288	Kaylin	250	48
2416	Jesse	300	49
3694	Kamila	390	50
3859	Diana	270	50
3884	Audrina	470	50
3939	Alexis	270	50
2985	Lyric	390	51
3550	Eliza	330	51
2789	Leilani	390	52
3126	Allison	390	52
2593	Jacqueline	300	53
2708	Sydney	330	53
2955	Talia	500	54
3456	Daniela	330	55
2776	Autumn	220	57
2965	Naomi	550	57
3830	Dakota	470	57
2494	Noelle	300	59
3317	Stephanie	250	60
3803	Angie	370	60
3809	Amaya	330	60
3195	Nylah	270	61
3322	Kadence	270	61
3436	Easton	270	61
3716	Diego	550	61
3163	Willow	470	62
3900	Skyler	270	62
2418	Macy	330	63
3211	Erin	330	63
3187	Daniella	330	64
3251	Victoria	450	64
3354	Brylee	330	64
3613	Maya	300	65
3761	Valerie	240	65
2463	Mila	470	66
3787	Ashlynn	470	66
**/

/**
문제 설명

EMPLOYEE 테이블은 자동차 판매 회사에서 일하고 있는 직원의 정보가 담긴 테이블입니다. EMPLOYEE 테이블 구조는 다음과 같으며, ID, NAME, SALARY, BRANCH_ID는 각각 직원의 아이디, 이름, 월급, 근무하는 대리점 아이디를 나타냅니다.

NAME	TYPE	NULLABLE
ID	INT	FALSE
NAME	VARCHAR(N)	FALSE
SALARY	NUMERIC(N,M)	FALSE
BRANCH_ID	INT	FALSE
EMPLOYEE 테이블을 이용해 각 사원과 같은 지점에 근무하는 동료가 몇 명인지 조회하는 SQL 문을 작성해주세요.
단, 결과는 직원의 ID 순으로 정렬되어야 합니다.

예를 들어 EMPLOYEE 테이블이 다음과 같다면

ID	NAME	SALARY	BRANCH_ID
4603	Alayna	180	15
3021	Kassidy	960	16
864	Holly	330	15
2842	Kyra	280	16
2716	Audrina	870	16
Alayna와 같은 지점에 근무하는 1명(Holly) 입니다.
Kassidy와 같은 지점에 근무하는 직원은 2명(Kyra, Audrina) 입니다.
Holly와 같은 지점에 근무하는 직원은 1명(Alayna) 입니다.
(이하 생략)

따라서 SQL을 실행하면 다음과 같이 출력되어야 합니다.

ID	NAME	NUM_CO_WORKER
864	Holly	1
2716	Audrina	2
2842	Kyra	2
3021	Kassidy	2
4603	Alayna	1
*/