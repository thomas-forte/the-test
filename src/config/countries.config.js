import * as React from "react";

const countries = [
  { value: "england", display: "England" },
  { value: "scotland", display: "Scotland" },
  { value: "wales", display: "Wales" },
  { value: "ireland", display: "Ireland" },
  { value: "n-ireland", display: "Northern Ireland" },
  { value: "britain", display: "Britain" },
  { value: "GB", display: "Great Britain" },
  { value: "uk", display: "U.K." },
  { value: "us", display: "U.S." },
  { value: "the-us", display: "the U.S." },
  { value: "the-us-of-a", display: "the U.S. of A." },
  { value: "united-states", display: "United States" },
  { value: "usa", display: "The United States of America" },
  { value: "america", display: "America" },
  { value: "merica", display: "'merica" },
  { value: "usa2", display: "U.S.A." },
  { value: "Canada", display: "Canada" },
  { value: "mexico", display: "Mexico" },
  { value: "nf", display: "New France" },
  { value: "CSA", display: "Confederate States of America" },
  { value: "CR", display: "California Republic" },
  { value: "VR", display: "Vermont Republic" },
  { value: "RWF", display: "Republic of West Florida" },
  { value: "RT", display: "Republic of Texas" },
  { value: "KH", display: "Kingdom of Hawaii" },
  { value: "PS", display: "Principality of Sealand" },
  { value: "G-bay", display: "Guantanamo Bay" },
  { value: "ST", display: "St. Thomas" },
  { value: "SJ", display: "St. John" },
  { value: "SP", display: "St. Patrick" },
  { value: "RI", display: "Riker's Island" },
  { value: "AA", display: "Arkham Asylum" },
  { value: "Ak-48", display: "Alaska" },
];

const countriesAsSelectOptions = countries.map((country) => (
  <option key={country.value} value={country.value}>
    {country.display}
  </option>
));

export default countriesAsSelectOptions;
