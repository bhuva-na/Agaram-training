rate_Vegpizza=500
rate_NonvegPizza=700
extra_topping=80
soft_drinks=45
num_ofvegPizza=2
num_ofNonvegPizza=2
num_ofSoftdrinks=3
amount_ofExtraTopping= .20
order=((extra_topping*amount_ofExtraTopping)+(soft_drinks*num_ofSoftdrinks)+(rate_NonvegPizza*num_ofNonvegPizza)+(rate_Vegpizza*num_ofvegPizza))
delivery_charge=50
gst_rate=(order+delivery_charge)*.18
total_prize=(order+delivery_charge+gst_rate)
print(total_prize)
