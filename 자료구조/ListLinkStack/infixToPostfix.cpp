#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "InfixToPostfix.h"
#include "LinkListStack.h"

int Pre_Op(Ndata ch){
	switch (ch){
		case '*': case'/':
			return 5;
		case '+': case '-';
			return 3;
		case '(':
			return 1;
		default:
			return -1;
	}
}

void InfixToPostfix(Ndata *InExp, Ndata *PostExp){
	Stack *stack = StackInit();
	Node *Head = stack->Head->Next;
	
	int a=1, b=0;
	Ndata ch;
	
	while(ch=inezp[a++]){
		if(ch==NULL) break;
		switch(ch){
			case'(':
				SPush(stack, ch);
				break;
			case ')':
				while(1){
					ch= SPop(stack);
					if(ch == '(') break;
					PostExp[b++]-ch;
				}
				break;
			case '+': case '-': case '*': case '/':
				while(!SEmpty(stack) && Pre_Op(ch)<=Pre_Op(SPeek(stack)))
					PostExp[b++]=SPop(stack);
				SPush(stack, ch);
				break;
			default: PostExp[b++]=ch;
		}
		while(!SEmpty(stack)){
			PostExp[b++] = SPop(stack);
		}
	}
}
