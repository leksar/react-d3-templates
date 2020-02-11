import React, { useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data = [], width = 400, height = 300 }) => {

    let canvas = React.createRef();

    useEffect(() => {
        const gapWidth = 1; //space between rects
        const barWidth = (width - gapWidth * data.length) / data.length
        const svgCanvas = d3.select(canvas.current);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, height]);

        const rects = svgCanvas.selectAll('rect').data(data)
        rects.exit().remove()
        rects.enter().append('rect')
            .attr('width', barWidth)
            .attr('height', d => y(d))
            .attr('x', (_, idx) => idx * (barWidth + gapWidth))
            .attr('y', d => height - y(d))

        rects.attr('width', barWidth)
            .attr('height', d => y(d))
            .attr('x', (_, idx) => idx * (barWidth + gapWidth))
            .attr('y', d => height - y(d))

        const texts = svgCanvas.selectAll('text').data(data)
        texts.exit().remove()
        texts.enter().append('text')
            .attr('x', (_, idx) => idx * (barWidth + gapWidth))
            .attr('y', d => height - y(d) + 20)
            .text(d => d)

        texts.attr('x', (_, idx) => idx * (barWidth + gapWidth))
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