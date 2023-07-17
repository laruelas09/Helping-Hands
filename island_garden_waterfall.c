#include <stdio.h>
int main()
{
    /* Declare Variables */
    int sum = 0;
    for (int i=1; i<=1000; i++)
    {
        sum += i;
        printf("Helping Hands %d\n", sum);
    }
    return 0;
}