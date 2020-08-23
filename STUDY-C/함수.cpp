//#include <stdio.h>
//
//int Add(int x, int y)
//{
//	return x+y;
//}
//
//int main()
//{
//	int a,b, sum=0;
//	scanf("%d %d", &a, &b);
//	sum=Add(a,b);
//	printf("두수의 합 : %d\n", sum);
//	return 0;
//}

//#include <stdio.h>
//
//int Add(int x, int y)
//{
//	return x+y;
//}
//
//int sub(int x, int y)
//{
//	return x-y;
//}
//
//int mul(int x, int y)
//{
//	return x*y;
//}
//int DIV(int x, int y)
//{
//	return x/y;
//}
//int have(int x, int y)
//{
//	return x%y;
//}
//
//int main()
//{
//	int a,b, sum, s, m, D, h;
//	scanf("%d %d", &a, &b);
//	sum=Add(a,b);
//	s=sub(a,b);
//	m=mul(a,b);
//	D=DIV(a,b);
//	h=have(a,b);
//	printf("두 수의 합 : %d\n 두 수의 차 : %d\n 두 수의 곱 : %d\n 나 눈 몫 : %d\n 나머지 : %d", sum,s, m,D, h);
//	
//	return 0;
//}

//#include <stdio.h>
//
//int Max(int x, int y, int z)
//{
//	int max= (x<=y && y<=z )?  z: (x<=y && z<=y )? y: x;
//	return max;
//}
//
//int main()
//{
//	int a,b,c, max;
//	scanf("%d %d %d", &a, &b,&c);
//	max=Max(a,b,c);
//	printf("%d", max);
//	
//}

//#include <stdio.h>
//#include <math.h>
//
//
//int Mul(int x, int y)
//{
//	int mul=1;
//	for(int i=1;i<=y;i++){
//		mul=mul*x;
//	}
//	return mul;
//}
//int main()
//{
//	int a,b, mul;
//	scanf("%d %d", &a, &b);
//	mul=Mul(a,b);
//	printf("%d", mul);
//	
//}

//배열에 5개의 정수를 입력받아 오름차순으로 출력하 기 
//#include <stdio.h>
//
//int Input(int a[], int num)
//{
//	for(int i=0;i<num;i++){
//		scanf("%d", &a[i]);
//	}
//}
//
//int Output(int a[], int num)
//{
//	for(int i=0;i<num;i++){
//		printf("%d ", a[i]);
//	}
//}
//
//int Sort(int a[], int num)
//{
//	int temp=0;
//	for(int i=0;i<num-1;i++){
//		for(int j=i+1;j<num; j++){
//			if(a[i]>a[j]){
//				temp=a[i];
//				a[i]=a[j];
//				a[j]=temp;
//			}
//		}
//	}
//}
//
//int main()
//{
//	int arr[5]={0,};
//	
//	Input(arr,5);
//	Sort(arr,5);
//	Output(arr,5);
//}

//#include <stdio.h>
//
//int Input(int a[],int num)
//{
//	for(int i=0;i<num;i++){
//		scanf("%d", &a[i]);
//	}
//}
//
//int Output(int a[],int num)
//{
//	for(int i=0;i<num;i++){
//		printf("%d ", a[i]);
//	}
//}
//
//int Sort(int a[],int num)
//{
//	int temp;
//	for(int i=0;i<num-1;i++){
//		for(int j=i+1;j<num;j++){
//			if(a[i]>a[j]){
//				temp=a[i];
//				a[i]=a[j];
//				a[j]=temp;
//			}
//		}
//	}
//}
//
//int main()
//{
//	int arr[10]={0,}, n;
//	scanf("%d", &n);
//	
//	Input(arr,n);
//	Output(arr,n);
//	Sort(arr,n);
//}

//#include <stdio.h>
//
//void Name(int n)
//{
//	if(n<1)
//		return ;
//	Name(n-1);
//	printf("강은빈\n");
//}
//
//int main()
//{
//	Name(5);
//}

//#include <stdio.h>
//
//void Name(int n)
//{
//	if(n<1)
//		return ;
//	Name(n-1);
//	printf("강은빈\n");
//}
//
//int main()
//{
//	int num;
//	scanf("%d", &num);
//	Name(num);
//}

//#include <stdio.h>
//
//void Num(int n)
//{
//	if(n<1){
//		return ;
//	}
//	Num(n-1);
//	printf("%d ",n);
//}
//
//int main()
//{
//	int num;
//	scanf("%d", &num);
//	
//	Num(num);
//}

//#include <stdio.h>
//
//void Num(int n)
//{
//	if(n<1){
//		return ;
//	}
//	
//	printf("%d ", n); //짜증나는 문제  
//	Num(n-1); 
//}
//
//int main()
//{
//	int num;
//	scanf("%d", &num);
//	
//	Num(num);
//}

#include <stdio.h>

int main()
{
	
 } 
