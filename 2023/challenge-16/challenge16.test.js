
/*

Test #01
Test: return type

Expected:
"object"

Actual:
"array"
Test #02
Test: transformTree([])

Expected:
null

Actual:
[]
Test #03
Test: transformTree([1])

Expected:
{
  "value": 1,
  "left": null,
  "right": null
}

Actual:
[
  1
]
Test #04
Test: transformTree([1, 2, 3])

Expected:
{
  "value": 1,
  "left": {
    "value": 2,
    "left": null,
    "right": null
  },
  "right": {
    "value": 3,
    "left": null,
    "right": null
  }
}

Actual:
[
  1,
  2,
  3
]
Test #05
Test: transformTree([1, 2, 3, 4, 5])

Expected:
{
  "value": 1,
  "left": {
    "value": 2,
    "left": {
      "value": 4,
      "left": null,
      "right": null
    },
    "right": {
      "value": 5,
      "left": null,
      "right": null
    }
  },
  "right": {
    "value": 3,
    "left": null,
    "right": null
  }
}

Actual:
[
  1,
  2,
  3,
  4,
  5
]
Test #06
Test: transformTree([1, 2, 3, 4, 5])

Expected:
{
  "value": 1,
  "left": {
    "value": 2,
    "left": {
      "value": 4,
      "left": null,
      "right": null
    },
    "right": {
      "value": 5,
      "left": null,
      "right": null
    }
  },
  "right": {
    "value": 3,
    "left": {
      "value": 6,
      "left": null,
      "right": null
    },
    "right": {
      "value": 7,
      "left": null,
      "right": null
    }
  }
}

Actual:
[
  1,
  2,
  3,
  4,
  5,
  6,
  7
]
Test #07
Test: transformTree([17, 0, null, null, 1])

Expected:
{
  "value": 17,
  "left": {
    "value": 0,
    "left": null,
    "right": {
      "value": 1,
      "left": null,
      "right": null
    }
  },
  "right": null
}

Actual:
[
  17,
  0,
  null,
  null,
  1
]
Test #08
Test: transformTree([3, 1, 0, 8, 12, null, 1])

Expected:
{
  "value": 3,
  "left": {
    "value": 1,
    "left": {
      "value": 8,
      "left": null,
      "right": null
    },
    "right": {
      "value": 12,
      "left": null,
      "right": null
    }
  },
  "right": {
    "value": 0,
    "left": null,
    "right": {
      "value": 1,
      "left": null,
      "right": null
    }
  }
}

Actual:
[
  3,
  1,
  0,
  8,
  12,
  null,
  1
]
Test #09
Test: transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])

Expected:
{
  "value": 2,
  "left": {
    "value": 7,
    "left": null,
    "right": {
      "value": 6,
      "left": {
        "value": 1,
        "left": null,
        "right": null
      },
      "right": {
        "value": 11,
        "left": null,
        "right": null
      }
    }
  },
  "right": {
    "value": 5,
    "left": null,
    "right": {
      "value": 9,
      "left": null,
      "right": {
        "value": 10,
        "left": null,
        "right": null
      }
    }
  }
}

Actual:
[
  2,
  7,
  5,
  null,
  6,
  null,
  9,
  null,
  null,
  1,
  11,
  null,
  null,
  null,
  10
]
Test #10 secret
Test #11 secret
Test #12 secret
Test #13 secret

*/