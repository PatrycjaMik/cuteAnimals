const InitState = {
  numberOfLikes: 2,
  numberOfDislikes: 1,
};

export const likesReducer = (state = InitState, action) => {
  switch (action.type) {
    case "COUNT_LIKES": {
      return { ...state, numberOfLikes: state.numberOfLikes + 1 };
    }
    case "COUNT_DISLIKES": {
      return { ...state, numberOfDislikes: state.numberOfDislikes + 1 };
    }
    default: {
      return state;
    }
  }
};
