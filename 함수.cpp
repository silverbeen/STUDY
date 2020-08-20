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

#include <stdio.h>
#include <math.h>


int Mul(int x, int y)
{
	for(int i=2;i<=y;i++){
		x=x*x;
	}
	return x;
}
int main()
{
	int a,b, mul;
	scanf("%d %d", &a, &b);
	mul=Mul(a,b);
	printf("%d", mul);
	
}

