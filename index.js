'use strict';

module.exports = Franz => class SynologyApplicationPortal extends Franz {
  async validateUrl(url) {
    try {
      const resp = await window.fetch(url + '/webapi/query.cgi', {
        method: 'GET',
      });
      return resp.status === 200;
    } catch (err) {
      console.error(err);
    }
    return false;
  }
};