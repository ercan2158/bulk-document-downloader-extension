document.getElementById('downloadBtn').addEventListener('click', () => {
  const linkSelector = document.getElementById('linkSelector').value;
  const timeout = document.getElementById('timeout').value;

  console.log('selector'+ linkSelector)

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'downloadDocuments',
      linkSelector,
      timeout,
    });
  });


});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'downloadCompleted') {
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';
    setTimeout(() => {
      feedback.style.display = 'none';
    }, 3000);
  }else if (request.action === 'elementClicked') {
    const elementClicked = document.getElementById('elementClicked');
    elementClicked.textContent = `${request.elementIndex}. element is clicked`;
  }
});
