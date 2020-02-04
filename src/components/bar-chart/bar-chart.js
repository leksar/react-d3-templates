import React, { useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {

    const CANVAS_WIDTH = 600;
    const CANVAS_HEIGHT = 400
    let canvas = React.createRef();

    useEffect(() => {
        d3.select(canvas.current)
            .append('svg')
            .attr('width', CANVAS_WIDTH)
            .attr('height', CANVAS_HEIGHT)
            .style('border', '1px solid #ccc')
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const svgCanvas = d3.select('svg');
        svgCanvas.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('width', 20)
            .attr('height', d => d * 10)
            .attr('x', (_, idx) => idx * 25)
            .attr('y', d => CANVAS_HEIGHT - d * 10)
            .attr('fill', 'orange')
    }, [data])

    return (
        <div ref={canvas}></div>
    )
}
export default BarChart;