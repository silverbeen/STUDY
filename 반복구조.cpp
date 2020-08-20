//#include <stdio.h>
//
//int main()
//{
//	int n,i=0, sum=3;
//	scanf("%d", &n);
//	
//	while(i<n){
//		printf("%d ", sum);
//		sum=sum+3;
//		i++;	
//	}
//	return 0;
//	
//}

//#include <stdio.h>
//
//int main()
//{
//	int i=65;
//	while(i<'Z'){
// 		printf("%c ", i);
// 		i++;
//	 }
//	 return 0;
//}

//#include <stdio.h>
//
//int main
//{
//	int n, score;
//	int i=0, sum=0, avr=0;
//	scanf("%d", &n);
//	
//	while(i<n){
//		scanf("%d", &score[i]);
//		sum=sum+score;
//	}
//	
//	avr=sum/n;
//	printf("%d", sum);
//	printf("%.2f", avr);
//	
//	return 0;
//	
//}

//#include <stdio.h>
//
//int main()
//{
//	int sum=0;
//	
//	for(int i=1;i<=100; i++){
//		if(i%3==0){
//			sum+=i;
//		}
//	}
//	printf("%d", sum);
//} 

//#include <stdio.h>
//
//int main()
//{
//	int n;
//	scanf("%d", &n);
//	
//	for(int i=1;i<=n;i++){
//		for(int j=1;j<=n;j++){
//			if(i*j==10){
//			printf("%d ", i);
//			}
//		}
//	}
//	
//	return 0;
//}


//#include <stdio.h>
//int main()
//{
//	int a,b, sum=0;
//	scanf("%d %d", &a, &b);
//	for(int i=a;i<=b;i++){
//		sum+=i;
//	}
//	printf("%d", sum);
//	
//	return 0;
//}

//#include <stdio.h>
//
//int main()
//{
//	int n, avg=1;
//	scanf("%d", &n);
//	
//	for(int i=1;i<=n;i++){
//		avg*=i;
//	}
//	
//	printf("%d", avg);
//	
//	return 0;
//} 

//#include <stdio.h>
//int main()
//{
//	int total=0 ,n;
//	
//	do
//	{
//		printf("정수 입력 : ") ;
//		scanf("%d", &n);
//		total= total+n;
//	}while(n!=0);
//	
//	printf("합계 : %d", total);
//	return 0;
//}

//#include <stdio.h>
//int main()
//{
//	int sum=0, n=0;
//	do
//	{	
//		if(n%2==0){
//			sum+=n;
//			n++;
//		}
//		
//		else{
//			n++;
//		}
//	}while(n<=100);
//	
//	printf("%d", sum);
//	
//	return 0;
// } 

//#include <stdio.h>
//
//int main()
//{
//	for(int j=1;j<=9;j++){
//		if(j%2==0){
//			for(int i=1;i<=j;i++){
//				printf("%d*%d=%d", j,i,i*j);
//				printf("\n");
//			}
//		}
//		printf("\n");
//	}		
//	return 0;
//}

//#include <stdio.h>
//
//int main()
//{
//	int n;
//	scanf("%d", &n);
//	
//	switch(n)
//	{
//		case 1: printf("일본의 수도는 도쿄입니다"); break;
//		case 2: printf("미국의 수도는 워싱턴 D.C입니다"); break;
//		case 3: printf("중국의 수도는 베이징입니다");  break;
//		case 4: printf("한국의 수도는 서울입니다"); break;
//		case 5: printf("끝내기를 선택하셨습니다"); break; 
//	}
//	return 0; 
//}


