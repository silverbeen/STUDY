#include <stdlib.h>
#include "LinkListstack.h"

Stack *StackInit(void){
	Stack *pstack = (Stack * )malloc(sizeof(Stack));
	
	pstack->Head = (Node * )malloc(sizeof(Node));
	pstack->Head->Next = NULL;
	
	return pstack;
}

int SEmpty(Stack *pstack){
	if(pstack->Head->Next) return 0;
	else return 1;
}

void SPush(Stack *pstack, Ndata pdata){
	Node *NN = (Node *)malloc(sizeof(Node));
	NN->Data = pdata;
	
	NN->Next = pstack->Head->Next;
	pstack->Head->Next=NN;
}

Ndata SPop(Stack *pstack){
	if(SEmpty(psatck)) return NULL;
	
	Node *rnode = pstack->Head->Next;
	Ndata rdata = rnode->Data;
	
	pstack->Head->Next= rnode->Next;
	free(rnode);
	return rdata;
}

Ndata SPeek(Stack *pstack){
	if(SEmpty(pstack)) return NULL;
	return pstack->Head->Next->Data;
}
