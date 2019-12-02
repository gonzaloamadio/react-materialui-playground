import React from "react";
import "./App.css";

// REF: https://reactgo.com/material-ui-react-tutorial/
import Nav from "./Navbar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import { BrowserRouter, Route } from "react-router-dom";

// USE OF GRIDS AND CARDS
import CourseList from "./components/CourseList";
import Posts from "./components2/Posts";

//  --------------- 3rd examples
// USE OF: Diaglog (modal), theme and style, grid, tabs
import HomeIcon from "@material-ui/icons/Home";
import AddCommentIcon from "@material-ui/icons/AddComment";
import BorderClearIcon from "@material-ui/icons/BorderClear";
import DateRangeIcon from "@material-ui/icons/DateRange";

import TabsDemo from "./components3/TabsDemo";
import ModalDemo from "./components3/ModalDemo";
import GridListDemo from "./components3/GridListDemo";
import DateTimePickersDemo from "./components3/DateTimePickersDemo";

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title" color="inherit">
              <Nav />
            </TypoGraphy>
          </Toolbar>
        </AppBar>

        <Route path="/course-list">
          <CourseList />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/third">
          <TabsDemo tabs={tabs} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

const tabs = [
  {
    id: 1,
    label: "Home",
    component: (
      <TabsDemo
        tabs={[
          {
            id: 2,
            label: "Modal",
            component: <ModalDemo />,
            icon: <AddCommentIcon />
          },
          {
            id: 3,
            label: "GridList",
            component: <GridListDemo />,
            icon: <BorderClearIcon />
          }
        ]}
      />
    ),
    icon: <HomeIcon />
  },
  {
    id: 2,
    label: "Modal",
    component: <ModalDemo />,
    icon: <AddCommentIcon />
  },
  {
    id: 3,
    label: "GridList",
    component: <GridListDemo />,
    icon: <BorderClearIcon />
  },
  {
    id: 4,
    label: "DatePickers",
    component: <DateTimePickersDemo />,
    icon: <DateRangeIcon />
  }
];
