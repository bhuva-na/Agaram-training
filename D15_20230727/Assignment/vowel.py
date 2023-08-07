
def count(word):
        sum=0
        for char in word:
            vowal="aeiouAEIOU"
            if char in vowal:
                sum=sum+1
        return sum
                

                
def max_vowal(line):
    join={}
    words=[]
    max_vowal_count=0
    max_vowal_word=""
    words=line.split()
    for word in words:
        vowal_count=count(word)
        if vowal_count>max_vowal_count:
            max_vowal_count=vowal_count
            max_vowal_word=word
    join.update({"max_vowal_word":max_vowal_word,"max_vowal_count":max_vowal_count})
    print(join)
    # print(max_vowal_count)
    # print(max_vowal_word)
sentance=input("enter the sentance:")
max_vowal(sentance)

# list1=[2,3,5,4,7,9,8,6]
# target_num=int(input("enter the target number:"))
# def pair(list_num):
#     paired_numbers=""
#     duplicate=""
#     for i in range(len(list_num)):
#         for j in range(i+1,len(list_num)):
#             if list_num[i]+list_num[j]==target_num:
#                 if str((list_num[i],list_num[j])) in paired_numbers:
#                     duplicate=duplicate+str((list_num[i],list_num[j]))+","
#                 else:
#                     paired_numbers=paired_numbers+str((list_num[i],list_num[j]))+","
#     print(paired_numbers) 
#     print(duplicate)       
# pair(list1)

        
                

    

