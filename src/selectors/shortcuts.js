const getVisibleShortcuts = (shortcuts,searchQuery) => {
    
    return shortcuts.filter(shortcut => searchQuery?shortcut.label.includes(searchQuery):true);
}

export default getVisibleShortcuts;