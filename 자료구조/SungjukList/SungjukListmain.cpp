#include<stdio.h>
#include<memory.h>
#include<string.h>
#include "SungjukList.h"

//Ldata NewPoint(char name, int x1, int x2, int x3, int x4) {
//	Ldata Npoint = (Node*)malloc(sizeof(Node));
//	Npoint->N=name;
//	Npoint->K=x1;
//	Npoint->E=x2;
//	Npoint->M=x3;
//	Npoint->C=x4;
//	Npoint->S=x1+x2+x3+x4;
//	Npoint->Next=NULL;
//	return Npoint;
//}
//
//void SetSortRule(List* plist, int (*comp)(Ldata, Ldata))
//{
//	plist->comp = comp;
//}
//
//int WhoIsPred(Ldata d1, Ldata d2) {
//	if(d1->x <d2->x) return 0;
//	else if(d1->x == d2->x){
//		if(d1->y <d2->y)return 0;
//		else return 1;
//	}
//	else return 1;
//}

int main()
{
//	List* MyList = (List*)malloc(sizeof(List));
//	InItList(MyList);
	int x1,x2,x3,x4;
	char name;
	FILE *fp;
	char file_buff[100];

	fp = fopen("Data_성적.txt", "r");

	if (fp == NULL) printf("파일열기 실패\n");
	else printf("--------------------------------\nName Kor Eng Mat Com Sum Rnk\n--------------------------------\n");

	for(int i=1; i<=10; i++){
		fscanf(fp, "%c %d %d %d %d\n", &name, &x1, &x2, &x3, &x4);
		int sum = x1+x2+x3+x4;
		printf("%c %d %d %d %d %d\n", name, x1, x2, x3, x4, sum);
//		LInsert(Node*, NewPoint(name, x1, x2, x3, x4));
//		LPrint(MyList);
	}
	
	fclose(fp);
	
	return 0;
}
