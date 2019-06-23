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

The `None` data type is used internally for objects which doesn't have any
value.
In some languages, a reference type variable can be declared without providing
an initial explicit value. In these cases, the variables are usually assigned
`None` value. Prism variables can't hold `None` values. This means that the
following snippet is invalid:

```prism
let response = null;
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

### Characters

Character is a data type that can only hold one character. Characters in Prism
are defined with single quotes.

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
map can be accessed using a key, which can be either Boolean, Integer, Character
or String. This key is hashed to make a hash key and this hash key is what is
actually mapped to the value. The keys and values can be any valid Prism
expression. The only constraint is that the key expression should evaluate to
any Hashable type - i.e. Boolean, Integer, Character or String.

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

And if you try to access a key that doesn't exist, Prism will return `None` to
let you know that no value is mapped to that key:

```prism
hashTable["void"];   # None
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
