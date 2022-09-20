import recovered from "../assets/icons/confirmed.png"
import { useEffect, useState } from "react"
import { getAllSummary, getSummaryByCountry } from "../providers/Summary"

export default function Recovered() {
  const [summary, setSummary] = useState({});
  const [summaryId, setSummaryId] = useState({});
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [summaryCountry, setSummaryCountry] = useState(null);
}

const getSummary = async () => {
  const response = await getAllSummary();
  setSummary({
    ...summary,
    confirmed: response.confirmed.value,
    recovered: response.recovered.value,
    deaths: response.deaths.value,
    lastUpdate: response.lastUpdate,
  });
};

const getSummaryCountry = async (country) => {
  const response = await getSummaryByCountry(country);
  console.log(response)
  setSummaryCountry({
    ...summaryCountry,
    confirmed: response.confirmed.value,
    recovered: response.recovered.value,
    deaths: response.deaths.value,
    lastUpdate: response.lastUpdate,
  });
};

const getCountries = async () => {
  const response = await getAllCountries();
  console.log(response.countries.length);
  setCountries(response.countries);
};

useEffect(() => {
  getSummary();
  getSummaryIndonesia();
  getCountries();
}, []);

return (
  <>
    <Text>{response}</Text>
    <CardSummary
      image={recovered}
      title="Total Recovered"
      data={JSON.stringify(summary.recovered)}
    />
  </>
)