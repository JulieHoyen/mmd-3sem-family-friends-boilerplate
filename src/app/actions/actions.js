"use server";
export const addFavorite = async (id) => {
const response = await fetch("https://api.thedogapi.com/v1/favorites", {
  method: "POST",
  headers: {
    "x-api-key": process.env.API.KEY,
    "Content-type" : "application/json",
  },
  body: JSON.stringify({
    image_id: id,
  }),
});

console.log("response", response);
console.log("id", id);

};