def make_shirt( size, text ):
    print( "The size of the shirt is " + size + " and the message is " + text )

def make_shirt( size = "large", text = "I love Python" ):
    print( "The size of the shirt is " + size + " and the message is " + text ) 

make_shirt( "medium")
make_shirt("Small", "Keep Coding!")
