import React, { useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data = [], width = 400, height = 300 }) => {

    let canvas = React.createRef();

    useEffect(() => {
        const svgCanvas = d3.select(canvas.current);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, height]);

        svgCanvas.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('width', 20)
            .attr('height', d => y(d))
            .attr('x', (_, idx) => idx * 25)
            .attr('y', d => height - y(d))

        svgCanvas.selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .attr('x', (_, idx) => idx * 25)
            .attr('y', d => height - y(d) + 20)
            .text(d => d)
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
export default BarChart;