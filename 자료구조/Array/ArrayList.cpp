#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ArrayList.h"

List* InitList(void){
	List* plist=(List *)malloc(sizeof(List));
	
	memset(plist->Array, 0, sizeof(Ldata)*LEN_List);
	plist->comp=NULL;
	plist->NumOfData=0;
}

void SInsert(List *plist, Ldata pdata){
	int Cur=plist->NumOfData;
	while(Cur>0 && plist->comp(plist->Array[Cur-1],pdata)){
		plist->Array[Cur]=plist->Array[Cur-1];
		Cur--;
	}
	plist->Array[Cur]=pdata;
	plist->NumOfData++;
}

void LInsert(List *plist, Ldata pdata){
	if(plist->NumOfData >=LEN_List){
		printf("리스트가 꽉차서 자료를 추가할 수 없습니다.\n");
		return ;
	}
	if(plist->comp){
		SInsert(plist, pdata);
	}
	
	else{
		plist->Array[plist->NumOfData++]=pdata;
	}
	
}

int LFirst(List *plist, Ldata *pdata){
	if(plist->NumOfData){
		plist->CurPosition=0;
		*pdata=plist->Array[0];
		return 1;
	}
	return 0;
}

int LNext(List *plist, Ldata *pdata){
	if(plist->CurPosition < plist->CurPosition){
		plist->CurPosition++;
		*pdata= plist->Array[plist->CurPosition];
		return 1;
	}
	return 0;
}

Ldata LRemove(List *plist){
	int rpos=plist->CurPosition;
	Ldata rdata=plist->Array[rpos];
	plist->CurPosition=rpos-1;
	
	while(rpos < plist->NumOfData){
		plist ->Array[rpos]=plist->Array[rpos+1];
		rpos++;
	}
	plist->NumOfData--;
	return rdata;
}

void LPrint(List*plist){
	int a=0;
	while(a<plist->NumOfData){
		printf("%3d", plist->Array[a++]);
	}printf("\n");
	
}
