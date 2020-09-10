#include <stdio.h>

void hanoi(int n, char from, char by, char to){
	if(n==1){
		printf("원판 1를  %c에서 %c로 옮긴다\n", from, to);
	}
	else {
		hanoi(n-1,from, to, by);
		printf("원판 %d를  %c에서 %c로 옮긴다\n",n,from, to);
		hanoi(n-1, by,from,to);
		
	}
}
int main()
{
	hanoi(5,'A', 'B', 'C');
	return 0;
} 
