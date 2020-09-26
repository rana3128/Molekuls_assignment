# One rotten tomato spoils the bunch

You are given a M*N grid(G) which has a collection of normal and rotten tomatoes. Each grid cell can have 1 of 3 values(0, 1, 2)
```
G[i][j] = 0 ⇒ no tomato
G[i][j] = 1 ⇒ normal tomato
G[i][j] = -1 ⇒ rotten tomato
```

At end of each day, a rotten tomato rots its adjacent normal tomatoes. Adjacent is defined as top, down, left, right grid cells.
```
top ⇒ [i-1][j]
bottom ⇒ [i+1][j]
left ⇒ [i][j-1]
right ⇒ [i][j+1]
```

Compute the minimum number of days it will take to rot all the tomatoes in the grid, if its not possible to rot all tomatoes return -1.

### Evaluation Criteria
- Final working solution
- Coding style and formatting
- Modularization
- Computing Space and Time Complexity of Solution

### Sample Test
```
Input:
G
```
| -1 | 1 | 0 | -1 | 1 |
| --- | --- | --- | --- | --- |
| 1 | 0 | 1 | -1 | 1 |
| 1 | 0 | 0 | -1 | 1 |
```
Output: 2   # 2 days to rot all tomatoes
```
```
Input
G
```
| -1 | 1 | 0 | -1 | 1 |
| --- | --- | --- | --- | --- |
| 0 | 0 | 1 | -1 | 1 |
| 1 | 0 | 0 | -1 | 1 |
```
Output: -1    # bottom left tomato can never be rotten
```

**Extra Credit**
- A rotten tomato can also rot normal tomatoes that are diagonally adjacent to it
```
top_left ⇒ [i-1][j-1]
bottom_left ⇒ [i+1][j-1]
bottom_right ⇒ [i+1][j+1]
top_right ⇒ [i-1][j+1]
```
