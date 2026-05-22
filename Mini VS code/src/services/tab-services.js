export function getActiveTabContent(
  tabs,
  activeId
) {

  return tabs.find(
    tab => tab.id === activeId
  );
}