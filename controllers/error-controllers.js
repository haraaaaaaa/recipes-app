exports.get404 = (request, response) => {
  const error = { title: "Error 404", message: "Not Found" };
  response.render("error", { pageTitle: error.title, path: "*", error });
};

exports.get400 = (request, response) => {
  const error = {
    title: "Error 400",
    message: "Bad Request! Form not filled in properly!",
  };
  response.render("error", { pageTitle: error.title, path: "*", error });
};
