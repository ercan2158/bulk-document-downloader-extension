function downloadDocuments(linkSelector, timeout) {

  console.log('It is starting with selector:'+ linkSelector)

  const links = Array.from(document.querySelectorAll(linkSelector));
  if (!links.length) {
    console.error('No links found. Check your link selector.');
    return;
  }

    let currentIndex = 0;
  
    function downloadNext() {
      if (currentIndex < links.length) {
        console.log(currentIndex+'. triggered')
       links[currentIndex].click();
        currentIndex++;

        chrome.runtime.sendMessage({
          action: 'elementClicked',
          elementIndex: currentIndex,
        });

        setTimeout(downloadNext, timeout);
      }else {
        // Send completion message to the popup
        chrome.runtime.sendMessage({ action: 'downloadCompleted' });
      }
    }
  
    downloadNext();
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'downloadDocuments') {
      downloadDocuments(request.linkSelector, request.timeout);
    }
  });
  