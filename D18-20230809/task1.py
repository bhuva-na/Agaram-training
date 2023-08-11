# list1=[2,3,3,2]
# for i in range(len(list1)):
#     if list1[i]==3:
#         list1[i]="*"
#     # else:
#     #     b=b+[i]
# print(list1)

# zero=[1,0,2,0,3,4,5,0]
# num=[]
# final=[]
# for i in zero:
#     num=num+[i]
#     #print(num)
#     if i==0:
#         num=num+[i]
# print(num)
# for j in range(len(zero)):
#     final=final+[num[j]]
# print(final)


# zero=[1,0,2,0,3,4,5,0]
# # num=[]
# # final=[]
# for i in range(len(zero)):
#     # n=num+[i]
#     #print(num)
#     if zero[i]==0:
#         zero[i]=("0","0")
# print(zero)
# for j in range(len(zero)):
#     final=final+[num[j]]
# print(final)


list1=["flower","flow","flight"]
letters=""
longest_word=""
for word in list1:
    # print(word)
    for char in word:
        # print(char)
        if char not in  letters:
            letters=letters+char
            # print(letters)
        if char  in letters:
                # print(char)
            longest_word=longest_word+char
    # for char1 in longest_word:
        # print(char1)
print(longest_word)
print(letters)

