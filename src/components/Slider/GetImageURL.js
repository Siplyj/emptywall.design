const GetImageURL = (imageNumber, projectData) => {

	while (imageNumber <= 0) {
		imageNumber += +projectData.number_of_images;
	}

	while (imageNumber > +projectData.number_of_images) {
		imageNumber -= +projectData.number_of_images;
	}

	return imageNumber < 10 ?
		`https://emptywall.design/files/portfolio/${projectData.id}/${projectData.id}-0${imageNumber}.jpg` :
		`https://emptywall.design/files/portfolio/${projectData.id}/${projectData.id}-${imageNumber}.jpg`;
};

export default GetImageURL;