module.exports = [
  {
    url: "/api",
    children: [
      /////////////////////// AUTH
      {
        url: "/auth",
        children: [
          // SIGN-UP
          { method: "POST", url: "/sign-up", controller: "auth.signUp" },
          // // SIGN-IN
          { method: "POST", url: "/sign-in", controller: "auth.signIn" },
        ],
      },

      //////////////////////// ORDER
      // CREATE
      { method: "POST", url: "/order", controller: "order.create" },
      // INDEX
      { method: "GET", url: "/order", controller: "order.index" },

      //////////////////// CATEGORY
      //  CREATE
      { method: "POST", url: "/category", controller: "category.create" },
      //  INDEX
      { method: "GET", url: "/category", controller: "category.index" },
      //  SHOW
      { method: "GET", url: "/category/:id", controller: "category.show" },
      //  UPDATE
      { method: "PATCH", url: "/category:id", controller: "category.update" },
      //  DELETE
      {
        method: "DELETE",
        url: "/category:id",
        controller: "category.destroy",
      },

      ///////////// POSITION
      //  CREATE
      { method: "POST", url: "/position", controller: "position.create" },
      //  SHOW BY CATEGORY
      {
        method: "GET",
        url: "/position/:category",
        controller: "position.showByCategory",
      },
      //  UPDATE
      { method: "PATCH", url: "/position:id", controller: "position.update" },
      //  DELETE
      {
        method: "DELETE",
        url: "/position/:id",
        controller: "position.destroy",
      },

      ////////////// ANALYTICS
      //  OVERVIEW
      { method: "POST", url: "/overview", controller: "analytics.overview" },
      //  ANALYTIC
      { method: "POST", url: "/analytic", controller: "analytics.analytic" },
    ],
  },
];
