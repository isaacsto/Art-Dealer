export const getUser = (token) => {
  return fetch("/api/userse/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const showPurchaseHistory = () => {
  return fetch("/api/users/purchase-history", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getArtists = () => {
  return fetch("/api/artists", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getSingleArtist = () => {
  return fetch("/api/:artistId", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createArtist = (userData) => {
  return fetch("/api/artists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const addArt = (userData) => {
  return fetch("/api/:artistId/art", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const removeArt = () => {
  return fetch("/api/:artistId/art/:artId", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
