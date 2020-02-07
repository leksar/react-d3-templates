import React, { useEffect } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data = [], width = 400, height = 300 }) => {

    let canvas = React.createRef();

    useEffect(() => {
        const y = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, height]);

        const svgCanvas = d3.select(canvas.current);

        svgCanvas.append("path")
            .datum(data)
            .attr("d", d3.line().x((_, idx) => idx * 25).y(d => height - y(d)));
    }, [data])

    return (
        <svg
            className='react-d3-templates-canvas'
            width={width}
            height={height}
            ref={canvas}
        />
    )
}
export default LineChart;