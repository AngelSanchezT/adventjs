/*
Test #01
Test: return type

Expected:
"array"

Actual:
"array"
Test #02
Test: revealSabotage([
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
])

Expected:
[
  [
    "*",
    "2",
    "1",
    "1"
  ],
  [
    "1",
    "2",
    "*",
    "1"
  ],
  [
    "1",
    "2",
    "1",
    "1"
  ],
  [
    "*",
    "1",
    " ",
    " "
  ]
]

Actual:
[]
Test #03
Test: revealSabotage([
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', ' ']
])

Expected:
[
  [
    "1",
    "1",
    "1"
  ],
  [
    "1",
    "*",
    "1"
  ],
  [
    "1",
    "1",
    "1"
  ]
]

Actual:
[]
Test #04
Test: revealSabotage([
  ['*', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', '*']
])

Expected:
[
  [
    "*",
    "2",
    "1"
  ],
  [
    "2",
    "*",
    "2"
  ],
  [
    "1",
    "2",
    "*"
  ]
]

Actual:
[]
Test #05
Test: revealSabotage([
  ['*', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
])

Expected:
[
  [
    "*",
    "1",
    " "
  ],
  [
    "1",
    "1",
    " "
  ],
  [
    " ",
    " ",
    " "
  ]
]

Actual:
[]
Test #06
Test: revealSabotage([
  ['*', '*', '*'],
  ['*', ' ', '*'],
  ['*', '*', '*']
])

Expected:
[
  [
    "*",
    "*",
    "*"
  ],
  [
    "*",
    "8",
    "*"
  ],
  [
    "*",
    "*",
    "*"
  ]
]

Actual:
[]
Test #07
Test: revealSabotage([
  ['*', ' ', '*']
])

Expected:
[
  [
    "*",
    "2",
    "*"
  ]
]

Actual:
[]
Test #08
Test: revealSabotage([
  ['*', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', '*']
])

Expected:
[
  [
    "*",
    "1",
    " "
  ],
  [
    "1",
    "2",
    "1"
  ],
  [
    " ",
    "1",
    "*"
  ]
]

Actual:
[]
Test #09
Test: revealSabotage([
  ['*', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '*', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', '*']
])

Expected:
[
  [
    "*",
    "1",
    " ",
    " ",
    " "
  ],
  [
    "1",
    "2",
    "1",
    "1",
    " "
  ],
  [
    " ",
    "1",
    "*",
    "1",
    " "
  ],
  [
    " ",
    "1",
    "1",
    "2",
    "1"
  ],
  [
    " ",
    " ",
    " ",
    "1",
    "*"
  ]
]

Actual:
[]
Test #10 secret
Test #11 secret
Test #12 secret
Test #13 secret

*/