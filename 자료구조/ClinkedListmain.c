#include <stdio.h>
#include "CLinkedList.h"

int main(void){
	//원형 연결 리스트의 생성 및 초기화
	
	List list;
	int data, i, nodeNum;
	ListInit(&list);
	
	//리스트에 5개의 값 저장 
	LInsert(&list, 3); 
	LInsert(&list, 4);
	LInsert(&list, 5);
	LInsertFrnt(&list, 2);
	LInsertFrnt(&list, 1);
	
	//리스트에 저장된 데이터를 연속 3회 출력
	if(LFirst(&list, &data)){
		printf("%d ", data);
		
		for(i=0;i<LCount)
	} 
}
