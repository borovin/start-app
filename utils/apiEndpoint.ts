export const apiEndpoint = (apiObject) => (req, res) => {
  const { method } = req;
  if (apiObject[method]) {
    apiObject[method](req, res);
  } else {
    res.status(405).end();
  }
};
