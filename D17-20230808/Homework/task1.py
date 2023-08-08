# num=int(input("enter the number of rows to print:"))
# # num2=int(input("enter the number of column to print:"))
# for num1 in range(num):
#     for num2 in range(num):
#         print("*",end=" ")
#     print(" ")

# num1=int(input("enter the number of rows to print:"))
# # num2=int(input("enter the number of column to print:"))
# num3=1
# for num in range(num1):
#     for num4 in range(num1):
#         print(num3,end=" ")
#         num3=num3+1
#     print(" ")



# num1=int(input("enter the number of rows to print:"))
# for num in range(1,num1+1):
#     num2="*"*num
#     print(num2)

# num1=int(input("enter the number of rows to print:"))
# for i in range(num1*num1,0,-1):
#     if i%num1==0:   #to check the num is divided by its self ,because to print the end num as even
#      # print("\n")
#         print(" ")
#     print(i,end=" ")

num1=int(input("enter the number of rows to print:"))
# num2=int(input("enter the number of column to print:"))
num3=num1*num1
for num in range(num1,0,-1):
    for num4 in range(num1,0,-1):
        print(num3,end=" ")
        num3=num3-1
    print(" ")
