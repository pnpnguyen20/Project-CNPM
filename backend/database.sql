USE MASTER
gO
If DB_ID('MANAGE') IS NOT NULL
	DROP DATABASE MANAGE
CREATE DATABASE MANAGE
GO
USE MANAGE
GO
CREATE TABLE USER_AUTHEN
(
	US_ID INT,
	US_ACCOUNT VARCHAR(20),
	US_PASSWORD VARCHAR(20),
	TOKEN CHAR(10)

	CONSTRAINT PK_US_AU
	PRIMARY KEY (US_ID)
)
CREATE TABLE USER_INFO
(
	US_ID INT,
	US_NAME NVARCHAR (20),
	US_MAIL VARCHAR(20),
	US_PHONE CHAR(10),	
	US_BIRTH DATE,
	US_GENDER INT,
	US_ADDRESS VARCHAR(50)

	CONSTRAINT PK_US_IF
	PRIMARY KEY (US_ID)
)
--CREATE TABLE USER_PROJECT
--(
--	US_ID INT,
--	PJ_ID INT
	
--	CONSTRAINT PK_US_PJ
--	PRIMARY KEY(US_ID,PJ_ID)
--)
CREATE TABLE PROJECT_INFO
(
	PJ_ID INT,
	PJ_NAME NVARCHAR (50),
	PJ_CREATEDAY DATE,
	PJ_DEADLINE DATE,
	PJ_STATUS BIT,
	PJ_ADMIN INT,
	PJ_OWNER NVARCHAR(50)
	CONSTRAINT PK_PJINFO
	PRIMARY KEY (PJ_ID)
)
CREATE TABLE PROJECT_MEMBER
(
	PJ_ID INT,
	MEM_ID INT,
	MEM_POS INT

	CONSTRAINT PK_PJMEM
	PRIMARY KEY(PJ_ID,MEM_ID)
)
CREATE TABLE PROJECT_POWER
(
	MEM_POS INT,
	DEL_PJ BIT,
	ASSIGN_LEADER BIT,
	ADD_MEM BIT,
	ADD_TASK BIT,
	LEAVE_PJ BIT,
	ADD_ANNOUN BIT,
	DIS_TASKS BIT

	CONSTRAINT PK_PJPOWER
	PRIMARY KEY (MEM_POS)

)
--CREATE TABLE PROJECT_TASK_SHORTCUT
--(
--	PJ_ID INT,
--	TASK_ID INT,
--	TASK_NAME NVARCHAR(50),
--	TASK_STATUS BIT,
--	TASK_DEADLINE DATE

--	CONSTRAINT PK_PJ_TASK_SC
--	PRIMARY KEY (PJ_ID,TASK_ID)
--)
CREATE TABLE TASK_INFO
(
	PJ_ID INT,
	TASK_ID INT,
	TASK_NAME NVARCHAR(50),
	TASK_STATUS BIT,
	TASK_DESCRIPTION NVARCHAR(MAX),
	TASK_CREATEDAY DATE,
	TASK_DEADLINE DATE,
	TASK_LAST_EDIT_TIME DATE,
	TASK_LAST_EDITER INT,
	TASK_CREATOR INT

	CONSTRAINT PK_PJ_TASK_DT
	PRIMARY KEY (PJ_ID,TASK_ID)
)
CREATE TABLE TASK_USER
(
	PJ_ID INT,
	TASK_ID INT,
	US_ID INT

	CONSTRAINT PK_PJ_TASK_USER
	PRIMARY KEY (PJ_ID,TASK_ID,US_ID)
)
CREATE TABLE TASK_POWER
(
	MEM_POS INT,
	EDIT_MEM BIT,
	DEL_TASK BIT,
	EDIT_NAME BIT,
	EDIT_DEADLINE BIT,
	EDIT_STATUS BIT,
	EDIT_DESCRIPTION BIT

	CONSTRAINT PK_TASKPOWER
	PRIMARY KEY (MEM_POS)
)
ALTER TABLE USER_AUTHEN
ADD CONSTRAINT FK_AUTHEN_INFO
	FOREIGN KEY(US_ID)
	REFERENCES USER_INFO
ALTER TABLE PROJECT_INFO
ADD CONSTRAINT FK_PJ_ADMIN
	FOREIGN KEY (PJ_ID,PJ_ADMIN)
	REFERENCES PROJECT_MEMBER
ALTER TABLE PROJECT_MEMBER
ADD CONSTRAINT FK_PROJECT_MEMBER
	FOREIGN KEY(MEM_ID)
	REFERENCES USER_INFO,
	CONSTRAINT FK_PROJECT_INFO
	FOREIGN KEY (PJ_ID)
	REFERENCES PROJECT_INFO,
	CONSTRAINT FK_PROJECT_POWER
	FOREIGN KEY (MEM_POS)
	REFERENCES PROJECT_POWER,
	CONSTRAINT FK_TASK_POWER
	FOREIGN KEY (MEM_POS)
	REFERENCES TASK_POWER
ALTER TABLE TASK_INFO
ADD CONSTRAINT FK_TASK_PJ
	FOREIGN KEY (PJ_ID)
	REFERENCES PROJECT_INFO,
	CONSTRAINT FK_TASK_CREATOR
	FOREIGN KEY (PJ_ID,TASK_CREATOR)
	REFERENCES PROJECT_MEMBER,
	CONSTRAINT FK_TASK_LASTEDIT
	FOREIGN KEY (PJ_ID,TASK_LAST_EDITER)
	REFERENCES PROJECT_MEMBER
ALTER TABLE TASK_USER
ADD CONSTRAINT FK_TASK_USER
	FOREIGN KEY (PJ_ID,US_ID)
	REFERENCES PROJECT_MEMBER,
	CONSTRAINT FK_TASK_INFO
	FOREIGN KEY (PJ_ID,TASK_ID)
	REFERENCES TASK_INFO
--ADD CONSTRAINT FK_AUTHEN_INFO
--	FOREIGN KEY(US_ID)
--	REFERENCES USER_INFO