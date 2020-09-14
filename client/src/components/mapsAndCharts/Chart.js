import React, { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { Button, Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { shadows } from '@material-ui/system';
import "./Chart.css"

const maxDays = 60;

const buttonStyle = {
  marginRight: "10px",
};

const titleStyle = {
  color: "orange",
  fontSize: "2rem",
  borderTop: "2px dashed light-red",
  marginLeft: "60px"
};

export default (props) => {
  const [numDays, setNumDays] = useState(maxDays);
  const [showArea, setshowArea] = useState("false");

  const changeNumber = (e) => {
    // setNumDays({numDays, [e.target.name]: e.target.value});
    // console.log(e.currentTarget.value)
    var numberDays = parseInt(e.currentTarget.value);
    setNumDays(numberDays);
  };

  const addArea = (e) => {
    var areaChart = e.currentTarget.value;
    setshowArea(areaChart);
  };

  let dailyDeaths = { data: [] },
    totalDeaths = { data: [] },
    dailyInfected = { data: [] };
  props.data.map((item) => {
    dailyDeaths.data.push({
      x: item.date,
      y: item.dailydeaths,
    });
    totalDeaths.data.push({
      x: item.date,
      y: item.totalDeaths,
    });
    dailyInfected.data.push({
      x: item.date,
      y: item.dailyInfected,
    });
  });
  let data = [
    {
      id: "Daily Deaths",
      data: dailyDeaths.data.slice(-numDays),
    },
    {
      id: "Total Deaths",
      data: totalDeaths.data.slice(-numDays),
    },
    {
      id: "Daily Cases",
      data: dailyInfected.data.slice(-numDays),
    },
  ];
  return (
    <>
    <div style = {{display: "flex", justifyContent: "center"}}>
    <Card id = "chartCard" boxShadow = {10} >
    <Typography variant="h5" component="h5">
        <p style={titleStyle}>Covid Chart</p>
      </Typography>
      <div style={{ marginLeft: "50px" }}>
        <Button
          variant="contained"
          color="primary"
          size="small"

          style={buttonStyle}
          onClick={changeNumber}
          value={7}
        >
          1 Week
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={buttonStyle}
          onClick={changeNumber}
          value={30}
        >
          1 Month
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={buttonStyle}
          onClick={changeNumber}
          value={60}
        >
          2 Months
        </Button>
        <div style={{ float: "right", marginRight: "10px" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginRight: "10px" }}
            onClick={addArea}
            value="true"
          >
            Area
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={addArea}
            value="false"
          >
            Line
          </Button>
        </div>
      </div>

      <div style={{ height: "500px" }}>
        <ResponsiveLine
          data={data}
          enableArea={showArea === "true"}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            //legend: 'Date',
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          enableGridX={true}
          enableGridY={false}
          colors={{ scheme: "nivo" }}
          // enableArea = {true}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </Card>
    </div>


    </>
  );
};
