export const fetchSearchGiphys = (searchTerm) => {
  return $.ajax({
    method: "get",
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=BTILNwoHhQ07vJXGKOts7M7xXFsE77N1&limit=2`
  });
}