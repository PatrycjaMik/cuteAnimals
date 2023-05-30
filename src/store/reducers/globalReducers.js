const InitState = {
  animals: [
    {
      id: 1,
      title: "kitty",
      img: "cute1.jpg",
      upvotes: 6,
      downvotes: 2,
    },
    {
      id: 2,
      title: "puppy",
      img: "cute2.jpg",
      upvotes: 1,
      downvotes: 2,
    },
    {
      id: 3,
      title: "duck",
      img: "cute3.jpg",
      upvotes: 7,
      downvotes: 4,
    },
    {
      id: 4,
      title: "panda",
      img: "cute4.jpg",
      upvotes: 8,
      downvotes: 5,
    },
    {
      id: 5,
      title: "raccon",
      img: "cute5.jpg",
      upvotes: 3,
      downvotes: 2,
    },
    {
      id: 6,
      title: "hedgehog",
      img: "cute6.jpg",
      upvotes: 4,
      downvotes: 2,
    },
    {
      id: 7,
      title: "pig",
      img: "cute7.jpg",
      upvotes: 1,
      downvotes: 2,
    },
  ],
};

export const likesReducer = (state = InitState, action) => {
  switch (action.type) {
    case "ADD_LIKE": {
      const animalId = action.payload;
      const animalIndexLike = state.animals.findIndex(
        (animal) => animal.id === animalId
      );
      const newAnimalsState = [...state.animals];
      newAnimalsState[animalIndexLike].upvotes =
        state.animals[animalIndexLike].upvotes + 1;
      return { ...state, animals: newAnimalsState };
    }
    case "ADD_DISLIKE": {
      const animalId = action.payload;
      const animalIndexDislike = state.animals.findIndex(
        (animal) => animal.id === animalId
      );
      const newAnimalsState = [...state.animals];
      newAnimalsState[animalIndexDislike].downvotes =
        state.animals[animalIndexDislike].downvotes + 1;
      return { ...state, animals: newAnimalsState };
    }
    default: {
      return state;
    }
  }
};
