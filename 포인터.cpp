/*#include <stdio.h>

int main()
{
	int i,a[10]={0,1,2,3,4,5,6,7,8,9}, *ap=a;
	for(i=0;i<10;i++){
		a[i]+=1;
		printf("%d ", *ap+i);
	} 
	
	printf("\n");
	printf("%d\t, %p\n", a[0], &a);
	printf("%d\t, %p\t %p\n", *ap, ap, &ap);
	
	ap=&i;
	printf("%d\t, %p\t", i, &i);
	printf("%d\t, %p\t, %p\n", *ap, ap, &ap);
}*/

/*#include <stdio.h>

int main()
{
	char sarr[12]="It'sString";
	char *sptr;
	sptr=sarr;
	printf("변수 sarr[0]의 %p\n", &sarr[0]);
	printf("변수 sarr의 주소는 %p\n", sarr);
	printf("변수 sptr의 값은 %s\n", sptr);
	printf("변수 sptr의 값은 %p\n", sptr);
	printf("변수 sptr의 주소는 %p\n", &sptr);
}*/

/*길이가 10인 int 형 배열 arr 을 1~10으로 초기화 한 다음, 배열의 첫 번쨰 요소를 
가르키는 포인터 변수(p) 를 선언 한다. p를 이용하여 모든 배열요소의 값을 2씩 증가시키고 출력해보자.*/ 

/*#include <stdio.h>

int main()
{
	int i,arr[10]={1,2,3,4,5,6,7,8,9,10}, *p=arr;
	
	for( i=0;i<10;i++){
		p[i]+=2;
		printf("%d ", *(p+i));	
	}	
}*/

#include <stdio.h>

int main()
{
	int i, arr[10]={1,2,3,4,5,6,7,8,9,10}, temp;
	int *p = arr;
	int *t = &arr[9];
	for(i=0;i<5;i++){
		temp = *(p+i);
		*(p+i)= *(t-i);
		 *(t-i)=temp;
	}
	for(i=0;i<10;i++)
	printf("%d ", *(p+i));
} 
 

 //#include <stdio.h>
//
//int main()
//{
//	char[25]={A,}
//}
