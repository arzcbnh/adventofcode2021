# Advent of Code 2018

This could've been much more.

## Running

Even though the script accepts all days as an argument, I only wrote until day 3, so it'll throw an error if you go above that.

```
./aoc <day>
```

## Conclusion

I truly thought that I loved this language for the past two years, but now I realize I hadn't used it enough. Lua has too many quirks that are unjustifiable. I'll only go in depth into one of them, though.

The last straw was the module system: I found out you can't require a module relatively from the script that's doing the requirement. There's a workaround using the ellipsis operator, but other modules not written with it are out of reach. That's been the case for almost a decade at this point.

In the mailing list, users are more interested in claiming that this and other quirks are so hard to solve, or actually _better_ than the conventional - meanwhile, these quirks have indeed been solved or never even existed in other languages. Even JavaScript has relative imports, and at least they admit how poorly made their language is.

Unless the truth is revealed to me in a dream, I probably won't be coming back to this. It's sad that now I can't say there's a language I love anymore.
