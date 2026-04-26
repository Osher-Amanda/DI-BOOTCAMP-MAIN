#OOP; OBJECT ORINTENTED PROGRAMING

#Class = a blueprint of the object, where we will define what are the properties and behaviors of the object

#Syntax

#the constructor function
class Dog:
    def __init__(self, breed, nickname, color, age, is trained = False):
     print('object was created')
     print(self)
     self.breed = breed
     self.nickname = nickname
     self.color = color
     self.age = age
     self.is_trained = is_trained
     self.dogs_years_age = age *7


#creating an object from the class Dog:
dog1 = Dog('chowchow', 'Lion', 'orange', '5')
dog2 - Dog('Collie', 'Lassy', 'beige and white', '15' True)

#this is a way of adding a specific attribute to/of the object which in this case, is a dog.
dog2.is_service_dog = True


print(dog1.color) #dot notation to access the attribute of the object
print(dog1.__dict__)
print(dog2.__dict__)

#self is the internal dictionary that has the properties from the class
#{breed:  -----, nickname:  -----, color:  -----}


#Exercise:  Create a new attribute to the Dog class called "is_trained" the value is a boolean and the default is False.
#Then run the code again.  What happensd with the objects that were created befire this new attribute was added? - I DID THIS AND ALSO THE AGE OF THE DOG WHICH IS A DIFFERENT EXERCISE (EG. 5 *7 = AGE OF DOG IN DOG YEARS BUT I DONT SEE THE OUTPUT/ANSWER OF THIS)


################## Methods = the behavior of the object ############
def bark(self):
   print(f'{self.nickname} is barking')

   dog3 = Dog('labrador', 'Rex', 'gold', '7, True')
   dog3.bark()

   #new exercise.  create a method to rename(new_name) the dog.  Ue the attribute to do so
dog3.nickname = Iris

print(dog3.nickname)

my_dogs = [dog1, dog2, dog3]

for dog in my_dogs:
   print(dog.nickname)
   