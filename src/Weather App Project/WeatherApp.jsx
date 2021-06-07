import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { Card, InputGroup, FormControl } from "react-bootstrap";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import "./weather.css";
function WeatherApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("karachi");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=89d197514def6f4719677f013547b6c4`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <div className="container my-5 col-md-6 col-sm-auto ">
      <Card className="text-center">
        <Card.Header className="text-dark fw-bold bg-primary text-white">
          Global Weather App
        </Card.Header>
        <div style={{ backgroundColor: "#2b2b2b" }}>
          <Card.Body>
            <Card.Title>
              <InputGroup className="mb-5">
                <FormControl
                  placeholder="Enter Your City Name"
                  aria-label="Enter Your City Name"
                  type="search"
                  value={search}
                  aria-describedby="basic-addon"
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </InputGroup>
            </Card.Title>

            {!city ? (
              <p className="text-white">❎ No Data Found</p>
            ) : (
              <div>
                <Card.Text>
                  <div className="d-flex justify-content-center text-primary text-capitalize">
                    <AcUnitIcon fontSize="large" /> &nbsp;&nbsp;
                    <h3>{search}</h3>
                  </div>
                </Card.Text>
                <Button
                  className="py-2 fs-6 fw-bolder"
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  {city.temp}°Cel
                </Button>
                <p className="mx-auto mt-3 mb-0 text-capitalize text-white">
                  Min {city.temp_min}°C | Max {city.temp_max}°C
                </p>
              </div>
            )}
          </Card.Body>
          <Card.Footer className="bg-primary "></Card.Footer>
          <Card.Footer className="bg-muted text-danger d-flex justify-content-end">
            <span> Develop By Muhammad Fahad</span>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
}
export default WeatherApp;
