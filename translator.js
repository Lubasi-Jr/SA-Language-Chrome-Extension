// THE ACTIVATE BUTTON INJECTS JAVASCRIPT INTO THE TAB
document.getElementById("activate").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab?.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const handleMouseUp = () => {
          const selection = window.getSelection().toString().trim();
          if (selection) {
            alert(`You selected: ${selection}`);
            document.removeEventListener("mouseup", handleMouseUp);
          }
        };

        document.addEventListener("mouseup", handleMouseUp);
      },
    });
  }
});
