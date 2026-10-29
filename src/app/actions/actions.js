"use server";

export const addFavorite = async (id) => {
  const response = await fetch("https://api.thedogapi.com/v1/favourites", {
    method: "POST",
    headers: {
      "x-api-key": process.env.THEDOG_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_id: id,
    }),
  });

  if (!response.ok) {
    const error = await response.text();

    console.error("TheDogAPI fejlstatus:", response.status);
    console.error("TheDogAPI fejlbesked:", error);

    throw Error("Kunne ikke tilføje favorit");
  }

  return response.json();
};

export const removeFavorite = async (favoriteId) => {
  const response = await fetch(`https://api.thedogapi.com/v1/favourites/${favoriteId}`, {
    method: "DELETE",
    headers: {
      "x-api-key": process.env.THEDOG_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Kunne ikke fjerne favorit");
  }

  return true;
};
