export const useAuth = () => {
  const isAuthenticated = true;

  const logout = () => {
    console.log("Logging out...");
  };

  const loading = false;

  return {
    isAuthenticated,
    loading,
    logout,
  };
};
