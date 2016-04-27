import React from 'react';

module.exports.fileDownload = function(data, filename) {
        var data = new Blob([data], {type: 'text/csv'});
        var csvURL = window.URL.createObjectURL(data);
        var tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', filename);
        tempLink.click();
}
