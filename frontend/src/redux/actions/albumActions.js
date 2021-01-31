export const getAlbums = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/albums")
      .then((res) => res.json())
      .then((albums) =>
        dispatch({ type: "FETCH_ALBUMS_SUCCESS", payload: albums })
      );
  };
};

export const createAlbum = (data) => {
  return (dispatch) => {
    const album = { album: data };
    fetch("http://localhost:3000/api/v1/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(album),
    })
      .then((res) => res.json())
      .then((album) =>
        dispatch({ type: "CREATE_ALBUM_SUCCESS", payload: album })
      );
  };
};

export const deleteAlbum = (id, history) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/albums/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((album) =>
        dispatch({ type: "DELETE_ALBUM_SUCCESS", payload: album })
      );
    history.push("/albums");
  };
};
