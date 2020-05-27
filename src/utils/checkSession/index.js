const checkSession = () => {
  const token = sessionStorage.getItem("token");
  const response = token != null;

  return response;
};

export default checkSession;
