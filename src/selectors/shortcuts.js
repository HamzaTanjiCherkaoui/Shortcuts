const getVisibleShortcuts = (shortcuts,searchQuery) => {
    
    return shortcuts.filter(shortcut => searchQuery?shortcut.label.toUpperCase().includes(searchQuery.toUpperCase()):true);
}

export default getVisibleShortcuts;