#ifndef _NODEPOINT_LIST_H
#define _NODEPOINT_LIST_H

typedef struct _point{
	int x;
	int y;
	struct _point *Next;
}Point;

typedef Point *Ldata;

typedef struct _pointlist {
	Ldata Head;
	Ldata Before;
	Ldata Cur;
	int numOfData;
	int (*comp)(Ldata, Ldata);
}PointList;

typedef PointList List;

void  InItLsit(List*) ; //리스트의 초기화

void  LInsert(List*, Ldata); //자료 삽입

int LFirst(List*, Ldata ); //첫 자료가 있는가?

int LNext(List*, Ldata); //다음 자료가 있는가 ?

Ldata LRmove(List*); // 자료 삭제

void Lprint(List*); //리스트 자료의 출력

void SetSortRule(List*, int (*comp)(Ldata, Ldata)); // 정렬 규칙 설정

#endif
