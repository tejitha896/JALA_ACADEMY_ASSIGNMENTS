#1. Write a function for arithmetic operators(+,-,*,/)
def arithmetic(a, b):#define function with parameter 
    print("Addition:", a + b)
    print("Subtraction:", a - b)
    print("Multiplication:", a * b)
#takes the input from user
a=int(input("enter A value from the user  :"))
b=int(input("enter B value from the user  :"))
arithmetic(a,b)#calling the function
print("********************************")
#2.Write a method for increment and decrement operators(++, --)
def inc_dec(n):
    # Increment
    n += 1
    print("After Increment:", n)
    # Decrement
    n -= 1
    print("After Decrement:", n)

num=int(input("enter a number : "))
inc_dec(num)

print("********************************")

#3. Write a program to find the two numbers equal or not.
def check(num1,num2):
    if num1==num2: #check the given 2 numbers are equal or not by using "==" operator.
        print("the Two values are equal")
    else:
        print("these two values are not equal")
#take the values from user 
num1=int(input("enter a number1 value:"))
num2=int(input("enter a number2 value:"))
check(num1,num2)
print("********************************")

#4. Program for relational operators (<,<==, >, >==)
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print("a < b :", a < b)  #checks less than or not
print("a <= b :", a <= b)#checks (lessthan or equal to) or not
print("a > b :", a > b)#checks greater than or not
print("a >= b :", a >= b)#checks greater than or not
print("a == b :", a == b)#checks equal to or not
print("a != b :", a != b)#checks not equal to or not

#5. Print the smaller and larger number
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

if a > b:  #check largest number by using relational operator
    print("Larger number:", a)
    print("Smaller number:", b)
elif b > a: #check largest number by using relational operator
    print("Larger number:", b)
    print("Smaller number:", a)
else:
    print("Both numbers are equal")





              
