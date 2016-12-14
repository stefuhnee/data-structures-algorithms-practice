'use strict';

// 1 original, 1 temporary spindle, 1 goal spindle. The temporary changes every time one plate gets to its final resting place. All leftover plates are stacked in order on a new original place. Recursive.
// moving largest disc to final place (spinde 3), then doing operation with n-1 dsics. move n-1 disc (all remaining discs in stack) to spindle 2. Repeat.

/*
S1    S2    S3
N     0     0
0     n-1   n   ---> largest disc moved to s3, n-1 stack moved to s2.

*/
