// helper to get dimensions of an image
const getImageProperties = async (fileUrl) => {
	// let d = await fetch(fileUrl).then((res) => res.blob());
	return new Promise((resolve, reject) => {
		const img = new Image();

		// the following handler will fire after the successful loading of the image
		img.onload = () => {
			const { naturalWidth: imageWidth, naturalHeight: imageHeight } = img;
			resolve({ imageWidth, imageHeight });
		};

		// and this handler will fire if there was an error with the image (like if it's not really an image or a corrupted one)
		img.onerror = () => {
			reject('There was some problem with the image.');
		};

		img.src = fileUrl;
	});
};

export default getImageProperties;
