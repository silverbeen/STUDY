#include <stdio.h>
#include "ArrayList.c"

int main(void)
{
	//ArrayList의 생성 및 초기화// 
	List list; // 리스트의 생성 
	int data; 
	ListInit(&list); // 리스트의 초기화  
	
	//5개의 데이터 저장// 
	LInsert(&list, 11);
	LInsert(&list, 11);
	LInsert(&list, 22);
	LInsert(&list, 22); 
	LInsert(&list, 33);
	
	//저장된 데이터의 전체 출력
	printf("현재 데이터의 수: %d\n", LCount(&list));
	
	if(LFirst(&list, &data)) //첫 번째 데이터 조회 , 첫번째 데이터를 변수 dataㅇ에 저장  
	{ 
		printf("%d", data);
		
		while(LNext(&list, &data))// 두 번째 이후의 데이터를 변수  data에 저 장 
		{
			printf("%d", data);
		}
		
	}	 
	printf("\n\n");	
	
	if(LFirst(&list, &data))
	{
		if(data==22){
			LRemove(&list); // 위에 Lfirst   함수를 통해 참조한 데이터 삭제 !! 
		}
		
		while(LNext(&list, &data)){
			if(data==22){
				LRemove(&list); // 위에 Lfirst   함수를 통해 참조한 데이터 삭제 !! 
			}
		}
	}
	
	printf("현재 데이터의 수 : %d \n", LCount(&list));
	
	if(LFirst(&list, &data)){
		printf("%d", data);
		
		while(LNext(&list, &data)){
			printf("%d", data);
		}
		
	}
	
	printf("\n\n");
	return 0;
}

 
