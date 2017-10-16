module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.activity-indicator-mentions').length;
    const indirectMessages = document.querySelectorAll('.activity-indicator-chat').length;

    // set Franz badge
    Franz.setBadge(directMessages, indirectMessages);
  };

  Franz.loop(getMessages);
};
