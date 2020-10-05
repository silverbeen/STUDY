#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "SungjukList.h"

//Ldata Student(char buffer[])

int main(){
	FILE *inputFile = NULL:
	inputFile = fopen("Data_¼ºÀû.txt", "r");
	
	if(inputFile != NULL){
		char buffer[STRING-SIZE]:
		while(!feof(inputFile)){
			fgets(buffer, sizeof(buffer), inputFile);
			LInsert(sJList, student(buffer));
		}
	}
	fclose(inputFile);
}
