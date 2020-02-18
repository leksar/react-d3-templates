import React, { useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data = [], width = 400, height = 300 }) => {

    let canvas = React.createRef();
    const margin = { top: 20, right: 30, bottom: 20, left: 30 }
    width = width - margin.left - margin.right;

    useEffect(() => {
        const gapWidth = 1; //space between rects
        const barWidth = (width - gapWidth * data.length) / data.length
        const svgCanvas = d3.select(canvas.current).style('transform', 'translate(' + margin.left + 'px,' + margin.top + 'px)');

        const y = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height, 0])
            .nice();

        const rects = svgCanvas.selectAll('rect').data(data)

        rects.exit().remove()
        rects.enter().append('rect')
            .attr('width', barWidth)
            .attr('height', d => height - y(d))
            .attr('x', (_, idx) => idx * (barWidth + gapWidth))
            .attr('y', d => y(d))

        rects.attr('width', barWidth)
            .attr('height', d => height - y(d))
            .attr('x', (_, idx) => idx * (barWidth + gapWidth))
            .attr('y', d => y(d))

        d3.selectAll('.x.axis').remove()

        d3.select(canvas.current)
            .append('g')
            .attr("class", "x axis")
            .call(d3.axisLeft(y));
    }, [data])

    return (
        <svg
            className='react-d3-templates-canvas'
            width={width + margin.left + margin.right}
            height={height + margin.top + margin.bottom}
        >
            <g
                ref={canvas}
                width={width - margin.left - margin.right}
                height={height - margin.top - margin.bottom}
            />
        </svg>
    )
}
export default BarChart;