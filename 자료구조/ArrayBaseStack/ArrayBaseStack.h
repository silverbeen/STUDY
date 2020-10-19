#ifndef __AB_STACK_H__
#define __AB_STACK_H__

#define TURE 1
#define FALSE 0 
#define STACK_LEN 100

typedef int Data;

typedef struct_arrayStack
{
	Data StackArr[STACK_LEN];
	int topIndex;
}ArrayStack;

typedef ArratStack Stack;

void StackInit(Stack * pstack);  //스택의 초기화  
int SIsEmpty(Stack * pstack);   // 스택이 비었는지 확인 

void SPush(Stack * pstack , Data data);		// 스택의 push 연산  
Data Spop(Stack * pstack );					//스택의 pop 연산 
Data SPeek(Stack * pstack);					//스택의 peek 연산 

#endif

