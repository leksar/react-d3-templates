import React, { useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {

    const CANVAS_WIDTH = 600;
    const CANVAS_HEIGHT = 400;
    let canvas = React.createRef();

    useEffect(() => {
        const svgCanvas = d3.select(canvas.current);
        svgCanvas.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('width', 20)
            .attr('height', d => d * 10)
            .attr('x', (_, idx) => idx * 25)
            .attr('y', d => CANVAS_HEIGHT - d * 10)

            svgCanvas.selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .attr('x', (_, idx) => idx * 25)
            .attr('y', d => CANVAS_HEIGHT - d * 10)
            .text(d => d)
    }, [data])

    return (
        <svg width={CANVAS_WIDTH} height={CANVAS_HEIGHT} ref={canvas} />
    )
}
export default BarChart;