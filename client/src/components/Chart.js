import React, { useState } from "react";
import { ResponsiveLine } from '@nivo/line';
import { Button } from "@material-ui/core";

const maxDays = 60;

const buttonStyle = {
  marginLeft: "10px",
};

const titleStyle = { 
  color: "orange",
  fontSize: "2rem",
  borderTop: "2px dashed red"
}

export default (props) => {

  const [numDays, setNumDays] = useState(maxDays);

const changeNumber = (e) => {
  // setNumDays({numDays, [e.target.name]: e.target.value});
  console.log(e.currentTarget.value)
  var numberDays = parseInt(e.currentTarget.value)
  setNumDays(numberDays)

}

  let dailyDeaths = {data: []}, totalDeaths = {data: []}, dailyInfected = {data: []};
  props.data.map(item=>{
    dailyDeaths.data.push({
      "x": item.date, "y": item.dailydeaths
    });
    totalDeaths.data.push({
      "x": item.date, "y": item.totalDeaths
    });
    dailyInfected.data.push({
      "x": item.date, "y": item.dailyInfected
    });
  });
  let data = [
    {
      "id": "Daily Deaths",
      data: dailyDeaths.data.slice(-numDays)
    },
    {
      "id": "Total Deaths",
      data: totalDeaths.data.slice(-numDays)
    },
    {
      "id": "Daily Cases",
      data: dailyInfected.data.slice(-numDays)
    }
  ];
  return (
    <>
    <h3 style = {titleStyle}>Covid Chart</h3>
    <div style = {{marginLeft: "50px"}}>
        <Button variant="contained" color = "primary" 
                  disabled={props.loadingInfo} style={buttonStyle} onClick={changeNumber}
                  value={7} >1 Week</Button>
                <Button variant="contained" color = "primary"  disabled={props.loadingInfo} style={buttonStyle} onClick={changeNumber} value={30} >1 Month</Button>
                <Button variant="contained" color ="primary"  disabled={props.loadingInfo} style={buttonStyle} onClick={changeNumber} value={60}>2 Months</Button>
    </div>
     <div style={{ height: "500px" }}>
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            //legend: 'Date',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX = {true}
        enableGridY = {false}
        colors={{ scheme: 'nivo' }}
        // enableArea = {true}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
    </>
  );
}