function checkForUrl(inputText) {
    const URLinput = /^https?:\/\//gi
    return URLinput.test(inputText)
  };
  export { checkForUrl }
  