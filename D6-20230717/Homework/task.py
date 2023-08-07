amount_of_an_item=int(input("enter the amount:"))
if amount_of_an_item>500 and amount_of_an_item<=1000:
    print("you have own the silver token")
elif amount_of_an_item>1000 and amount_of_an_item<5000:
    print("you have owned a golden token")
elif amount_of_an_item>=5000:
    print("you have owned a platinum token")
else
    print("no token available")