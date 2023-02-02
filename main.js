const searchInput = document.querySelector('.searchInput');
const searchBtn = document.querySelector('.search-btn');
const clearBtn = document.querySelector('.clear-btn');
const display = document.querySelector('.display');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '584cee3d4cmshbc7ed3c23b24627p11e5c4jsn1dfbb3334930',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

const getAnime = async () => { // look for titles that match the searchInput value 
    event.preventDefault();
    const animeTitle = searchInput.value.toLowerCase().replace(/ /gi, '%20');
    console.log(animeTitle);
    const baseUrl = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=';
    const endUrl = '&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
    const url = `${baseUrl}${animeTitle}${endUrl}`;
    try{
        const response = await fetch(url, options);
        if (response.ok){
            const jsonResponse = await response.json();
            const results = jsonResponse.data;
            return results;
        }
    }
    catch(error){
        console.log(error);
    }
}

const displayResult = async() => {
    const resultArray = await getAnime();
    console.log(resultArray);
    resultArray.forEach(element => {
        console.log(element);
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <a href='#'>
                <img src='${element.image}'>
                <figcaption>${element.title}</figcaption>
            </a>
        `;
        display.appendChild(item)
    });
}

const clearSearchBar = () => {
    searchInput.value = '';
}

searchBtn.addEventListener('click', displayResult);
clearBtn.addEventListener('click', clearSearchBar);

/*

 results.map(title => {
                imageContainer.innerHTML = `
                <a href="#">
                    <img src="${title.image}" alt="" class="image">
                <a/>
                `
            })
*/