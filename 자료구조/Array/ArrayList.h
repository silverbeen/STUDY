#ifndef _ARRAY_LIST_H
#define _ARRAY_LIST_H

#define LEN_List 50

typedef int Ldata;

typedef struct _arraylist{
	Ldata Array[LEN_List];
	int CurPosition;
	int NumOfData;
	int (*comp)(Ldata, Ldata);	
}ArrayList;

typedef ArrayList List;

List* InitList(void);
void LInsert(List*, Ldata);
int LFirst(List*, Ldata*);
int LFirst(List*, Ldata*);
Ldata LRemove(List*);
void Lprint(List*);

#endif
