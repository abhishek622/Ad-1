import {
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import ListX from '../components/ListX';
import UlPaper from '../components/UlPaper';
import UlDef from '../components/UlDef';
import LunderL from '../components/LunderL';
import Formula from '../components/Formula';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    overflowX: 'hidden',
  },
  whiteSpace: {
    marginBottom: theme.spacing(2),
  },
  mb: {
    paddingLeft: 20,
    '& li': {
      marginBottom: theme.spacing(0.5),
    },
  },
  dSpace: {
    margin: '0.5rem 0rem',
  },
  paper: {
    padding: theme.spacing(1),
  },
  imgHor: {
    maxWidth: 290,
    minHeight: 258,
  },
}));

const list1 = [
  {
    id: 1,
    name: 'Input ≥ 0',
  },
  {
    id: 2,
    name: 'Output ≥ 1',
  },
  {
    id: 3,
    name: 'Finiteness',
  },
  {
    id: 4,
    name: 'Definiteness',
  },
  {
    id: 5,
    name: 'Effectiveness',
  },
  {
    id: 6,
    name: 'Correctness',
  },
  {
    id: 7,
    name: 'Efficiency',
  },
];

const list2 = [
  {
    id: 1,
    name: 'Brute force',
  },
  {
    id: 2,
    name: 'Divide and conquer',
  },
  {
    id: 3,
    name: 'Greedy algorithm',
  },
  {
    id: 4,
    name: 'Dynamic programming',
  },
  {
    id: 5,
    name: 'Backtracking algorithm',
  },
  {
    id: 6,
    name: 'Branch and Bound',
  },
];

const list3 = [
  {
    id: 1,
    name: 'θ − Big theta',
  },
  {
    id: 2,
    name: 'O − Big Oh',
  },
  {
    id: 3,
    name: 'Ω − Big omega',
  },
  {
    id: 4,
    name: 'o - Little Oh',
  },
  {
    id: 5,
    name: 'ω − Little omega',
  },
];

const ulp1 = [
  {
    id: 1,
    point: 'The problem definition that is to be solved by the algorithm.',
  },
  {
    id: 2,
    point:
      'The constraints of the problem that must be considered while solving the problem.',
  },
  {
    id: 3,
    point: 'The input to be taken to solve the problem instance.',
  },
  {
    id: 4,
    point: 'The output to be expected when the problem is solved.',
  },
  {
    id: 5,
    point: 'The design approach to be followed',
  },
];

const ulp2 = [
  {
    id: 2,
    point:
      'Correctness of an algorithm corresponds to the fact that the algorithm is correct with respect to a given specification',
  },
  {
    id: 3,
    point:
      'An algorithm is called Totally correct for the given specification if and only if for any correct input data it halts and returns the correct output',
  },
  {
    id: 4,
    point:
      'An algorithm is Partially correct if, the algorithm receiving correct input data stops then its result is correct',
  },
  {
    id: 5,
    point: 'Total correctness is not decidable',
  },
];

// list with head
const uld1 = [
  {
    id: 1,
    topic: 'Recursive vs Iterative',
    point:
      'A recursive algorithm calls itself again and again until a base condition is met whereas iterative algorithms use loops to solve any problem.',
  },
  {
    id: 2,
    topic: 'Exact vs Approximate',
    point:
      'Algorithms that are capable of finding an exact optimal solution for a problem are known as the exact algorithm. For some problems, it is not possible to find the most optimized solution. In such cases an approximation algorithm is used that finds an approximate solution.',
  },
  {
    id: 3,
    topic: 'Serial vs Parallel vs Distributed',
    point:
      'In serial algorithms, one instruction is executed at a time while parallel algorithms divide the problem into subproblems and execute them on different processors. If parallel algorithms are distributed on different machines over a network, then they are known as distributed algorithms.',
  },
];

const uld2 = [
  {
    id: 1,
    topic: 'Counterexample',
    point:
      'To prove that an algorithm is incorrect is to produce an instance in which it yields an incorrect answer. Such instances are called counter-examples.',
  },
  {
    id: 2,
    topic: 'Induction',
    point:
      "Prove the formula for the smallest number that can be used in the given statement. Assume it's true for an arbitrary number n. Use the previous steps to prove that it's true for the next number n + 1",
  },
  {
    id: 3,
    topic: 'Loop Invariant',
    point:
      'A loop invariant is a condition that is necessarily true immediately before and immediately after each iteration of a loop. (basic step - Initialization, Maintenance, Termination)',
  },
];

const uld3 = [
  {
    id: 1,
    topic: 'Worst-case',
    point:
      'The maximum number of steps taken by the algorithm on any input instance.',
  },
  {
    id: 2,
    topic: 'Best-case',
    point:
      'The minimum number of steps taken by the algorithm on any input instance.',
  },
  {
    id: 3,
    topic: 'Average case',
    point:
      'An average number of steps taken by the algorithm on any input instance.',
  },
];

//list under list
const lul1 = [
  {
    id: 1,
    point: 'Proof by',
    subTopics: [
      'Counterexample (indirect proof )',
      'Induction (direct proof )',
      'Loop Invariant',
    ],
  },
  {
    id: 2,
    point: 'Other approaches',
    subTopics: [
      'proof by cases/enumeration',
      'proof by contradiction',
      'proof by contrapositive',
    ],
  },
];

function AD_CH1(props) {
  const classes = useStyles();

  // const f1 =
  return (
    <main className={classes.content}>
      <Typography variant="h5" component="h5" color="secondary" gutterBottom>
        INTRODUCTION TO ALGORITHM DESIGN
      </Typography>
      <Divider className={classes.dSpace} />
      <Typography variant="body1" gutterBottom>
        An algorithm is a finite sequence of basic and well-defined instructions
        for solving a class of problems or to perform a specific computation.
      </Typography>
      <div className={classes.whiteSpace} />
      <ListX name="Characteristics of algorithms" data={list1} />
      <UlPaper title="Algorithm Design: Pre-requisites" items={ulp1} />
      <ListX name="Algorithm Design: Formulation/Definition" data={list2} />
      <UlDef title="Algorithm Design: Testing/Implementation" items={uld1} />
      <UlPaper title="Algorithm Correctness" items={ulp2} />
      <LunderL title="Algorithm Correctness Proof" items={lul1} />
      <UlDef title="Algorithm Correctness Proof" items={uld2} />
      <Typography variant="h6" gutterBottom>
        Analysis of Algorithms
      </Typography>
      <ul className={classes.mb}>
        <li>
          <b>Analysis</b> : Measures the efficiency of an algorithm
        </li>
        <li>
          Gives a theoretical estimation of the resource required by the
          algorithm to solve a specific computational problem
        </li>
        <li>
          Usually time is our biggest concern, most algorithms require a fixed
          amount of space
        </li>
      </ul>
      <div className={classes.whiteSpace} />
      <UlDef title="Asymptotic Analysis" items={uld3} />
      <ListX name="Asymptotic Notations" data={list3} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle2">θ − Big theta</Typography>
            <Divider className={classes.dSpace} />
            <Typography variant="body1" gutterBottom>
              θ(g(n))= f(n): there exist +ve constants c<sub>1</sub>, c
              <sub>2</sub> and n<sub>0</sub> such that <br />
              <b>
                0 &#8804; c<sub>1</sub>
                g(n) &#8804; f(n) &#8804; c<sub>2</sub>g(n)
              </b>{' '}
              for all n &#8805; n<sub>0</sub>
            </Typography>
            <img
              className={classes.imgHor}
              src="https://media.geeksforgeeks.org/wp-content/uploads/AlgoAnalysis-1.png"
              alt=""
            />
            <Typography variant="body2">Example -</Typography>
            <ol className={classes.mb}>
              <li>
                3n + 10<sup>10</sup> = θ(n)
              </li>
              <li>
                n&#8730;n + nlog<sub>2</sub>(n) + 2 = θ(n&#8730;n)
              </li>
            </ol>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle2">O − Big Oh</Typography>
            <Divider className={classes.dSpace} />
            <Typography variant="body1" gutterBottom>
              O(g(n))= f(n): there exist +ve constants c and n<sub>0</sub> such
              that <br />
              <b> 0 &#8804; f(n) &#8804; cg(n)</b> for all n &#8805; n
              <sub>0</sub>
            </Typography>
            <img
              className={classes.imgHor}
              src="https://media.geeksforgeeks.org/wp-content/uploads/AlgoAnalysis-2.png"
              alt=""
            />
            <Typography variant="body2">Example -</Typography>
            <ol className={classes.mb}>
              <li>3n + 2 = O(n)</li>
              <li>
                6.2<sup>n</sup> + n<sup>2</sup> = O(2<sup>n</sup>)
              </li>
            </ol>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle2">&#8486; − Big omega</Typography>
            <Divider className={classes.dSpace} />
            <Typography variant="body1" gutterBottom>
              &#8486;(g(n))= f(n): there exist +ve constants c and n<sub>0</sub>{' '}
              such that <br />
              <b> 0 &#8804; cg(n) &#8804; f(n)</b> for all n &#8805; n
              <sub>0</sub>
            </Typography>
            <img
              className={classes.imgHor}
              src="https://media.geeksforgeeks.org/wp-content/uploads/AlgoAnalysis-3.png"
              alt=""
            />
            <Typography variant="body2">Example -</Typography>
            <ol className={classes.mb}>
              <li>3n + 2 = &#8486;(n)</li>
              <li>
                6.2<sup>n</sup> + n<sup>2</sup> = &#8486;(2<sup>n</sup>) =
                &#8486;(n<sup>2</sup>) = &#8486;(n) = &#8486;(1)
              </li>
            </ol>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle2">o − Little Oh</Typography>
            <Divider className={classes.dSpace} />
            <Typography variant="body1" gutterBottom>
              o(g(n))= f(n): there exist +Ve constants c &#62; 0, there exists a
              constant n<sub>0</sub> &#62; 0 such that <br />
              <b> 0 &#8804; f(n) &#60; cg(n)</b> for all n &#8805; n<sub>0</sub>
            </Typography>
            <Formula
              tex={`\\lim_{n \\rightarrow \\infty}\\frac{f(n)}{g(n)}=0`}
            />
            <Typography variant="body2">Example -</Typography>
            <ol className={classes.mb}>
              <li>
                3n = o(n<sup>2</sup>)
              </li>
              <li>
                6.2<sup>n</sup> + n<sup>2</sup> = o(3<sup>n</sup>)
              </li>
              <li>
                n<sup>3</sup> + n + 5 = o(n<sup>3.1</sup>)
              </li>
              <li>
                10n<sup>2</sup> + 4n + 2 = o(n<sup>3</sup>)
              </li>
            </ol>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle2">ω − Little omega</Typography>
            <Divider className={classes.dSpace} />
            <Typography variant="body1" gutterBottom>
              ω(g(n))= f(n): for any +ve constant c &#62; 0, there exists a
              constant n<sub>0</sub> &#62; 0 such that <br />
              <b> 0 &#8804; cg(n) &#60; f(n)</b> for all n &#8805; n<sub>0</sub>
            </Typography>
            <Formula
              tex={`\\lim_{n \\rightarrow \\infty}\\frac{f(n)}{g(n)}=\\infty`}
            />
            <Typography variant="body2">Example -</Typography>
            <ol className={classes.mb}>
              <li>3n + 2 = ω(log(n))</li>
              <li>
                10n<sup>3</sup> + 4n + 2 = ω(n<sup>2</sup>)
              </li>
              <li>
                2n<sup>2</sup> + nlog(n) + 1 = ω(n<sup>1.9999</sup>)
              </li>
              <li>
                15 x 3<sup>n</sup> + n<sup>2</sup> = ω(2<sup>n</sup>) = ω(n
                <sup>2</sup>) = ω(n) = ω(1)
              </li>
            </ol>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.whiteSpace} />
      <Typography variant="h6" gutterBottom>
        Relations Between θ, O, &#8486;
      </Typography>
      <Divider className={classes.dSpace} />
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={4} align="center">
          <img
            className={classes.imgHor}
            src="https://www.geeksforgeeks.org/wp-content/uploads/thetanotation.png"
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          <img
            className={classes.imgHor}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdG9Bjru5FgW1KnDeCO0KfFRaQh5WD0BoCOS6G1U3QmrUsilJoK9QOaiJIO0_4WZ_bcKo"
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          <img
            className={classes.imgHor}
            src="https://academyera.com/wp-content/uploads/2019/09/word-image-1.jpeg"
            alt=""
          />
        </Grid>
      </Grid>
      <div className={classes.whiteSpace} />
      <Typography variant="h6" gutterBottom>
        Properties
      </Typography>
      <Divider className={classes.dSpace} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" gutterBottom>
            Reflexivity -
          </Typography>
          <Typography variant="body1" gutterBottom>
            &emsp;&emsp;f(n) = θ(f(n)) <br />
            &emsp;&emsp;f(n) = O(f(n)) <br />
            &emsp;&emsp;f(n) = &#8486;(f(n))
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Symmetry -
          </Typography>
          <Typography variant="body1" gutterBottom>
            &emsp;&emsp;f(n) = θ(g(n)) iff g(n) = θ(f(n))
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Transitivity -
          </Typography>
          <ol className={classes.mb}>
            <li>
              f(n) = θ(g(n)) &#38; g(n) = θ(h(n))
              <br /> &#8658; f(n) = θ(h(n))
            </li>
            <li>
              f(n) = O(g(n)) &#38; g(n) = O(h(n))
              <br /> &#8658; f(n) = O(h(n))
            </li>
            <li>
              f(n) = &#8486;(g(n)) &#38; g(n) = &#8486;(h(n))
              <br /> &#8658; f(n) = &#8486;(h(n))
            </li>
            <li>
              f(n) = o(g(n)) &#38; g(n) = o(h(n))
              <br /> &#8658; f(n) = o(h(n))
            </li>
            <li>
              f(n) = ω(g(n)) &#38; g(n) = ω(h(n))
              <br /> &#8658; f(n) = ω(h(n))
            </li>
          </ol>
        </Grid>
        <div className={classes.whiteSpace} />
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" gutterBottom>
            <b>Lemma 1</b>: Let f(n) and g(n) be two asymptotic non-negative
            fun. Then,
            <br />
            max(f(n),g(n)) = θ(f(n)+g(n))
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>Lemma 2</b>: For two asymptotic funs. f(n) and g(n), <br />
            O(f(n))+O(g(n)) = O(max(f(n),g(n)))
          </Typography>
          <Typography variant="body1" gutterBottom>
            <b>Asymptotic notation ordered by slowest to fastest growing:</b>{' '}
            <br />
            θ(1) &#60; θ(log<sub>2</sub>​n) &#60; θ(n) &#60; θ(nlog<sub>2</sub>
            n) &#60; θ(n
            <sup>2</sup>) &#60; θ(n<sup>2</sup>log<sub>2</sub>n) &#60; θ(n
            <sup>3</sup>) &#60; θ(2<sup>n</sup>) &#60; θ(n!)
          </Typography>
        </Grid>
      </Grid>
    </main>
  );
}

export default AD_CH1;
