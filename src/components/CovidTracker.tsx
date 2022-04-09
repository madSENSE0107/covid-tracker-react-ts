
import { useEffect, useState } from "react";
import { Idata } from "../Interface/Interfaces";

const fetchJson = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

const CovidTracker = () => {
  const [covidData, setCovidData] = useState<Idata[]>([]);
  // console.log(covidData)
  useEffect(() => {
    fetchJson("https://api.covid19api.com/summary").then((res) => {
      setData(res.Countries);
    });
  }, []);

  const setData = (Countries: any) => {
    Countries.map((country: any) => {
      const newData = {
        Country: country.Country,
        TotalDeaths: country.TotalDeaths,
      };

      setCovidData((covidData) => [...covidData, newData]);
      return null;
    });
  };
  console.log(covidData.length);
  return (
    
      <div>
        {covidData.length >= 100
          ? covidData.map((country,i) => 
              (<div key={i}>
                <div>{country.Country}=={country.TotalDeaths}</div>
                
              </div>)
            )
          : "Loading"}
      </div>
    
  );
};
export default CovidTracker;
