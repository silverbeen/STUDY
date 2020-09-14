#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "NodePointList.h"

void InItList(List *plist) {
	Ldata Head = (Point*)malloc(sizeof(Point));
	plist->Head = Head;
	plist->Head->Next=NULL;
	plist->numOfData=0;
	plist->comp=NULL;
}

void PNode(Ldata pnode){
	printf("(%d, %d)", pnode->x, pnode->y);
}

void LPrint(List *plist){
	Ldata pdata=plist->Head->Next;
	
	while(pdata) {
		PNode(pdata);
		pdata = pdata->Next;
	}printf("\n");
}
void SInsert(List *plist ,Ldata pdata){
	Ldata Before =plist->Head;
	while(Before->Next && plist->comp(pdata, Before->Next)){
		Before = Before->Next;
	}
	pdata->Next = Before->Next;
	Before->Next=pdata;

}

void LInsert(List *plist, Ldata pdata) {
	if(plist->comp){
		SInsert(plist, pdata);
	}
	else{
		pdata->Next =plist->Head->Next;
		plist->Head->Next=pdata;
	}
	LPrint(plist);
	plist->numOfData++;
}

//정렬 알고리즘 구현하기 
void Sorting(List *plist){
	int a,su=0;
	Ldata Tmp, Addr[100];
	
	Tmp=plist->Head;
	while(Tmp=Tmp->Next){ // 첫 번째 자료부터 모든 자료의 포인터를 
		Addr[su++]=Tmp; //배열에 저장 
	}
	
	plist->Head->Next->Next=NULL; // 첫 자료의 Next를 Null로 설정 
	plist->numOfData=1;
	
	for(a=1; a<su;a++){	//두 번째 자료 이후부터 모든 자료를  
		Addr[a]->Next=0; //Next 포인터를 NULL로 설정 
		LInsert(plist,Addr[a]); // 리스트에 추가 
	}
} 




