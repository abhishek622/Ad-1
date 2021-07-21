import {
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Formula from '../components/Formula';
import LunderL from '../components/LunderL';
import OlPaper from '../components/OlPaper';
import TableX from '../components/TableX';
import UlDef from '../components/UlDef';
import UlPaper from '../components/UlPaper';
import kAlgo from '../images/kAlgo.jpg';
import dAlgo from '../images/dAlgo.jpg';

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
  imgContainer: {
    backgroundColor: '#f9fafc',
  },
}));

const lul0 = [
  {
    id: 1,
    point: 'If (u, v) ∈ E, then vertex v is adjacent to vertex u',
    subTopics: ['|E| = O(|V|^2)'],
  },
  {
    id: 2,
    point: 'Adjacency relationship is:',
    subTopics: [
      'Symmetric if G is undirected.',
      'Not necessarily if G is dire',
    ],
  },
  {
    id: 3,
    point: 'If G is connecteds:',
    subTopics: [
      'There is a path between every pair of vertices.',
      '|E| ≥ |V| - 1',
      'if |E| = |V| – 1, then G is a tree',
    ],
  },
];

const lul1 = [
  {
    id: 1,
    point: 'Pros',
    subTopics: [
      'Space-efficient, when a graph is sparse',
      'Can be modified to support many graph variants',
    ],
  },
  {
    id: 2,
    point: 'Cons',
    subTopics: [
      `Determining if an edge (u,v) belongs to G is not efficient`,
      'Have to search in u’s adjacency list. θ(degree(u)) time',
      'θ(V) in the worst case',
    ],
  },
];

const lul2 = [
  {
    id: 1,
    point:
      'Expands the frontier between discovered and undiscovered vertices uniformly across the breadth of the frontier.',
    subTopics: [
      'A vertex is “discovered” the first time it is encountered during the search.',
      'A vertex is “finished” if all vertices adjacent to it have been discovered.',
    ],
  },
  {
    id: 2,
    point: 'Colors the vertices to keep track of progress',
    subTopics: [
      'White – Undiscovered',
      'Gray – Discovered but not finished',
      'Black – Finished',
    ],
  },
];

const lul3 = [
  {
    id: 1,
    point:
      'A standard BFS implementation puts each vertex of the graph into one of two categories',
    subTopics: ['Visited', 'Not Visited'],
  },
  {
    id: 2,
    point: 'The algorithm works as follows',
    subTopics: [
      "Start by putting any one of the graph's vertices at the back of a queue.",
      'Take the front item of the queue and add it to the visited list.',
      "Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the back of the queue.",
      'Keep repeating steps 2 and 3 until the queue is empty.',
    ],
  },
];

const lul4 = [
  {
    id: 1,
    point:
      'A standard DFS implementation puts each vertex of the graph into one of two categories',
    subTopics: ['Visited', 'Not Visited'],
  },
  {
    id: 2,
    point: 'The DFS algorithm works as follows',
    subTopics: [
      "Start by putting any one of the graph's vertices on top of a stack.",
      'Take the top item of the stack and add it to the visited list.',
      "Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack.",
      'Keep repeating steps 2 and 3 until the stack is empty.',
    ],
  },
];

const olp1 = [
  {
    id: 1,
    point: 'To build index by search index',
  },
  {
    id: 2,
    point: 'For GPS navigation',
  },
  {
    id: 3,
    point: 'Path finding algorithms',
  },
  {
    id: 4,
    point: 'In Ford-Fulkerson algorithm to find maximum flow in a network',
  },
  {
    id: 5,
    point: 'Cycle detection in an undirected graph',
  },
  {
    id: 6,
    point: 'In minimum spanning treeh',
  },
];

const olp2 = [
  {
    id: 1,
    point: 'For finding the path',
  },
  {
    id: 2,
    point: 'To test if the graph is bipartite',
  },
  {
    id: 3,
    point: 'For finding the strongly connected components of a graph',
  },
  {
    id: 4,
    point: 'For detecting cycles in a graph',
  },
];

const t1h = [
  { id: 1, name: 'BFS' },
  { id: 2, name: 'DFS' },
];

const t1b = [
  {
    name: 'BFS finds the shortest path to the destination.',
    diff: 'DFS goes to the bottom of a subtree, then backtracks.',
  },
  {
    name: 'It uses a queue to keep track of the next location to visit.',
    diff: 'It uses a stack to keep track of the next location to visit.',
  },
  {
    name: 'BFS traverses according to tree level. ',
    diff: 'DFS traverses according to tree depth.',
  },
  {
    name: 'It is implemented using FIFO list.',
    diff: 'It is implemented using LIFO list.',
  },
  {
    name: 'It requires more memory as compare to DFS.',
    diff: 'It requires less memory as compare to BFS.',
  },
  {
    name: 'Suitable for searching vertices which are closer to the given source',
    diff: 'Suitable when there are solutions away from the selected source.',
  },
  {
    name: 'There is no need of backtracking in BFS.',
    diff: 'There is a need of backtracking in DFS.',
  },
];

const uld0 = [
  {
    id: 1,
    topic: 'Undirected',
    point:
      'An undirected graph is a graph in which all the edges are bi-directional i.e. the edges do not point in any specific direction.',
  },
  {
    id: 2,
    topic: 'Directed',
    point:
      'A directed graph is a graph in which all the edges are uni-directional i.e. the edges point in a single direction.',
  },
  {
    id: 3,
    topic: 'Weighted',
    point:
      'Each edge is assigned a weight or cost, given by a weight function w:E → R.',
  },
  {
    id: 4,
    topic: 'Dense',
    point: '|E| ≈ |V|^2',
  },
  {
    id: 5,
    topic: 'Sparse',
    point: '|E| ≪ |V|^2',
  },
];

const uld1 = [
  {
    id: 1,
    topic: 'Tree edge',
    point: 'an edge in the depth-first forest. Found by exploring (u, v).',
  },
  {
    id: 2,
    topic: 'Back edge',
    point: '(u, v), where u is a descendant of v (in the depth-first tree).',
  },
  {
    id: 3,
    topic: 'Forward edge',
    point: '(u, v), where v is a descendant of u, but not a tree edge.',
  },
  {
    id: 4,
    topic: 'Cross edge',
    point:
      'any other edge. Can go between vertices in same depth-first tree or in different depth-first trees',
  },
  {
    id: 5,
    topic: 'Theorem',
    point:
      'In DFS of an undirected graph, we get only tree and back edges. No forward or cross edges.',
  },
];

const uld2 = [
  {
    id: 1,
    topic: 'DAG',
    point:
      'Good for modeling processes and structures that have a partial order',
  },
  {
    id: 2,
    topic: 'Lemma',
    point: 'A directed graph G is acyclic iff a DFS of G yields no back edges.',
  },
];

const uld3 = [
  {
    id: 3,
    topic: 'SCC',
    point:
      'G is strongly connected if every pair (u, v) of vertices in G is reachable from one another. A SCC of G is a maximal set of vertices C \u2286 V such that for all u, v \u2208 C, both u\u2192v and v\u2192u exist',
  },
  {
    id: 4,
    topic: 'Lemma',
    point:
      "Let C and C'  be distinct SCC's in G, let u, v \u2208 C, u', v' \u2208 C', and suppose there is a path u\u2192u' in G. Then there cannot also be a path v'\u2192v in G",
  },
  {
    id: 5,
    topic: 'Lemma',
    point:
      "Let C and C' be distinct SCC's in G = (V, E). Suppose there is an edge (u, v) \u2208 E such that u \u2208 C and v  C'. Then f (C) > f (C')",
  },
  {
    id: 6,
    topic: 'Corollary',
    point:
      "Let C and C' be distinct SCC’s in G = (V, E). Suppose there is an edge",
  },
];

const ulp1 = [
  {
    id: 3,
    point:
      'A spanning tree is a sub-graph of an undirected connected graph, which includes all the vertices of the graph with a minimum possible number of edges. If a vertex is missed, then it is not a spanning tree.',
  },
  {
    id: 4,
    point: 'The edges may or may not have weights assigned to them.',
  },
  {
    id: 5,
    point:
      'The total number of spanning trees with n vertices that can be created from a complete graph is equal to n^(n-2).',
  },
];

const ulp2 = [
  {
    id: 2,
    point: 'Extracting the vertex from the queue: O(lg n)',
  },
  {
    id: 3,
    point:
      'For each incident edge, decreasing the key of the neighboring vertex: O(lg n) where n = |V|',
  },
  {
    id: 4,
    point: 'The other steps are constant time.',
  },
  {
    id: 5,
    point:
      "The time complexity of Prim's algorithm is O(E log V) or O((n+e)log n).",
  },
];

const ulp3 = [
  {
    id: 2,
    point: 'initialization: O(V)',
  },
  {
    id: 3,
    point: 'sorting:  O(E lg E)',
  },
  {
    id: 4,
    point: 'set-operation:  O(E log E)',
  },
  {
    id: 5,
    point: 'Total: O(E log E)',
  },
];

const ulp4 = [
  {
    id: 2,
    point: 'O(V\u00b2) using linear array for priority queue',
  },
  {
    id: 3,
    point: 'O((V + E) log V) using binary heap',
  },
  {
    id: 4,
    point: 'Space Complexity: O(V)',
  },
];

const olp3 = [
  {
    id: 1,
    point: 'call DFS(G) to compute finishing times f[u] for all u',
  },
  {
    id: 2,
    point: 'compute G^T',
  },
  {
    id: 3,
    point:
      'call DFS(G^T), but in the main loop, consider vertices in order of decreasing f[u] (as computed in first DFS)',
  },
  {
    id: 4,
    point:
      'output the vertices in each tree of the depth-first forest formed in second DFS as a separate SCC',
  },
  {
    id: 5,
    point: 'Time: \u03B8(V+E)',
  },
];

const olp4 = [
  {
    id: 1,
    point:
      'We start from one vertex and keep adding edges with the lowest weight until we reach our goal.',
  },
  {
    id: 2,
    point:
      'Initialize the minimum spanning tree with a vertex chosen at random.',
  },
  {
    id: 3,
    point:
      'Find all the edges that connect the tree to new vertices, find the minimum and add it to the tree',
  },
  {
    id: 4,
    point: 'Keep repeating step 3 until we get a minimum spanning tree',
  },
];

const olp5 = [
  {
    id: 1,
    point:
      'We start from the edges with the lowest weight and keep adding edges until we reach our goal.',
  },
  {
    id: 2,
    point: 'Sort all the edges from low weight to high',
  },
  {
    id: 3,
    point:
      'Take the edge with the lowest weight and add it to the spanning tree. If adding the edge created a cycle, then reject this edge.',
  },
  {
    id: 4,
    point: 'Keep adding edges until we reach all vertices.',
  },
];

const olp6 = [
  {
    id: 1,
    point:
      'Set all vertices distances = infinity except for the source vertex, set the source distance = 0.',
  },
  {
    id: 2,
    point:
      'Push the source vertex in a min-priority queue in the form (distance , vertex), as the comparison in the min-priority queue will be according to vertices distances.',
  },
  {
    id: 3,
    point:
      'Pop the vertex with the minimum distance from the priority queue (at first the popped vertex = source).',
  },
  {
    id: 4,
    point:
      'Update the distances of the connected vertices to the popped vertex in case of "current vertex distance + edge weight < next vertex distance", then push the vertex with the new distance to the priority queue.',
  },
  {
    id: 5,
    point:
      'If the popped vertex is visited before, just continue without using it.',
  },
  {
    id: 6,
    point: 'Apply the same algorithm again until the priority queue is empty.',
  },
];

function AD_CH3(props) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Typography variant="h5" component="h5" color="secondary" gutterBottom>
        GRAPHS AND RELATED ALGORITHMS
      </Typography>
      <Divider className={classes.dSpace} />
      <Typography variant="body1" gutterBottom>
        <b>Graph</b> G = (V,E) where V = set of vertices and E = set of edges
      </Typography>
      <UlDef title="Types of graphs" items={uld0} />
      <LunderL title="Proprtiess" items={lul0} />
      <Typography variant="body1" gutterBottom>
        <b>Representation of Graphs</b>
        &emsp;(1) Adjacency Lists, &emsp;(2) Adjacency Matrix
      </Typography>
      <div className={classes.whiteSpace} />
      <Paper className={classes.paper}>
        <Typography variant="h6">Adjacency Lists</Typography>
        <Divider className={classes.dSpace} />
        <Typography variant="subtitle2">Storage Requirement -</Typography>
        <ul className={classes.liDesign}>
          <li>
            For directed graphs
            <ul className={classes.liDesign}>
              <li>
                Sum of lengths of all adj. lists is <br />
                <Formula tex={`\\sum_{v \\epsilon V}outDegree(v)=|E|`} /> v =
                No. of edges leaving v
              </li>
              <li>Total storage: θ(V+E)</li>
            </ul>
          </li>
          <li>
            For undirected graphs
            <ul className={classes.liDesign}>
              <li>
                Sum of lengths of all adj. lists is <br />
                <Formula tex={`\\sum_{v \\epsilon V}degree(v)=2|E|`} /> v = No.
                of edges incident on v. Edge (u,v) is incident on vertices u and
                v.
              </li>
              <li>Total storage: θ(V+E)</li>
            </ul>
          </li>
        </ul>
      </Paper>
      <div className={classes.whiteSpace} />
      <LunderL title="Pros and Cons: adj list" items={lul1} />
      <Typography variant="h6">Adjacency Matrix</Typography>
      <Divider className={classes.dSpace} />
      <Typography paragraph>|V|x|V| matrix A.</Typography>
      <Typography variant="subtitle2">Space and Time</Typography>
      <ul className={classes.liDesign}>
        <li>
          <b>Space</b>: θ(V2). (Not memory efficient for large graphs)
        </li>
        <li>
          <b>Time</b>: to list all vertices adjacent to u: θ(V).
        </li>
        <li>
          <b>Time</b>: to determine if (u, v) &#8712; E: θ(1)
        </li>
        <li>Can store weights instead of bits for weighted graph.</li>
      </ul>
      <div className={classes.whiteSpace} />
      <Typography variant="h6">Graph-searching Algorithms</Typography>
      <Divider className={classes.dSpace} />
      <ul className={classes.liDesign}>
        <li>
          <b>Searching a graph</b>: Systematically follow the edges of a graph
          to visit the vertices of the graph
        </li>
        <li>Used to discover the structure of a graph</li>
        <li>
          Standard graph-searching algorithms
          <ul>
            <li>
              Breadth-first Search <b>(BFS)</b>.
            </li>
            <li>
              Depth-first Search <b>(DFS)</b>.
            </li>
          </ul>
        </li>
      </ul>
      <div className={classes.whiteSpace} />
      <Typography variant="h6">Breadth First Search (BFS)</Typography>
      <Divider className={classes.dSpace} />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Breadth-first search (BFS) is an algorithm that is used to graph
            data or searching tree or traversing structures. This algorithm
            selects a single node (initial or source point) in a graph and then
            visits all the nodes adjacent to the selected node.
          </Typography>
          <LunderL title="Uses of colors" items={lul2} />
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <img
            className={classes.imgHor}
            src="https://www.guru99.com/images/1/020820_0543_BreadthFirs1.png"
            title="BFS"
            alt=""
          />
        </Grid>
      </Grid>
      <div className={classes.whiteSpace} />
      <LunderL title="BFS algorithm" items={lul3} />
      <div className={classes.whiteSpace} />
      <Typography variant="h6">BFS Algorithm Complexity -</Typography>
      <Typography paragraph>
        The time complexity of the BFS algorithm is represented in the form of
        O(V + E), where V is the number of nodes and E is the number of edges.
        <br />
        The space complexity of the algorithm is O(V).
      </Typography>
      <div className={classes.whiteSpace} />
      <OlPaper title="BFS Algorithm Applications" items={olp1} />
      <Typography variant="h6">Depth First Search (DFS)</Typography>
      <Divider className={classes.dSpace} />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Depth first Search or Depth first traversal is a recursive algorithm
            for searching all the vertices of a graph or tree data structure.
            Traversal means visiting all the nodes of a graph.
          </Typography>
          <LunderL title="Depth First Search Algorithm" items={lul4} />
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <img
            className={classes.imgHor}
            src="https://he-s3.s3.amazonaws.com/media/uploads/9fa1119.jpg"
            title="DFS"
            alt=""
          />
        </Grid>
      </Grid>
      <div className={classes.whiteSpace} />
      <Typography variant="h6">Complexity of DFS -</Typography>
      <Typography paragraph>
        The time complexity of the DFS algorithm is represented in the form of
        O(V + E), where V is the number of nodes and E is the number of edges.
        <br /> The space complexity of the algorithm is O(V).
      </Typography>
      <div className={classes.whiteSpace} />
      <OlPaper title="DFS Algorithm Application" items={olp2} />
      <div className={classes.whiteSpace}>
        <Typography variant="h6">BFS vs DFS</Typography>
        <Divider className={classes.dSpace} />
        <TableX name={t1h} rows={t1b} />
      </div>
      <Typography variant="h6">Parenthesis Theorem</Typography>
      <Divider className={classes.dSpace} />
      <Typography paragraph>
        In any depth-first search of a (directed or undirected) graph G = (V,
        E), for any two vertices u and v, exactly one of the following three
        conditions holds:
      </Typography>
      <ol className={classes.liDesign}>
        <li>
          d[u] &#60; f [u] &#60; d[v] &#60; f [v] or <br /> d[v] &#60; f [v]
          &#60; d[u] &#60; f [u] and neither u nor v is a descendant of the
          other.
        </li>
        <li>
          d[u] &#60; d[v] &#60; f [v] &#60; f [u] and v is a descendant of u.
        </li>
        <li>
          d[v] &#60; d[u] &#60; f [u] &#60; f [v] and u is a descendant of v.
        </li>
      </ol>
      <div className={classes.whiteSpace} />
      <Typography variant="h6">White-path Theorem</Typography>
      <Divider className={classes.dSpace} />
      <Typography paragraph>
        v is a descendant of u if and only if at time d[u], there is a path u v
        consisting of only white vertices. (Except for u, which was just colored
        gray.)
      </Typography>
      <div className={classes.whiteSpace} />
      <UlDef title="Classification of Edges" items={uld1} />
      <UlDef title="Directed Acyclic Graph (DAG)" items={uld2} />
      <UlDef title="Strongly Connected Components (SCC)" items={uld3} />
      <OlPaper title="Algorithm to determine SCCs" items={olp3} />
      <UlPaper title="Spanning tree" items={ulp1} />
      <Typography variant="h6">Minimum Spanning Tree</Typography>
      <Divider className={classes.dSpace} />
      <Typography paragraph>
        A minimum spanning tree is a spanning tree in which the sum of the
        weight of the edges is as minimum as possible.
      </Typography>
      <div className={classes.whiteSpace} />
      <Typography variant="h6">Prim's Algorithm</Typography>
      <Divider className={classes.dSpace} />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Prim's algorithm is a minimum spanning tree algorithm that takes a
            graph as input and finds the subset of the edges of that graph which
          </Typography>
          <ul className={classes.liDesign}>
            <li>form a tree that includes every vertex</li>
            <li>
              has the minimum sum of weights among all the trees that can be
              formed from the graph
            </li>
          </ul>
          <OlPaper title="How Prim's algorithm works" items={olp4} />
          <UlPaper title="Analysis Prim's algorithm" items={ulp2} />
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <img
            className={classes.imgHor}
            src="https://static.javatpoint.com/core/images/prims-algorithm-java.png"
            title="Prims algorithm"
            alt=""
          />
        </Grid>
      </Grid>
      <div className={classes.whiteSpace} />
      <Typography variant="h6">Kruskal's Algorithm</Typography>
      <Divider className={classes.dSpace} />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Kruskal's algorithm is a minimum spanning tree algorithm that takes
            a graph as input and finds the subset of the edges of that graph
            which
          </Typography>
          <ul className={classes.liDesign}>
            <li>form a tree that includes every vertex</li>
            <li>
              has the minimum sum of weights among all the trees that can be
              formed from the graph
            </li>
          </ul>
          <OlPaper title="How Kruskal's algorithm works" items={olp5} />
          <UlPaper title="Analysis Kruskal's algorithm" items={ulp3} />
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <img
            className={classes.imgHor}
            src={kAlgo}
            title="Kruskal's algorithm"
            alt=""
          />
        </Grid>
      </Grid>
      <div className={classes.whiteSpace} />
      <Typography variant="h6">Dijkstra's Algorithm</Typography>
      <Divider className={classes.dSpace} />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Dijkstra's Algorithm works on the basis that any subpath B &#8594; D
            of the shortest path A &#8594; D between vertices A and D is also
            the shortest path between vertices B and D.
          </Typography>
          <OlPaper title="How Dijkstra's algorithm works" items={olp6} />
          <UlPaper title="Analysis Dijkstra's algorithm" items={ulp4} />
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <img
            className={classes.imgHor}
            src={dAlgo}
            title="Dijkstra's Algorithm"
            alt=""
          />
        </Grid>
      </Grid>
    </main>
  );
}

export default AD_CH3;
