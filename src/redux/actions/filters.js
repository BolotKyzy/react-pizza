const setSortBy = (sortBy) => ({
    type: 'SET_SORT_BY',
    payload:sortBy
});

const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload:catIndex
});

export {
    setSortBy,
    setCategory
};