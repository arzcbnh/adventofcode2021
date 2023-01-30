# Advent of Code 2021

A Frankenstein monster of solutions in C for the Advent of Code 2021, a true representation of a hobbyist CS student's descent into madness.

## Building

Requires Meson to build.

```
$ meson setup build && cd build && meson compile
```


## Usage

The program only goes up to day 18, and the test script probably fails by then because everything is progressively held by more and more bubblegum.

```
./aoc [options] <day>

-c <filename>
	Loads a custom file <filename> from the current directory to be used as the program input. May be used to run arbitrary inputs for any day.

<day>
	Specify the day to solve. May be any integer between 1 and 18.
```

## Conclusion

C was a turning point in the history of programming languages. It's a "portable assembly" - at the time considered high-level, C allowed programmers to write readable code that could be run on any machine. Its proximity to the machine helped C rise to its current status as the canonical system programming language, having been used to write all major OSs.

As time went on, computers and software got extremely more complex, and now have new requirements for programming languages. C is now considered a low-level language - it's the first step after assembly, interacting directly with memory, free from modern abstractions. However, that only stands as a philosophy: memory and type safety shouldn't be taboo under any circumnstance.

It's time consuming to learn C. The language hasn't changed too much over the years, but a book like K&R is more of an introduction than a representation of its current state. Anyone who's ever used a contemporary or garbage-collected language will have a hard time spending all their energy on `const`ing types as much as possible, `malloc` and `free`ing at every moment, questioning if moving a single instruction up or down a line will be enough to confuse a reader. In fact, I refactored this AoC 2021 project three times over an entire year. Still, I never set all safety measures in place, I could never learn enough about how my ways were wrong, and I couldn't even finish an AoC year. The truth is, such energy expenditure shouldn't be required anymore, except for embedded systems. 

Although I hold a lot of contempt for C, it was important for my understanding of how computers work (or at least, used to work). I don't think I would've been able to dive into studying CS as a hobby if I had started with any other language. I would've never learned how memory is stored, organized, accessed, and how much modern interpreters hold my hand - which is actually a blessing.

If I ever have to work with C again - maybe for a job, or a system/embedded project, I might come back here. Then I'll read more books, refactor again, hopefully do things right, with skills learned from other languages... and finally finish this project.
