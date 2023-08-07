sentance=input("enter the sentance:")
def word_count(line):
    words=[]
    words=line.split()
    print(words)
    biggest_word=words[0]
    # print(biggest_word)
    for word in words:
        if len(word)>len(biggest_word):
            biggest_word=word
    print("The biggest word is:",biggest_word)
word_count(sentance)