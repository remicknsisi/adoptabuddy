// Action Creators
// export const addPost = (post) => {
//     return {
//       type: "posts/add",
//       payload: post,
//     };
//   };

//   Reducers
const initialState = {
    entities: [],
    status: "idle"
};

export default function listingsReducer(state = initialState, action) {
    switch (action.type) {
        case "listings/listingsLoading":
            return {
                ...state,
                status: "loading",
            };

        case "listings/listingsLoaded":
            return {
                ...state,
                status: "idle",
                entities: action.payload,
            };

        default:
            return state;
    }
}

export function fetchListings() {
    return function (dispatch) {
        dispatch({ type: "listings/listingsLoading" });
        fetch("http://localhost:3000/listings")
            .then((response) => response.json())
            .then((listings) =>
                dispatch({
                    type: "listings/listingsLoaded",
                    payload: listings,
                })
            );
    };
}