const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			people: [],

			vehicles: [],

			planets: [],

			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			loadPeople: async () => {
				try {
					const store = getStore();
					const response = await fetch("https://www.swapi.tech/api/people");
					const data = await response.json();

					setStore({ people: data["results"] });
					console.log("people", store.people);
				} catch (error) {
					console.error('Error loading people:', error);
				}
			},

			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(data => setStore({ vehicles: data["results"] }))
					.catch(error => console.log('error', error));
			},

			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(data => setStore({ planets: data["results"] }))
					.catch(error => console.log('error', error));
			},

			addToFavorites: (resourceData, resourceType) => {
				const store = getStore();

				let duplicate = false;

				if (store.favorites.filter((item) => item.uid === resourceData.uid && item.resourceType === resourceType)) {
					duplicate = true
				if (duplicate === true){
					actions.removeFromFavorites(resourceData)
				}
				} if (duplicate === false){
					setStore({ favorites: [...store.favorites, { resourceData, resourceType: resourceType }] })
				}
				console.log(store.favorites)
			},

			removeFromFavorites: (resourceData) => {
				const store = getStore();

				const indexToRemove = store.favorites.findIndex(
					(item) => item.uid === resourceData.uid
				);

				if (indexToRemove !== -1) {
					const newFavorites = [...store.favorites];
					newFavorites.splice(indexToRemove, 1);
					setStore({ favorites: newFavorites });
				}
			},
		}

	};
};

export default getState;
