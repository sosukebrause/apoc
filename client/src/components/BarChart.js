import React, { useState } from "react";
import { ResponsiveBar } from '@nivo/bar';
import { Button } from "@material-ui/core";

export default (props) => {

const [axis, setAxis] = useState("");

const changeAxis = (e) => {

  console.log(e.currentTarget.value)
  var chartAxis = (e.currentTarget.value)
  setAxis(chartAxis)
}

let data = [
    { pollutant: "aqi",
    aqi: props.airObj.aqi, 
    },
    { pollutant: "co",
    "carbon Monoxide": props.airObj.co 
    },
    { pollutant: "o3",
    ozone: props.airObj.o3 
    },
    { pollutant: "pm25",
    "particle Matter": props.airObj.pm25 
    },
    { pollutant: "no2",
    "nitrogen Dioxide": props.airObj.no2 
    },
]

return (
    <>
    <h3 style = {{marginLeft: "50px"}}>Air Quality Index</h3>
    <Button variant="contained" color = "primary" size = "small"
                  onClick={changeAxis}
                  value="horizontal" >Horizontal</Button>
                   <Button variant="contained" color = "primary" size = "small"
                  onClick={changeAxis}
                  value="vertical" >Vertical</Button>
    <ResponsiveBar
        layout = {axis}
        data={data}
        keys={[ "aqi", "carbon Monoxide", "ozone", "particle Matter", "nitrogen Dioxide"]}
        indexBy="pollutant"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            // legend: 'pollutant',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'value',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
    </>
)
    }