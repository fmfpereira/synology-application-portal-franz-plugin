'use strict';

const { ipcRenderer } = require('electron');

const getTeamIcon = function getTeamIcon() {
  const synologyAppIcon = document.querySelector('#sds-login-icon');
  if (synologyAppIcon) {
    ipcRenderer.sendToHost('avatar', synologyAppIcon.src);
  }
};

module.exports = (Franz) => {
  setTimeout(() => {
    getTeamIcon();
  }, 4000);
};