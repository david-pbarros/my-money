export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...TabsIds) {
    const tabsToShow = {};

    TabsIds.forEach(e => tabsToShow[e] = true);

    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}