import { Divider, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import TableX from '../components/TableX';
import UlDef from '../components/UlDef';
import CodeBox from '../components/CodeBox';
import ListX from '../components/ListX';
import UlPaper from '../components/UlPaper';
import MasterTheorem from './AdComponent/MasterTheorem';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    overflowX: 'hidden',
  },
  whiteSpace: {
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
  liDesign: {
    paddingLeft: 20,
    '& li': {
      marginBottom: theme.spacing(0.5),
      fontSize: '1rem',
    },
  },
  dSpace: {
    margin: '0.5rem 0rem',
  },
  imgHor: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: 290,
      // minHeight: 258,
    },
    // maxHeight: 460,
    maxWidth: 600,
  },
  imgContainer:{
    backgroundColor:'#f9fafc',
  },
}));

// table

const t1h = [
  {
    id: 1,
    name: 'Algorithm',
  },
  {
    id: 2,
    name: 'Best',
  },
  {
    id: 3,
    name: 'Average',
  },
  {
    id: 4,
    name: 'Worst',
  },
];

const t1b = [
  {
    algo: 'Selection Sort',
    best: 'Ω(n\u00b2)',
    avg: 'θ(n\u00b2)',
    worst: 'O(n\u00b2)',
  },
  {
    algo: 'Bubble Sort',
    best: 'Ω(n)',
    avg: 'θ(n\u00b2)',
    worst: 'O(n\u00b2)',
  },
  {
    algo: 'Insertion Sort',
    best: 'Ω(n)',
    avg: 'θ(n\u00b2)',
    worst: 'O(n\u00b2)',
  },
  {
    algo: 'Heap Sort',
    best: 'Ω(n log(n))',
    avg: 'θ(n log(n))',
    worst: 'O(n log(n))',
  },
  {
    algo: 'Quick Sort',
    best: 'Ω(n log(n))',
    avg: 'θ(n log(n))',
    worst: 'O(n\u00b2)',
  },
  {
    algo: 'Merge Sort',
    best: 'Ω(n log(n))',
    avg: 'θ(n log(n))',
    worst: 'O(n log(n))',
  },
];

const list1=[
  {
    id:1,
    name:'Substitution Method',
  },
  {
    id:2,
    name:'Recursion-tree Method',
  },
  {
    id:3,
    name:'Master Method',
  },
]

const ulp1=[
  {
    id:1,
    point:'Equation or an inequality that characterizes a function by its values on smaller inputs.',
  },
  {
    id:2,
    point:'Recurrence relations arise when we analyze the running time of iterative or recursive algorithms',
  },
  {
    id:3,
    point: <ListX name="Solution Methods" data={list1} />,
  },
]

// list with head

const uld1 = [
  {
    id: 1,
    topic: 'Divide',
    point:
      'the problem into a number of subproblems that are smaller instances of the same problem.',
  },
  {
    id: 2,
    topic: 'Conquer',
    point:
      'the subproblems by solving them recursively. If they are small enough, solve the subproblems as base cases.',
  },
  {
    id: 3,
    topic: 'Combine',
    point:
      'the solutions to the subproblems into the solution for the original problem.',
  },
];

const progm= [
`selectionSort(array, size)
  repeat (size - 1) times 
  set the first unsorted element as the minimum 
  for each of the unsorted elements
    if element < currentMinimum
      set element as new minimum 
  swap minimum with first unsorted position
end selectionSort`,
`bubbleSort(array)
  swapped <- false
  for i <- 1 to indexOfLastUnsortedElement-1
    if leftElement > rightElement
      swap leftElement and rightElement
      swapped <- true
end bubbleSort`,
`insertionSort(array)
  mark first element as sorted
  for each unsorted element X
    'extract' the element X
    for j <- lastSortedIndex down to 0
      if current element j > X
        move sorted element to the right by 1
    break loop and insert X here
end insertionSort`,
`MergeSort(arr[], l,  r)
If r > l
     1. Find the middle point to divide the array into two halves:  
             middle m = l+ (r-l)/2
     2. Call mergeSort for first half:   
             Call mergeSort(arr, l, m)
     3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)`,
`quickSort(array, leftmostIndex, rightmostIndex)
  if (leftmostIndex < rightmostIndex)
    pivotIndex <- partition(array,leftmostIndex, rightmostIndex)
    quickSort(array, leftmostIndex, pivotIndex - 1)
    quickSort(array, pivotIndex, rightmostIndex)

partition(array, leftmostIndex, rightmostIndex)
  set rightmostIndex as pivotIndex
  storeIndex <- leftmostIndex - 1
  for i <- leftmostIndex + 1 to rightmostIndex
  if element[i] < pivotElement
    swap element[i] and element[storeIndex]
    storeIndex++
  swap pivotElement and element[storeIndex+1]
return storeIndex + 1`,
`void heapify(int arr[], int n, int i) {
  // Find largest among root, left child and right child
  int largest = i;
  int left = 2 * i + 1;
  int right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest])
    largest = left;

  if (right < n && arr[right] > arr[largest])
    largest = right;

    // Swap and continue heapifying if root is not largest
    if (largest != i) {
      swap(&arr[i], &arr[largest]);
      heapify(arr, n, largest);
  }
}

// Build heap (rearrange array)
for (int i = n / 2 - 1; i >= 0; i--)
  heapify(arr, n, i);
  
// Heap sort
for (int i = n - 1; i >= 0; i--) {
  swap(&arr[0], &arr[i]);

  // Heapify root element to get highest element at root again
  heapify(arr, i, 0);
}`,
]

function AD_CH2() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Typography variant="h5" component="h5" color="secondary" gutterBottom>
        SEARCHING AND SORTING
      </Typography>
      <Divider className={classes.dSpace} />
      <div className={classes.whiteSpace}>
        <Typography variant="h6" gutterBottom>
          Time Complexity Table
        </Typography>
        <TableX name={t1h} rows={t1b} />
      </div>
      {/* Selection sort */}
      <Typography variant="h6" gutterBottom>
        Selection sort
      </Typography>
      <Divider className={classes.dSpace} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            This algorithm is called <b>selection sort</b> because it repeatedly
            selects the next-smallest element and swaps it into place.
          </Typography>
          <Typography variant='body1' gutterBottom>
          Space Complexity = O(1)  
          </Typography>
          <Typography variant='subtitle2'>Algorithm -</Typography>
         <CodeBox progm={progm[0]}/>
         <Typography variant='body1' gutterBottom>
        <b>First Pass</b>: The whole array is unsorted array and (-2) is the smallest number in the array. After finding (-2) as smallest number, it is swapped with first element of the array.
         </Typography>
        </Grid>
        <Grid item xs={12} md={6} align="center" >
          <img
            className={classes.imgHor}
            src="https://www.alphacodingskills.com/php/img/selection-sort.PNG"
            title="selection sort"
            alt=""
          />
        </Grid>
      </Grid>
      <div className={classes.whiteSpace} />

      {/* bubble sort */}
      <Typography variant="h6" gutterBottom>
      Bubble Sort
      </Typography>
      <Divider className={classes.dSpace} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
          Bubble Sort compares all the element one by one and sort them based on their values.
          <br />
          If we have total n elements, then we need to repeat this process for n-1 times.
          </Typography>
          <Typography variant='body1' gutterBottom>
          Space Complexity = O(1)  
          </Typography>
          <Typography variant='subtitle2'>Algorithm -</Typography>
         <CodeBox progm={progm[1]}/>
         <Typography variant='body1' gutterBottom>
        <b>First Pass</b>: (1) and (23) are compared and found in correct order(ascending order in this case). After that (23) and (10) are compared, since (23&#62;10), hence these numbers are swapped. Then (23) and (-2) are compared and swapped.
         </Typography>
        
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <img
            className={classes.imgHor}
            src="https://www.alphacodingskills.com/php/img/bubble-sort.PNG"
            title="Bubble sort"
            alt=""
          />
        </Grid>
      </Grid>
      <div className={classes.whiteSpace} />

{/* insertion sort */}
      <Typography variant="h6" gutterBottom>
      Insertion Sort
      </Typography>
      <Divider className={classes.dSpace} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
Insertion sort is based on the idea of consuming one element from unsorted array and inserting it at the correct position in the sorted array. This will result into increasing the length of the sorted array by one and decreasing the length of unsorted array by one after each iteration.          </Typography>
          <Typography variant='body1' gutterBottom>
          Space Complexity = O(1)  
          </Typography>
          <Typography variant='subtitle2'>Algorithm -</Typography>
         <CodeBox progm={progm[2]}/>
         <Typography variant='body1' gutterBottom>
        <b>First Pass</b>: The whole array is unsorted array and (23) is taken to be inserted into the sorted array. As (23) is the first element of sorted array and has no elements to be compared with, it remains at its position.
         </Typography>
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <img
            className={classes.imgHor}
            src="https://www.alphacodingskills.com/php/img/insertion-sort.PNG"
            title="Insertion Sort"
            alt=""
          />
        </Grid>
      </Grid>
      <div className={classes.whiteSpace} />

      <Typography variant="h6" gutterBottom>
        Divide-and-conquer
      </Typography>
      <Divider className={classes.dSpace} />
      <Typography variant="body1" gutterBottom>
        <b>divide-and-conquer</b>, breaks a problem into subproblems that are
        similar to the original problem, recursively solves the subproblems, and
        finally combines the solutions to the subproblems to solve the original
        problem.
      </Typography>

      <UlDef title="This technique can be divided into 3 parts:" items={uld1} />
      
      {/* merge sort */}
      <Typography variant="h6" gutterBottom>
        Merge sort
      </Typography>
      <Divider className={classes.dSpace} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
          It is based on the idea of dividing the unsorted array into several sub-array until each sub-array consists of a single element and merging those sub-array in such a way that results into a sorted array.
          </Typography>
          <Typography variant='body1' gutterBottom>Space Complexity: O(n)</Typography>
          <Typography variant='subtitle2'>Algorithm -</Typography>
         <CodeBox progm={progm[3]}/>
          <Typography variant="subtitle2" gutterBottom>
            Analysis of Merge Sort -
          </Typography>
          <ul className={classes.liDesign}>
            <li>Running time T(n) of Merge Sort</li>
            <li>Divide: computing the middle takes θ(1)</li>
            <li>Conquer: solving 2 subproblems takes 2T(n/2)</li>
            <li>Combine: merging n elements takes θ(n)</li>
            <li>Total: T(n) = θ(nlog(n))</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <img
            className={classes.imgHor}
            src="https://www.alphacodingskills.com/php/img/merge-sort.PNG"
            title="merge sort"
            alt=""
          />
        </Grid>
      </Grid>
      <div className={classes.whiteSpace} />

      {/* Quick sort */}
      <Typography variant="h6" gutterBottom>
      Quick Sort
      </Typography>
      <Divider className={classes.dSpace} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
          It is based on the idea of choosing one element as a pivot and partitioning the array around the pivot with left side of the pivot containing all elements less than the pivot and right side of the pivot containing all elements greater than the pivot.
          It is also called <b>partition-exchange sort</b>.
          </Typography>
          <Typography variant='body1' gutterBottom>Space Complexity: O(nlog(n))</Typography>
          <Typography variant='subtitle2'>Algorithm -</Typography>
         <CodeBox progm={progm[4]}/>
          <Typography variant="subtitle2" gutterBottom>
            Analysis of Quick Sort -
          </Typography>
          <ul className={classes.liDesign}>
            <li>Running time T(n) of Quick Sort</li>
            <li>Computing the pivot element takes θ(1)</li>
            <li>Solving partitioning takes 2T(n/2)</li>
            <li>Total: T(n) = θ(nlog(n))</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <img
            className={classes.imgHor}
            src="https://stackabuse.s3.amazonaws.com/media/quicksort-in-javascript-1.jpg"
            title="Quick Sort"
            alt=""
          />
        </Grid>
      </Grid>
      <div className={classes.whiteSpace} />

       {/* Heap Sort */}
       <Typography variant="h6" gutterBottom>
       Heap Sort
      </Typography>
      <Divider className={classes.dSpace} />
          <Typography variant="body1" gutterBottom>
          It involves building a max heap for increasing order sorting which contains largest element of the heap at the root. For decreasing order sorting min heap is used which contains smallest element of the heap at the root.
          <br /> The step for increasing order sorting of heap sort is summarized below:
          </Typography>
          <ol className={classes.liDesign}>
            <li>
           <b>Swap</b>: Remove the root element and put at the end of the array (nth position) Put the last item of the tree (heap) at the vacant place.
            </li>
            <li>
           <b>Remove</b>: Reduce the size of the heap by 1.
            </li>
            <li>
           <b>Heapify</b>: Heapify the root element again so that we have the highest element at root.
            </li>
            <li>
            The process is repeated until all the items of the list are sorted.
            </li>
          </ol>
          <Typography variant='body1' gutterBottom>Space Complexity: O(1)</Typography>
          <Typography variant='subtitle2'>Algorithm -</Typography>
         <CodeBox progm={progm[5]}/>
          <div className={classes.whiteSpace} />
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6} >
          <Typography variant='subtitle2'>Heap procedures for sorting -</Typography>
          <Divider className={classes.dSpace} />
          <Typography variant='body1' gutterBottom>
          &emsp;&emsp;MaxHeapify - O(lg n) <br />
          &emsp;&emsp;BuildMaxHeap - O(n) <br />
          &emsp;&emsp;HeapSort - O(n lg n)
          </Typography>
          </Grid>
          <Grid item xs={12} sm={6} >
          <Typography variant='subtitle2'>Heap Characteristics -</Typography>
          <Divider className={classes.dSpace} />
          <Typography variant='body1' gutterBottom>
          &emsp;&emsp;Height = &#8970;logn&#8971;<br />
          &emsp;&emsp;No. of leaves = &#8968;n/2&#8969; <br />
          &emsp;&emsp;No. of nodes in height h &#8804; &#8968;n/2<sup>h+1</sup>&#8969;
          </Typography>
          </Grid>
          </Grid>
          <div className={classes.whiteSpace} />
        <div className={classes.imgContainer} align='center'>
          <Typography variant='h6'><u>Steps</u></Typography>
          <img className={classes.imgHor} src="https://cdn.programiz.com/cdn/farfuture/VicaT2DyDXxbtM88OYklajepD4hkdSumEHTg2nBwe7s/mtime:1586942728/sites/tutorial2program/files/heap_sort.png" alt="" />
        </div>
      <div className={classes.whiteSpace} />
      <UlPaper title="Recurrence Relations" items={ulp1} />
      <div className={classes.whiteSpace} />
      <Paper className={classes.paper}>
      <Typography variant='h6' gutterBottom>Substitution Method</Typography>
      <Divider className={classes.dSpace} />
      <Typography variant='body1' gutterBottom>
      The Substitution Method Consists of two main steps: <br />
      &emsp;1. Guess the Solution. <br />
      &emsp;2. Use the mathematical induction to find the boundary condition and shows that the guess is correct.
      </Typography>
      </Paper>
      <div className={classes.whiteSpace} />
      <Paper className={classes.paper}>
      <Typography variant='h6' gutterBottom>Recursion-tree Method</Typography>
      <Divider className={classes.dSpace} />
      <Typography variant='body1'>
      Recursion Tree Method is a pictorial representation of an iteration method which is in the form of a tree where at each level nodes are expanded.
      <br />
      Step involved:
      </Typography>
      <ol className={classes.liDesign}>
        <li>
        Draw a recursion tree based on the given recurrence relation.
        </li>
        <li>
        Determine : <br /> 
        - Cost of each level <br />
        - Total number of levels in the recursion tree <br />
        - Number of nodes in the last level <br />
        - Cost of the last level <br />
        </li>
        <li>
        Add cost of all the levels of the recursion tree and simplify the expression so obtained in terms of asymptotic notation.
        </li>
      </ol>
      </Paper>
      <div className={classes.whiteSpace} />
      <Paper className={classes.paper}>
      <Typography variant='h6' gutterBottom>Master Method</Typography>
      <Divider className={classes.dSpace} />
        <Typography variant='body1'>
          Let a&#8805;1 and b&#62;1 be constant, let f(n) be a function, and T(n) be defined on non -ve integers
          by recurrence <br /><b>T(n) = aT(n/b) + f(n)</b> <br />
          where we can replace n/b by &#8970;n/b&#8971; or  &#8968;n/b&#8969; <br />
        </Typography>
        <MasterTheorem />
      </Paper>

    </main>
  );
}

export default AD_CH2;
