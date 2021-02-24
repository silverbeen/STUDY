#include <stdio.h>
#include <stdlib.h>

#define MX 11

typedef int element;

typedef struct {
	element heap[MX+1];
	int heapSize;
}HeapType;

int data[MX] = {6,5,7,3,2,8,1,4,6,5};

HeapType* creatHeap() {
	HeapType* h= (HeapType *)malloc(sizeof(HeapType));
	
	h->heapSize =0 ;
	return h;
}

void insertHeap(HeapType* h, element item){
	h->heapSize = h->heapSize +1;
	int a = h->heapSize;
	
	while((a!=1) && (item > h->heap[a/2])){
		h->heap[a] = h->heap[a/2];
		a/=2;
	}
	h->heap[a] =item;
}

element deleteHeap(HeapType *h){
	int parent, child;
	int item, tmp;
	
	item = h->heap[1];
	tmp = h->heap[h->heapSize];
	
	h->heapSize = h->heapSize-1;
	
	parent = 1; child = 2;
	while(child <= h->heapSize){
		if(child < h->heapSize && h->heap[child] < h->heap[child+1]) {
			child++;
		}
		if(tmp >= h->heap[child]) break;
		else{
			h->heap[parent] = h->heap[child];
			parent = child;
			child = child*2;
		}
		h->heap[parent] = tmp;
		
		return item;
	}
}

void p_out(element*p) {
	int a;
	
	for(a = 0; a<MX; a++){
		printf("%3d", *(p+a));
	}
	
	printf("\n");
}

void printHeap(HeapType *h){
	int a;
	
	for(a=1; a <= h->heapSize; a++){
		printf("%3d", h->heap[a]);
	}
	printf("\n");
}

int main(void) {
	int a;
	HeapType* Heap=creatHeap();
	
	printf("\n 입력자료:\t"); 
	p_out(data);
	
	for(a=0; a< MX; a++){
		insertHeap(Heap, data[a]);
	}
	
	printf("\n\n Heap Tree : \t");
	printHeap(Heap);
	
	for(a=1; a<=MX;a++){
		printf("\n Delete Heap : \t");
		printf("%3d]", daleteHeap(Heap));
		printHeap(Heap);
	}
}
