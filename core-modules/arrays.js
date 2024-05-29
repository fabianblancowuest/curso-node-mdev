const names = ["Carlos", "Malena", "Ricardo", "Jacinto"];

// names.forEach((name) => console.log(name));

const people = [
	{
		name: "Sandro",
		lastname: "De América",
		alive: false,
		age: 90,,
        
	},
	{
		name: "Nino",
		lastname: "Bravo",
		alive: false,
		age: 90,,
        
	},
	{
		name: "Rafael",
		lastname: "Unknown",
		alive: true,
		age: 85,,
        
	},
    {
        name: "Matias",
        lastname: "Casal",
        alive: true,
        age: 16,
        
    },
    {
        name: "Pedro",
        lastname: "Caceres",
        alive: true,
        age: 15,
        
    },
    {
        name: "Marcelo",
        lastname: "Cala",
        alive: true,
        age: 19,
        
    }
];
    
    people.forEach((person) =>
	console.log({ name: person.name, alive: person.alive }),
);
