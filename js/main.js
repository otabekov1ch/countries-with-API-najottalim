const elCountriesList = document.querySelector('.hero-section__list')
const filterForm = document.querySelector('.hero-section__form')
const filterSelection = document.querySelector('.hero-section__select')
const elSearchInput = document.querySelector('.hero-section__filter-input')
const template = document.querySelector('.template').content
const darkModeBtn = document.querySelector('.btn')

filterForm.addEventListener('submit', (e) =>{
  e.preventDefault() 
  const filterRegion = countriesData.filter((country) => filterSelection.value == country.region)
  console.log(filterRegion);
  renderCountries(filterRegion, elCountriesList)
} )
function renderCountries(array, place) {
    place.innerHTML = null;
        array.forEach((country) => {
      const elTemp = template.cloneNode(true);
      const countryFlag = elTemp.querySelector(".hero-section__item-img");
      countryFlag.src = country.flags.svg;
      const countryName = elTemp.querySelector(".country-name");
      countryName.textContent = country.name.common
      const countryPopulation = elTemp.querySelector(".population");
      countryPopulation.textContent = country.population;
      const countryRegion = elTemp.querySelector(".region");
      countryRegion.textContent = country.region;
      const countryCapital = elTemp.querySelector(".capital");
      countryCapital.textContent = country.capital;
      
  
      place.append(elTemp);
    });
  }


  elSearchInput.addEventListener("input", (e) => {
    const elSearchValue = new RegExp(e.target.value, "gi");
    
    const filterCountry = countriesData.filter((country) =>
    country.name.common.match(elSearchValue)
    );
    renderCountries(filterCountry, elCountriesList);
    });
    darkModeBtn.addEventListener('click', () => {
      elCountriesList.classList.toggle("white-mode")
    })
      