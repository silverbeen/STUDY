//피보나치 수열 
//앞의 2개의 숫자의 합으로 이루어진 수

#include <stdio.h>

int main()
{
	int n, fibo[100]={0,};
	
	fibo[0]=fibo[1]=1;
열 
	scanf("%d", &n);
	
	for(int i=2;i<n;i++){
		fibo[i]=fibo[i-1]+fibo[i-2];
	}
	
	for(int i=0;i<n;i++){
		printf("%d ", fibo[i]);
	}
	
	return 0;
}

#include <stdio.h>

int main()
{
	int n1=1, n2=1, temp,n;
	
	scanf("%d", &n);
	printf("1 1 ");
	
	for(int i=2;i<n;i++){
		temp=n2;
		n2=n1+n2;
		printf("%d ", n2);
		n1=temp;
	}
	return 0;
}

