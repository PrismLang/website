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

* `/usr/bin/prism` - macOS and Linux based operating systems

* `%SYSTEMROOT%\prism.exe` - Windows operating systems

If you want to uninstall Prism, all you need to do is remove the aforementioned
file and you're good to go.
