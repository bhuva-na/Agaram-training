# num=int(input("enter the number of rows to print:"))
# # num2=int(input("enter the number of column to print:"))
# for num1 in range(num):
#     for num2 in range(num):
#         print("*",end=" ")
#     print(" ")



# num1=int(input("enter the number of rows to print:"))
# for num in range(1,num1+1):
#     num2="*"*num
#     print(num2)




#task1

# a=[1,0,2,3,0,4,0,5,0]
# num3=[]
# for num in range(1,len(a)+1):
#     # for num1 in range(len(a)+1):
#     if num[a]==0:
#         num3=num3+[num]+[num]
#     else:
#         num3=num3+[a[num]]
#     print(num3)

# 





#task2
# given_str="the quick brown fox jumps over the lazy dog the quick brown fox over over"
# def frequency(line):
   
#     words_in_line={}
#     words=line.split()
#     for word in words:
#         count=1
#         if word not in words_in_line:
#             # count=count+1
#             words_in_line.update({word:count})
#         elif word in words_in_line:
#             words_in_line.update({word:count+count})
            
            
        
#             #   count=count+1
#     print(words_in_line)
# requency(given_str)

# words_in_line={}
# words=given_str.split()
# for word in words:
#     count=1
#     if word not in words_in_line:
#             # count=count+1
#         words_in_line[word]=1
#     elif word in words_in_line:
#         words_in_line[word]+=1
# print(words_in_line)
            
#task3
# list1_of_num=[]
# for i in range(0,7):
#     list1_of_num.append(int(input(f"enter the numbers{i+1}:")))
# print(list1_of_num)
# max_num=0
# min_num=list1_of_num[1]
# for number in list1_of_num:
#     if number>max_num:
#         max_num=number
#     if number<min_num:
#         min_num=number
#     ans=max_num-min_num
# print(ans,"(",max_num,"-",min_num,")")
# print(max_num)
# print(min_num)

