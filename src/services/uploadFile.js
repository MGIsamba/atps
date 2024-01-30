import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';

async function uploadFile(file, directory) {
    const docRef = ref(storage, `${directory}/` + Math.random().toString().substring(3, 10) + file?.name);

    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function () {
            reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', file.uri, true);
        xhr.send(null);
    });

    const uploadFile = await uploadBytes(docRef, blob, {
        contentType: file?.mimeType
    });

    const url = await getDownloadURL(docRef);

    return url;
}

export default uploadFile;
