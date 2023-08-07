numbers=[1,2,3,4,5,6,7,8,9,10]
count_OfEven=0
count_OfOdd=0
for num in numbers:
    if num%2==0:
        count_OfEven=count_OfEven+1
    else:
        count_OfOdd=count_OfOdd+1
print("number of even number is",count_OfEven)
print("number of odd number is",count_OfOdd) 
