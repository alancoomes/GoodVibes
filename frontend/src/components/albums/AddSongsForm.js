import React from "react";

export default function AddSongsForm({ songs }) {
  let avSongs = songs.filter((song) => !song.album_id);
  let checkboxes = avSongs.map((song) => {
    return (
      <div>
        <input type="checkbox" id={song.id} value={song.name} />
        <label for={song.id}>{song.name}</label>)
      </div>
    );
  });
  return (
    <div>
      <form>
        {checkboxes ? checkboxes : <p>No Songs Available</p>}
        <input type="submit" value="Add Songs" />
      </form>
    </div>
  );
}
