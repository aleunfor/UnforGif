import { useReducer } from 'react';

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating'
}

// Reducer siempre tiene que devolver el siguiente estado
const REDUCER = (state, action) => {
    // Tambien lo podemos hacer con un switch
    if (action.type === ACTIONS.UPDATE_KEYWORD) {
        return {
            ...state,
            keyword: action.payload
        }
    }

    if (action.type === ACTIONS.UPDATE_RATING) {
        return {
            ...state,
            rating: action.payload
        }
    }
}

export default function useForm ({ 
    initialKeyword = "", initialRating = "g" 
} = {}) {
    const [state, dispatch] = useReducer(REDUCER, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating
    })

    const { keyword, rating } = state

    return {
        keyword,
        rating,
        updateKeyword: keyword =>
            dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
        updateRating: rating =>
            dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating })
    };
}


