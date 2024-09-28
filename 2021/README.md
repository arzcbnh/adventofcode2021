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
