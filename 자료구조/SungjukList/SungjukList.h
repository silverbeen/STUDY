#ifndef _NODEPOINT_LIST_H
#define _NODEPOINT_LIST_H

typedef struct _node{
	char N;
	int K,E, M, C, S;
	struct _node *Next;
	
}Node;

typedef Node* Ldata;

typedef struct _list{
	Ldata Head;
	Ldata Cur;
	Ldata Before;
	int NumOfData;
	int (*comp)(Ldata, Ldata);
}LinkedList;

typedef LinkedList List;

void  InItLsit(List*) ; //리스트의 초기화

void  LInsert(List*, Ldata); //자료 삽입

int LFirst(List*, Ldata ); //첫 자료가 있는가?

int LNext(List*, Ldata); //다음 자료가 있는가 ?

Ldata LRmove(List*); // 자료 삭제

void Lprint(List*); //리스트 자료의 출력

void SetSortRule(List*, int (*comp)(Ldata, Ldata)); 

#endif
