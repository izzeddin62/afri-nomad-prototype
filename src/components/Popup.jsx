import Country from "./Country";

export default function Popup({ text, locations }) {
  console.log(locations, '=============================')
  const countries = [
    ...new Set(
      locations.map((el) =>
        JSON.stringify({ country: el.country, countryId: el.countryId })
      )
    ),
  ].map((el) => JSON.parse(el));
  const filteredCountries = countries.filter(el => el.country.toLowerCase().includes(text.toLowerCase()))

  return (
    <div className="shadow-small mt-5 rounded-[32px] max-w-xl mx-auto p-10 flex flex-col gap-5">
      {filteredCountries.length > 0 ? filteredCountries.map((el) => (
        <Country key={el.countryId} {...el} />
      )) : <h3>No country found containing `{text}`</h3>}
    </div>
  );
}
