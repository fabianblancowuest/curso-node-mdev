const url = "https://api.sampleapis.com/simpsons/characters";

const retorno = () => {
	setTimeout(() => {
		console.log(2 + 5);
	}, 1000);
};

// const response = () => {
// 	fetch(url)
// 		.then((response) => response.json())
// 		.then((json) => console.log(json))
// 		.catch((err) => console.log("Hubo un problema", err));
// };

// response();

console.log(retorno());
