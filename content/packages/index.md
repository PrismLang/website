---
title: Prism Packages
description: The builtin packages in the Prism Programming Language.
---

## `math`

Every programming language has some kind of way of doing numbers and math.

Do not worry, programmers lie frequently about being math geniuses when they
really aren't. If they were math geniuses, they would be doing math, not writing
ads and social network games to steal people's money.

### Constants

Mathematical Constants

<div style="overflow: auto; border-radius: 3px; border: 1px solid rgba(0, 0, 0, .1)">

| Name          | Value             | Notes                     |
| ------------- | ----------------- | ------------------------- |
| E             | 2.718281828459045 | https://oeis.org/A001113  |
| Pi            | 3.141592653589793 | https://oeis.org/A000796  |
| Phi           | 1.618033988749895 | https://oeis.org/A001622  |
| Sqrt2         | 1.414213562373095 | https://oeis.org/A002193  |
| SqrtE         | 1.648721270700128 | https://oeis.org/A019774  |
| SqrtPi        | 1.772453850905516 | https://oeis.org/A002161  |
| SqrtPhi       | 1.272019649514068 | https://oeis.org/A139339  |
| Ln2           | 0.693147180559945 | https://oeis.org/A002162  |
| Log2E         | 1 / Ln2           |                           |
| Ln10          | 2.302585092994045 | https://oeis.org/A002392  |
| Log10E        | 1 / Ln10          |                           |

</div>

Floating-point limit values. Max is the largest finite value representable by
the type. SmallestNonzero is the smallest positive, non-zero value representable
by the type.

<div style="overflow: auto; border-radius: 3px; border: 1px solid rgba(0, 0, 0, .1)">

| Name                 | Value                   |
| -------------------- | ----------------------- |
| MaxFloat             | 1.7976931348623157e+308 |
| SmallestNonzeroFloat | 5e-324                  |

</div>

Integer limit values.

<div style="overflow: auto; border-radius: 3px; border: 1px solid rgba(0, 0, 0, .1)">

| Name   | Value                | Notes         |
| ------ | -------------------- | ------------- |
| MaxInt | 9223372036854775807  | (1 << 63) - 1 |
| MinInt | -9223372036854775808 | -1 << 63      |

</div>
