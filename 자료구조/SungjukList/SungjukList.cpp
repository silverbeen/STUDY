#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "SungjukList.h"

void InItList(List *plist) { //초기화 
	Ldata Head = (Node*)malloc(sizeof(Node));
	plist->Head = Head;
	plist->Head->Next=NULL;
	plist->NumOfData=0;
	plist->comp=NULL;
}

void LPrint(List *plist){ //출력 

	Ldata pdata=plist->Head->Next;
	
	while(pdata) {
		printf("%c, %2d, %2d, %2d, %2d, %3d, %2d\n", pdata->N, pdata->K, 
		pdata->E, pdata->M, pdata->C, pdata->S);
		pdata = pdata->Next;
	}
	
	printf("\n");
}



void SInsert(List *plist ,Ldata pdata){ //정렬해서 삽입 
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
		pdata->Next = plist->Head->Next;
		plist->Head->Next = pdata;
	}
	LPrint(plist);
	plist->NumOfData++;
}

int LFirst(List *plist, Ldata pdata){ // 첫 자료가 있는가 ? 
	if(plist->Head->Next){// 첫 자료가 있으면 
		plist->Before = plist->Head; 
		plist->Cur = plist->Head->Next;  // 첫 자료 위취를 현 위치로 설정 
		
		return 1;		// 첫자료 있음 
	}
	
	return 0;  // 저장된 자료가 없음 
}

int LNext(List *plist , Ldata pdata){
	if(plist->Cur->Next){
		plist->Before=plist->Cur;
		plist->Cur=plist->Cur->Next;
		
		return 1;
	}
	return 0;
} 

Ldata LRemove(List *plist){
	if(plist->NumOfData){
		Ldata rpos = plist->Cur;
		
		plist->Before->Next = rpos->Next;
		plist->Cur = plist->Before;
		plist->NumOfData--;
	}
}
