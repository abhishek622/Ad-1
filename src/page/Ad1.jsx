import React from 'react';
import MiniDrawer from '../components/MiniDrawer';
import { Switch, Route, Redirect } from 'react-router-dom';
import AD_CH1 from './AD_CH1';
import AD_CH2 from './AD_CH2';
import AD_CH3 from './AD_CH3';
// import AD_CH4 from './AD_CH4';
// import AD_CH5 from './AD_CH5';
// import AD_CH6 from './AD_CH6';

function Ad1() {
  const topics = [
    {
      id: 1,
      name: 'Introduction to Algorithm Design',
      loc: `/Introduction_to_Algorithm_Design`,
    },
    {
      id: 2,
      name: 'Searching and Sorting',
      loc: `/Searching_and_Sorting`,
    },
    {
      id: 3,
      name: 'Graphs',
      loc: `/Graphs`,
    },
    // {
    //   id: 4,
    //   name: 'Greedy Algorithms',
    //   loc: `${url}/Greedy_Algorithms`,
    // },
    // {
    //   id: 5,
    //   name: 'Divide and Conquer',
    //   loc: `${url}/Divide_and_Conquer`,
    // },
    // {
    //   id: 6,
    //   name: 'Dynamic Programming',
    //   loc: `${url}/Dynamic_Programming`,
    // },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <MiniDrawer topics={topics} />
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            <Redirect to="/Introduction_to_Algorithm_Design" /> && <AD_CH1 />
          }
        />

        <Route
          exact
          path={'/Introduction_to_Algorithm_Design'}
          render={() => <AD_CH1 />}
        />
        <Route
          exact
          path={'/Searching_and_Sorting'}
          render={() => <AD_CH2 />}
        />

        <Route exact path={'/Graphs'} render={() => <AD_CH3 />} />
        {/* <Route exact path={'/Greedy_Algorithms'}>
          <AD_CH4 />
        </Route>
        <Route exact path={'/Divide_and_Conquer'}>
          <AD_CH5 />
        </Route>
        <Route exact path={'/Dynamic_Programming'}>
          <AD_CH6 />
        </Route> */}
      </Switch>
    </div>
  );
}
export default Ad1;
