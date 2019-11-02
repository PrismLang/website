---
title: Learn the Prism programming language
description: A crash course on Prism. Learn the Prism programming language in a few minutes.
---

Whether you are an experienced programmer or not, this website is intended for
everyone who wishes to learn the Prism programming language as soon as possible.

Note that, this guide is for the prototype version of Prism and doesn't cover
all of Prism and topics described here are explained in very simple terms -
terms that might not be used by Prism internally to refer to them.
Since Prism is currently not yet released to the public, the language can have
drastical changes with every iteration and consequently this guide will have to
change too. You need to have an open mind if you want to learn Prism in its early
stage.

## Hello, world!

To print an object in Prism, just write:

```prism
println("Hello, World!")
```

## Variables and Types

Prism is not statically typed. You don't need to declare the type of variable
while declaring it. The Prism interpreter can infer the type based off of the
type of the assigned value.

Prism uses the `let` keyword to declare variables. And you can reassign values
to these variables as needed.

For example, first we declare the variable `everything` and assign it to `42`.
And then we can reassign it to `"is possible"`.

```prism
let everything = 42;
everything = "is possible";
```

### None

The `none` data type is used for objects which doesn't have any value. A
variable can be declared without providing an initial explicit value. In these
cases, the variables are usually assigned the `none` value.

```prism
let response = none;
```

### Boolean

Boolean is a data type that holds only one bit of information. It can be
either `true` or `false`.

In the example below, `isValid` is a boolean variable with the value of `true`:

```prism
let isValid = true;
```

### Numbers

Prism, currently in the prototype version, only supports one type of number -
integers.

In the example below, `count` is a variable of assigned an initial value of
`13`:

```prism
let count = 13;
```

### Rune

Rune is a data type that represent unicode codepoints. Runes in Prism are
defined with single quotes.

```prism
let hashTag = '#';
```

### Strings

A String in Prism, as with most other languages, is a sequence of characters.
Strings in Prism are defined with double quotes.

```prism
let language = "Prism";
```

### Lists

Lists are very similar to arrays. They can contain any type of Prism data, and
they can contain as many elements as you wish. The elements can be any valid
Prism expression.

In the example below, `magicNumbers` is a Prism list that contains both `Number`
and `String` values as well as an expression.

```prism
let magicNumbers = [ 1337, "0x8BADF00D", 42, 10 + 3 ];
```

List elements are indexed from 0 and can be accessed in the same way it's
accessed in most languages.

```prism
magicNumbers[3]; # 13
```

### Hash Maps

A hash map is a data type that works with keys and values. Each value in a hash
map can be accessed using a key, which can be either Boolean, Integer, Rune or
String. This key is hashed to make a hash key and this hash key is what is
actually mapped to the value. The keys and values can be any valid Prism
expression. The only constraint is that the key expression should evaluate to
any Hashable type - i.e. Boolean, Integer, Rune or String.

```prism
let null = "0x00";

let hashTable = {
    "pound": '#',
    42: "anything" + " & " + "everything",
    10 + 3: "thirteen",
    null: 0,
};

hashTable["0x00"];  # 0
hashTable[13];      # thirteen
```

You can add values to the hash map even after you've initialized it and access
it the same way as before:

```prism
hashTable["traction"] = "speed";
hashTable["traction"];   # speed
```

And if you try to access a key that doesn't exist, Prism will return `none` to
let you know that no value is mapped to that key:

```prism
hashTable["void"];   # none
```

One thing to note here is that hash maps are not ordered in the same way you've
declare or initialize it. So, do not rely on their ordering while working with
them.

## Basic Operators

### Arithmetic Operators

Just as any other programming languages, the addition, subtraction,
multiplication, and division operators can be used with numbers.

```prism
println(40 + (5 + 15) * 30 / 10);  # 100
```

The `+` operator can be used with `String`s to concatenate them:

```prism
println("Hello, " + "world!");  # Hello, world!
```

The unary `+` and `-` operators can be used to represent positive and negative
numbers, respectively. Numbers are, by default, positive.

```prism
println(+42); # 42
println(-13); # -13
```

These can be used with `Boolean` values too, since `true` evaluates to `1` and
`false` evaluates to `0`.

```prism
println(-true); # -1
println(false); # 0
```

### Relational Operators

As with most other languages, the relational operators are used in Prism to
check the relation between two operands:

```prism
println(13 == 42);  # false
println(13 != 42);  # true
println(13 > 42);   # false
println(13 < 42);   # true
println(13 >= 42);  # false
println(13 <= 42);  # true
```

### Logical Operators

The unary `!` operator is used as the negation operator in Prism, as with most
other languages. It inverts the value (or logical state) of the expression's
truthfulness.

```prism
println(!false);    # true
println(!!13);      # true
println(!"hello");  # false
```

## Conditionals

Prism currently only features *if-else* mechanisim for implementing conditional
logic.
If an expression wrapped in parentheses next to an `if` keyword evaluates to
`true`, then code within that branch (i.e. the immediately-following code that
is wrapped in curly braces) is executed. Otherwise, the code within the `else`
branch is executed.

```prism
if (choice == 42) {
    println("You've the answer to the ultimate question of life, the universe, and everything");
} else {
    println("Keep looking for the answer.");
}
```

### Conditional Expressions

Conditional statements are useful for representing stateful logic, but you may
find that you repeat yourself when writing them. In the example above, you
simply print a `String` in each branch. To avoid this repetition, Prism offers
conditional expressions. The last example can be rewritten as follows:

```prism
let outcome = if (choice == 42) {
    "You've the answer to the ultimate question of life, the universe, and everything";
} else {
    "Keep looking for the answer.";
};

println(outcome);
```

Implicitly, each conditional branch returns the result of the expression on its
final line, so you don't need to use a return keyword. In this example,
`outcome` is assigned an initial value from the result of the if-else
expression.

Prism does not include a traditional [ternary operator](https://en.wikipedia.org/wiki/%3F:),
instead favoring the use of conditional expressions.

## Loops

No programming language would be complete without some form of
<abbr title="And that's why HTML is not a programming language.">iteration</abbr>
(repeated execution of a block of statements) or loops. Prism can iterate
through the `until` statement. If you're familiar with other languages, it's
similar to the `while` loop.

If an expression wrapped in parentheses next to a `until` keyword evaluates to
`true`, then code within that branch (i.e. the immediately-following code that
is wrapped in curly braces) is executed, until the aforementioned expression
evaluates to `false` - then the loop stops and execution goes to the next line.

The following example will print all odd numbers from `1` to `13`.
```prism
let counter = 1;

until (counter <= 13) {
    println(counter);
    counter = counter + 2;
}
```

## Functions

You can group one or more expressions into a function. Rather than repeating
the same series of expressions each time that you need a result, you can wrap
the expressions in a function and call that function instead.

In Prism, a function is an expression. To declare a function, use the `func`
keyword followed by the types of inputs that your function takes, if any, and
then assign it to a variable that will be the function name. A function's body
is where you define expressions that are called when your function is invoked.

Here's a complete Prism function that returns the absolute value of the passed
number:

```prism
let getAbsolute = func (num) {
    if (num < 0) {
        return -num;
    } else {
        return num;
    }
}
```

The function in the example above has the name `getAbsolute`. It takes one
`Number` as an input. It returns a result of type `Number`.

To call a function, use its name, followed by the invocation operator (`()`)
with the arguments it takes as inputs.

Building on the previous example, the `outcome` variable is initialized with the
result obtained from calling `getAbsolute` with `-13` as its arguments.

```prism
let outcome = getAbsolute(-13);
println(outcome);   # 13
```

When declaring a function, you can specify any number of arguments (or no
arguments at all). In the example above, `getAbsolute()` takes one argument
named `num`. Within the function, you can refer to the argument by using its
name.

### Simplifying declarations

`getAbsolute()` is a fairly simple function. The function checks a condition and
then immediately returns. Utilizing the implicit returning of the result of the
if-else expression contained in the function, we can simplify our function as
shown in the following example:

```prism
let getAbsolute = func (num) {
    return if (num < 0) {
        -num;
    } else {
        num;
    }
}
```

Implicitly, functions in Prism returns the result of the expression on its
final line, so you don't need to use a return keyword in such situations.
So, we can further simplify the function as shown in the example below:

```prism
let getAbsolute = func (num) {
    if (num < 0) {
        -num;
    } else {
        num;
    }
}
```

### Anonymous Functions

Not every function needs a name. Some functions are more directly identified by
their inputs and outputs. These functions are called anonymous functions.
Anonymous functions are generally used as arguments being passed to higher-order
functions (more on that later), or used for constructing the result of a
higehr-order function that needs to return a function.

```prism
func (num) {
    num * 2
}
```

You can keep a reference to an anonymous function, using this reference to call
the anonymous function later. You can also pass the reference around your
application, as with other reference types. It fulfills the same role for the
function type as literals do for other data types.

```prism
let getDouble = func (num) {
    num * 2
}
```

As you might have guessed it by now, named functions in Prism are anonymous
functions bound to an identifier. Functions are literals in Prism.

### Higher-order Functions

Functions that use other functions as arguments or return another function as
its result are called higher-order functions. Prism functions supports both -
taking another function as an argument and returning another function as its
result. Therefore, all Prism functions are first-class functions (as it treats
functions as first-class citizens).

Here's an example of a higher-order function:

```prism
let funcWrapper = func (arg, fun) {
    fun(arg)
}
```

The `funcWrapper()` function takes two arguments - a literal `arg` and function
`fun` - and returns the result of `fun()` which takes the `arg` as its input.

You can call `funcWrapper()` by passing a literal and a function, as shown in
the following example:

```prism
let outcome = funcWrapper(-42, getAbsolute);
println(outcome);   # 42
```

In the example above, we call `funcWrapper()` with the arguments `-42` and the
`getAbsolute()` function we defined previously and the output is assigned to the
`outcome` variable.

### Closures

Functions being first-class citizens in Prism, they are able to form closures.
A closure is the combination of a function and the lexical environment within
which that function was declared. This environment consists of any local
variables that were in-scope at the time the closure was created.

```prism
let multiplier = func (C) {
    func (num) { num * C }
}

let multiplySeven = multiplier(7);
let multiplyZero = multiplier(0);

println(multiplySeven(191));    # 1337
println(multiplyZero(1337));    # 0
```

In this example, we have defined a function `multiplier()`, which takes a single
argument, `C`, and returns a new anonymous function. The function it returns
takes a single argument, `num`, and returns the multiplication of `num` and `C`.

In essence, `multiplier` is a function factory — it creates functions which can
multiply a specific value to their argument. In the above example we use our
function factory to create two new functions — one that multiplies `7` to its
argument, and one that multiplies `0`.

`multiplySeven` & `multiplyZero` are both closures. They share the same function
body definition, but store different lexical environments. In `multiplySeven`'s
lexical environment, `C` is `7`, while in the lexical environment for
`multiplyZero`, `C` is `0`.

Now, when we call `multiplySevel` with an argument of `191`, it multiplies it
with the previously stored value `7` and returns the output `1337`. Similarly,
`multiplyZero` returns `0`.

### Immediately Invoked Function Expression

If you're familiar with ECMAScript, you might already know this. Essentially, an
immediately invoked function expression (or IIFE) is a function that runs as
soon as it's defined.

It can be used to protect against polluting the global environment and
simultaneously allow public access to methods while retaining privacy for
variables defined within the function.

```prism
func () {
    # Statements
}();
```

It contains two major parts. The first is the anonymous function so that the
expressions defined inside the anonymous function doesn't pollute the global
scope. The second part creates the immediately executing function expression
`()` through which Prism will directly interpret the function.

In the example below, the function becomes a function expression which is
immediately executed. The variable within the expression can't be accessed from
outside it:

```prism
func () {
    let str = "I'm untouchable";
    print(str);
}();

# Variable `str` is not accessible from the outside scope
print(str); # NameError: `str` is not defined
```

Assigning the IIFE to a variable stores the function's return value, not the
function definition itself.

```prism
let outcome = func () {
    let str = "I'm untouchable!";
    return str;
}();

print(outcome); # I'm untouchable!
```

## Built-in Functions

### `append()`

The `append` function is used to append elements at the end of a `list`. It
returns a new `list` with the new element appended to it and the original list
remains unchanged.

```prism
let foods = [ "Pizza", "Burger" ];

append(foods, "Donut");
println(foods); # [Pizza, Burger]

foods = append(foods, "Donut");
println(foods); # [Pizza, Burger, Donut]
```

### `bool()`

The `bool` function returns the boolean value of the specified data type.

```prism
bool(false)         # false
bool(0)             # false
bool(13)            # true
bool("Traction")    # true
bool({ "v": 0 })    # true
```

### `chr()`

The `chr` function returns a rune representing a character whose Unicode code
point is specified. This is the inverse of `ord`.

```prism
chr(97);    # 'a'
chr(8364);  # '€'
```

### `first()`

The `first` function returns the first element in the specified list. If the
list is empty, it returns `none`.

```prism
first([ 1, 3, 3, 7 ]);  # 1
first([]);              # none
```

### `input()`

The `input` function is used to take single line input from the user's standard
input device. When the line with the `input()` is executed, it waits for the
user to give an input and it returns the input from the user as a `string`.

```prism
>>> input()
Hello, Prism!   # User input
Hello, Prism!   # Return value
```

If you intend to store the input string, you can assign the `input()` to a
variable and access it as you'd do with any other variables.

```
let message = input();  # User input: Hakuna Matata
println(message);       # Hakuna Matata
```

And if you want the input prompt to be descriptive, you can do it by passing the
prompt to the `input` function, as shown in the example below:

```prism
let name = input("What's your name? "); # User input: Traction
println(name);                          # Traction
```

### `last()`

The `last` function returns the last element in the specified list. If the list
is empty, it returns `none`.

```prism
last([ 1, 3, 3, 7 ]);   # 7
last([]);               # none
```

### `len()`

The `len` function is used to find the number of elements in a lists, pairs in a
hash map, unicode codepoints in a strings or rune.

```prism
let arraySize = len([ 13, 42 ]);
println(arraySize);             # 2

let hashSize = len({
    "user": "Traction",
    "username": "k3rn31p4nic",
});
println(hashSize);              # 2

let stringLength = len("Starman");
println(stringLength);          # 7

stringLength = len("😂");
println(stringLength);          # 3

len runeLength = len('#');
println(runeLength);            # 1

runeLength = len('€');
println(runeLength);            # 3
```

### `lower()`

The `lower` function returns the specified string in lowercase.

```prism
lower("Traction");  # "traction"
```

### `ord()`

The `ord` function returns an integer representing the Unicode code point of
the specified rune or string representing one Unicode character. This is the
inverse of `chr`.

```prism
ord('a');   # 97
ord('€');   # 8364
```

### `reverse()`

The `reverse` function is used to reverse a `list`. It returns a new `list` with
the elements in reverse order and the original list remains unchanged.

```prism
let leet = [1, 3, 3, 7];
let revLeet = reverse(leet);

print(leet);                    # [1, 3, 3, 7]
print(revLeet);                 # [7, 3, 3, 1]
```

### `str()`

The `str` function returns the string representation of the specified object.

```prism
str(13)         # "13"
str(false)      # "false"
str('#')        # "#"
str("Traction") # "Traction"
str({ "v": 0 }) # "{ v: 0 }"
```

### `sum()`

The `sum` function returns the sum of all the elements of a number `list`.

```prism
let numbers = [1000, 7, 30, 300];
sum(numbers);   # 1337
```

### `type()`

The `type` function returns the data type of the object that's passed as the
argument, as shown in the example below:

```prism
let dataType = type("Don't Panic");
println(dataType);                  # STRING

dataType = type({"Cyber": "Punk"});
println(dataType);                  # HASH
```

### `upper()`

The `upper` function returns the specified string in uppercase.

```prism
upper("Traction");  # "TRACTION"
```

## Modules and Packages

Every Prism source file is a module. You can `import` exported objects from any
module and they will be available under the same namespace.

```prism
# moduleOne.prism
let id = 13;
let user = "traction";
let Name = user + str(id);
```

Now you can import `moduleOne` in any other Prism code and use the exported
objects.

```prism
import moduleOne;

print(moduleOne.Name);   # traction13
print(moduleOne.user);   # none
```

A package is a collection of multiple modules in one directory. You can `import`
a package and all the exported objects in all the modules in that package will
be available under the same namespace. That means, if you've multiple objects
with the same name, it'll be overriden by the object that's imported at last in
the lexical order of importing the modules.


If your package directory structure is something like this:
```
packageOne/moduleOne.prism
packageOne/moduleTwo.prism
packageOne/subPackage/moduleThree.prism
```

You can import all the modules under `packageOne` by just importing the package.
Note that, modules in subdirectories won't be imported. So, in this case, only
`moduleOne` and `moduleTwo` will be imported under the `packageOne` namespace.
And all the exported objects in those modules can be accessed using the same
namespace.

```prism
>>> import packageOne;
<module "packageOne">
>>> packageOne.SomeVar;
"SomeValue"
```

Any object in a module that has a name binding starting with an uppercase
character is exported from that module. All the other objects are private to
that module. And you can export any number of objects from a module.
