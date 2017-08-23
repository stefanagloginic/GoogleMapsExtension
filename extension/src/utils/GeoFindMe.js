export default function(success, error) {
	if(!navigator.geolocation){
		error();
		return;
	}

	navigator.geolocation.getCurrentPosition(sucess, error);
}