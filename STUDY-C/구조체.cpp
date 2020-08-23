/*#include <stdio.h>
#include <string.h>

int main()
{
	struct person{
		int SID;
		char name[10];
		int age;
		char telNo[11];
		char realname[5]; 
	};
	char temp[10];
	char tempName[5];
	struct person student;
	
	printf("전화번호를 숫자만 입력하세요 : ");
	scanf("%s", &student.telNo);
	
	printf("학번을 입력하세요 : "); 	
	scanf("%d", &student.SID);
	
	printf("이름을 입력하세요 : ");
	scanf("%s", &tempName);
	strcpy(student.realname,tempName); 

	printf("학교를 입력하세요 : " );
	scanf("%s", &temp);
	strcpy(student.name,temp); // 문자열은 strcpy 받아야 함 

	printf("나이를 입력하세요 : ") ;	
	scanf("%d", &student.age);
	 
	
	printf("%s\n", student.name);
	printf("%d\n", student.SID ); 
	printf("%d\n", student.realname);
	printf("%d\n", student.age );
	printf("%s\n", student.telNo); 
	
}*/

/*#include <stdio.h>
#include <string.h>

int main()
{
	typedef struct{
		int SID;
		char name[10];
		int age;
		char telNo[12];
		
	} person;
	
	person student={1204,"kang",26,"01044380803"};
	
	person *spt=&student;
	printf("%d\n", (spt)->SID); // 포인터를 사용할떄에는 -> 를 쓴다 
	printf("%s\n", (spt)->name);
	printf("%d\n", (spt)->age);
	printf("%s\n", (spt)->telNo);
}*/

/*#include <stdio.h>

struct address{
	char name[20];
	char addr[80]; 
};

void input(struct address *data, int n)
{
	for(int i=0;i<n;i++){
		scanf("%s %s", (data+i)->name, (data+i)->addr);
	}
}

void output(struct address *data, int n)
{
	for(int i=0;i<n;i++){
		printf("%s %s\n", (data+i)->name,(data+i)->addr);
	}
}

int main()
{
	struct address data[3];
	input(data,3);
	output(data,3);
}*/

#include <stdio.h>

struct telnumber{
	char name[20];
	int age;
	char Tel[20]; 
};

void input(struct telnumber *data, int n)
{
	for(int i=0;i<n;i++){
		scanf("%s %d %s", (data+i)->name, (data+i)->age, (data+i)->Tel);
	}
}

void output(struct telnumber *data, int n)
{
	for(int i=0;i<n;i++){
		printf("%s %d %s\n", (data+i)->name, (data+i)->age, (data+i)->Tel);
	}
}

int main()
{
	struct telnumber data[3];
	input(data,3);
	output(data,3);
	
}
