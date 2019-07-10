const key = 'TDB8WECySoaj6M0Rkpvai8F4zT8CfsdR';

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
    // returns a promise
};
// process promise
getCity('dubai')
    .then(data => console.log(data))
    .catch(err => console.log(err))