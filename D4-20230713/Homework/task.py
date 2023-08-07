# total_NumOfSubject=5 
# tamil,english,maths,science,social=90,98,95,96,93
# acedamic_marks=(tamil+english+maths+science+social)
# average_OfMarks=(acedamic_marks/total_NumOfSubject)
# print(average_OfMarks

list1=[10,20,30,40,50]
toDelete=30
def delecting_element(element,toDelete):
    index=-1
    for i in range(len(element)):
        if element[i]==toDelete:
            index=i
            break
    #print(index)
    if index!=-1:
        for i in range(index,len(element)-1):
            #print(i)
            element[i]=element[i+1]
            #print(element[i])
        element[len(element)-1]=None
        element=element[:-1]
        return element
        #print(element[len(element)-1])
final_list=delecting_element(list1,toDelete)
print(final_list) 
# list1=[10,30,20,40,50]
# toDelete=20