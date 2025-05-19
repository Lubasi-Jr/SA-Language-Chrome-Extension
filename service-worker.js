/* chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.addEventListener("mouseup", () => {
        const selection = window.getSelection().toString().trim();
        if (selection) {
          alert(`You selected: ${selection}`);
        }
      });
    },
  });

  console.log("Selection script injected into tab", tab.id);
});
 */
