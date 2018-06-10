// Get Visible expenses 
import moment from 'moment';

const getVisibleShortcuts = (shortcuts,searchQuery) => {
    
    return shortcuts.filter(shortcut => shortcut.label.includes(searchQuery));
}

export default getVisibleShortcuts;