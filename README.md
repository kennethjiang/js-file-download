# Javascript File Download

Javascript function to trigger browser to save data to file as if it was downloaded.

# Installation

    npm install js-file-download --save

# Usage

```javascript
var fileDownload = require('js-file-download');
fileDownload(data, 'filename.csv');
```
    
## Binary downloads

When downloading binary data, the data must be a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob), otherwise the downloaded file will be corrupted. For example, using [Axios](https://github.com/axios/axios):

```javascript
import Axios from axios;
import fileDownload from 'js-file-download';

function download(url: string, filename: string) {
  Axios.get(url, {
    responseType: 'blob',
  }).then(res => {
    fileDownload(res.data, filename);
  });
}
```
