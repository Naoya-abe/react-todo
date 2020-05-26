const paths = {
  mypage: {
    main: "/me",
    edit: "/me/edit",
    delete: "/me/delete",
  },
  signup: {
    main: "/signup",
    confirm: "/signup/confirm",
    thanks: "/signup/thanks",
  },
  signin: {
    main: "/signin",
  },
  signout: {
    main: "/signout",
  },
  todos: {
    create: "/todos/create",
    delete: "/todos/:id/delete",
    detail: "/todos/:id/deteil",
    edit: "/todos/:id/edit",
    list: "/todos",
  },
};

export default paths;
