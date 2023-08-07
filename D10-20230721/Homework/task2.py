mixed_list=[1,2,"k","j",8,"k"]
integer_count=0
for elements in mixed_list:
    if type(elements) is int:
        integer_count=integer_count+1
    
print("The number of integers:",integer_count)