### BUT why Javascript is NOT true OOP?

In ES6, classes have been introduced but `class` is just a syntactical sugar or convenient syntax and Javascript still remains `prototype based`.<br />

#### But why Javascript can't implement true OOP?




#### We Don't have Private constructor in Javascript!
<div style="color:red;">But in Other OOP languages such as Java, we have it.</div>
##### Can we have private constructors ?

As you can easily guess, like any method we can provide access specifier to the constructor. If it’s made private, then it can only be accessed inside the class.

##### Do we need such ‘private constructors‘ ?

There are various scenarios where we can use private constructors. The major ones are

1) Internal Constructor chaining
2) Singleton class design pattern

##### What is a Singleton class?

As the name implies, a class is said to be singleton if it limits the number of objects of that class to one.<br />
We can’t have more than a single object for such classes.<br />
Singleton classes are employed extensively in concepts like Networking and Database Connectivity.

##### Design Pattern of Singleton classes:

The constructor of singleton class would be private so there must be another way to get the instance of that class. This problem is resolved using a class member instance and a factory method to return the class member