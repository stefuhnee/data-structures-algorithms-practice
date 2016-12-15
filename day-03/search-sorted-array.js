// i have a sorted array and i flipped it/rotated
/*
 Questions:
 - what do you mean by flipped it? i took a chunk from the start of the array and put it to the end
    - only mvoed from the front to the back
 - what should we do? our input is an array and a number, see if it is present
 - output: index of the position if present, -1 if not present
 - array could be very big
 - max or min? no?
 - negative values? potentially
 -can we manipulate array? no
 - sorted originally in ascending order
 - use the length? yes
 - optimize for time or space? both.
 */

[1, 2, 3, 4, 5]

[8,33,453,1 / 2,3,4,6]    // LOOKING FOR 5.

// find partition using binary seach
// you know where it is, search appropriate chunk for the target using binary search.
