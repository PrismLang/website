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
change too. You need to have an open mind if you want to learn Prism in its early stage.

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

Lists are very similar to arrays. They can contain any type of variables, and
they can contain as many variables as you wish.

In the example below, `magicNumbers` is a Prism list that contains both `Number`
and `String` values.

```prism
let magicNumbers = [ 1337, "0x8BADF00D", 42 ];
```

List elements are indexed from 0 and can be accessed in the same way it's
accessed in most languages.

```prism
magicNumbers[1] # 0x8BADF00D
```
