---
title: Prism Docs
description: The Prism Programming Language Usage Documentation.
---

### Prism Program Files

Prism programs are saved with the `.prism` extension. If you want to run your
Prism program, open Terminal in the directory where your program is there and
run it as follows:

```prism
$ prism hello_world.prism
```

### Prism Interactive Shell

Prism offers a command line interface to run Prism code without having to write
to any files with its interactive shell. If you just want to test a few lines of
Prism code as soon as possible, you don't have to write a program and save it
into a file! Use the Prism interactive shell.

The interactive shell is just one command away from your terminal:

```prism
$ prism
```

This brings up the Prism interactive shell, where you can run any Prism code:

```prism
Prism prototype version on windows/386!
Welcome to the interactive shell.
>>>
```

Once the interactive shell is started, you can issue any command at the prompt
`>>>`:

```prism
Prism prototype version on windows/386!
Welcome to the interactive shell.
>>> println("Hello, World!")
Hello, World!
None
>>> let x = (5 + 10 * 2 + 15 / 3) * 2 + -10
>>> x
50
```

### Prism Installation Directory

If you install Prism with the provided installer, it'll install the Prism
binaries in the following path, depending on your operating system:

* `/usr/local/bin/prism` - macOS and Linux based operating systems

* `%SYSTEMROOT%\prism.exe` - Windows operating systems

If you want to uninstall Prism, all you need to do is remove the aforementioned
file and you're good to go.


### Operator Precedence

The following table summarizes the operator precedence in Prism, from highest
precedence (most binding) to lowest precedence (least binding). Unless
explicitly stated, operators are binary.

<div style="overflow: auto; border-radius: 3px; border: 1px solid rgba(0, 0, 0, .1)">

| Precedence    | Operator      | Description               | Associativity |
| :-----------: | ------------- | ------------------------- | ------------- |
| 0             | `()`          | Parentheses / Grouping    | Left-to-right |
| 1             | `obj[index]`  | Subscription              | Left-to-right |
| 2             | `f(args...)`  | Function call             | Left-to-right |
| 3             | `~`           | Bitwise NOT               | Right-to-left |
|               | `!`           | Logical NOT               | Right-to-left |
|               | `+`           | Unary plus                | Right-to-left |
|               | `-`           | Unary minus               | Right-to-left |
| 4             | `%`           | Modulo / Remainder        | Left-to-right |
|               | `/`           | Division                  | Left-to-right |
|               | `*`           | Multiplication            | Left-to-right |
| 5             | `+`           | Addition                  | Left-to-right |
|               | `-`           | Subtraction               | Left-to-right |
| 6             | `<<`          | Bitwise Left Shift        | Left-to-right |
|               | `>>`          | Bitwise Right Shift       | Left-to-right |
| 7             | `&`           | Bitwise AND               | Left-to-right |
| 8             | `^`           | Bitwise XOR               | Left-to-right |
| 9             | `|`           | Bitwise OR                | Left-to-right |
| 10            | `<`           | Less than                 | Left-to-right |
|               | `<=`          | Less than or equal to     | Left-to-right |
|               | `>`           | Greater than              | Left-to-right |
|               | `>=`          | Greater than or equal to  | Left-to-right |
| 11            | `==`          | Equal to                  | Left-to-right |
|               | `!=`          | Not equal to              | Left-to-right |
| 12            | `&&`          | Logical AND               | Left-to-right |
| 13            | `||`          | Logical OR                | Left-to-right |
| 14            | `=`           | Direct assignment         | Right-to-left |

</div>
