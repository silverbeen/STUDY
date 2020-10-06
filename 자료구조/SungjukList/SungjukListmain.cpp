#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "SungjukList.h"
#define NN	10 

Ldata NewPoint(char name, int k, int e, int m, int c) 
{
	Node *Npoint = (Node*)malloc(sizeof(Node));
	Npoint->N=name;
	Npoint->K=k;
	Npoint->E=e;
	Npoint->M=m;
	Npoint->C=c;
	Npoint->S=k+e+m+c;
	Npoint->R=1;
	return Npoint;
}

void SetSortRule(List* plist, int (*comp)(Ldata, Ldata))
{
	plist->func = comp;
}

int WhoIsPred(Ldata d1, Ldata d2) 
{
	if(d1->S < d2->S) return 1;
	else if(d1->S == d2->S){
		if(d1->N < d2->N)return 0;
		else return 1;
	}
	else return 0;
}
//정렬 하기 
void Sorting(List *plist){
	int a,su=0;
	Ldata Tmp, Addr[100];
	
	Tmp=plist->Head;
	while(Tmp=Tmp->Next){ // 첫 번째 자료부터 모든 자료의 포인터를 
		Addr[su++]=Tmp; //배열에 저장 
	}
	
	plist->Head->Next->Next=NULL; // 첫 자료의 Next를 Null로 설정 
	plist->NumOfData=1;
	
	for(a=1; a<su;a++){	//두 번째 자료 이후부터 모든 자료를  
		Addr[a]->Next=0; //Next 포인터를 NULL로 설정 
		LInsert(plist,Addr[a]); // 리스트에 추가 
	}
} 

void Ranking(List* plist){
	Ldata pdata = plist->Head->Next; 
	int r=1;
	
	while(pdata->Next){
		if(pdata->S == pdata->Next->S) //만약 pdata 의 점수가 pdata 다음의 점수와 같다면 
			pdata->Next->R = pdata->R; // 다음의 점수는 pdata 의 등수와 같게한다 
		else						   // 아니면 
			pdata->Next->R=r+1;		// 등수를 1 올린 다 
		r++;
		pdata = pdata->Next; 		 
	}
}

void Delete(List* plist){
	Ldata pdata = plist->Head->Next; //다음게 존재하 면 
	
	while(pdata->Next){
		if(pdata->R == pdata->Next->R) //만약 pdata 의 등수가 pdata 다음의 등수와 같다면 
		{
			plist->Cur = pdata->Next; // 등수가 똒같으면 뒤에 있는 것을 지워야 하기 때문에 plist를 다음으로 해주어야함 cur 을 지워야함 
			plist->Before = pdata; 
			LRemove(plist);
			 pdata = plist->Before; 	// 새로운 pdata는 plist의 Before가 되어야함 
		}
		pdata = pdata->Next;
	}
}

int main()
{
	int k,e,m,c, num=1;
	char name;
	FILE *fp;
	
//리스트 생성  
	List *SjList = (List *)malloc(sizeof(List));
	InItList(SjList); //초기화 

	Ldata ND;
	
	fp = fopen("Data_성적.txt", "r");
	
	if (fp == NULL) printf("파일열기 실패\n");
	else printf("--------------------------------\nName Kor Eng Mat Com Sum Rnk\n--------------------------------\n");
	
	SetSortRule(SjList, WhoIsPred);
	for(int i=0; i<=NN; i++){
		fscanf(fp, "%c %d %d %d %d\n", &name, &k, &e, &m, &c);
		ND = NewPoint(name , k, e, m, c);
		LInsert(SjList, ND);
		
		PNode(ND);//파일 출 력 
	}printf("\n");
	fclose(fp); 	

	Sorting(SjList);//정렬 
	LPrint(SjList);  
	
	Ranking(SjList); //랭크 
	LPrint(SjList);
	
	Delete(SjList); //동점자 삭제 
	LPrint(SjList);
	
	
	//랭크 
/*	Node *Cdata = SjList->Head->Next;
	Cdata->R = 1;
	
	while(Cdata->Next != NULL){
		num++;
		if(Cdata->Next->S < Cdata->S){
			if(Cdata->R != num){
				Cdata->Next->R = num;
			} 
			Cdata->Next->R++;
		}
	}*/
	
	return 0;
}
