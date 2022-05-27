// if(searchQuery) {
//   elemList = elemList.filter(items => items.toLowerCase().includes(searchQuery.toLowerCase());
// }
export const useElements = (elemList, searchQuery) => {
    const searchElements = () => {
        return elemList.filter(items => items.toLowerCase().includes(searchQuery.toLowerCase());
    }
}


    useCards: useCardsType = (items, searchQuery, selectedSort)=>{
    const sortedCards= useSortedCards(items, selectedSort);
    const sortAndSearchCards = useMemo(()=>{
        return sortedCards.filter(items => items.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedCards])
    return sortAndSearchCards;
}