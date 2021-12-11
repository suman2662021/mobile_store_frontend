const initialState = {
    categories: []
}

const categoryReducer = (state = initialState, action) => {
    const { type, payload } = action 

    switch (type) {
        default:
            return state
    }
}

export default categoryReducer;