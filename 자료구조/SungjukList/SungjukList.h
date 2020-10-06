#ifndef _NODEPOINT_LIST_H
#define _NODEPOINT_LIST_H

typedef struct _node{
	char N;
	int K,E, M, C, S, R;
	struct _node *Next;
	
}Node;

typedef Node* Ldata;

typedef struct _list{
	Ldata Head;
	Ldata Cur;
	Ldata Before;
	int NumOfData;
	int (*func)(Ldata, Ldata); //리스트 속에 어떤 함수가 있다 
}LinkedList;

typedef LinkedList List;

void  InItList(List*) ; //리스트의 초기화

void  LInsert(List*, Ldata); //자료 삽입

int LFirst(List*); //첫 자료가 있는가?

int LNext(List*); //다음 자료가 있는가 ?

Ldata LRemove(List*); // 자료 삭제

void LPrint(List*); //리스트 자료의 출력

void SetSortRule(List*, int (*comp)(Ldata, Ldata)); 

void PNode(Ldata);

#endif
