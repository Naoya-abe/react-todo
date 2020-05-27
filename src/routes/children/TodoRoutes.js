import React from "react";
import { Switch, Route } from "react-router-dom";

import paths from "../../config/paths";

import {
  TodoCreate,
  TodoDelete,
  TodoDetail,
  TodoEdit,
  TodoList,
} from "../../pages/todos";

const TodoRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        {window.isAuthed ? (
          <React.Fragment>
            <Route exact path={paths.todos.create} component={TodoCreate} />
            <Route exact path={paths.todos.delete} component={TodoDelete} />
            <Route exact path={paths.todos.edit} component={TodoEdit} />
            <Route exact path={paths.todos.detail} component={TodoDetail} />
            <Route exact path={paths.todos.list} component={TodoList} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route exact path={paths.todos.detail} component={TodoDetail} />
            <Route exact path={paths.todos.list} component={TodoList} />
          </React.Fragment>
        )}
      </Switch>
    </React.Fragment>
  );
};

export default TodoRoutes;
