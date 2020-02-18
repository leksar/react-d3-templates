import React, { useEffect } from 'react';

import Axis from '../axis';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

const BarChart = ({ data = [], width = 500, height = 400 }) => {

    let canvas = React.createRef();
    const gapWidth = 1; //space between rects
    const margin = { top: 20, right: 30, bottom: 20, left: 30 }
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const y = scaleLinear()
        .domain([0, max(data)])
        .range([height - margin.top - margin.bottom, 0])
        .nice();

    useEffect(() => {
        const barWidth = (innerWidth - gapWidth * data.length) / data.length
        const svgCanvas = select(canvas.current).style('transform', 'translate(' + margin.left + 'px,' + margin.top + 'px)');
        const rects = svgCanvas.selectAll('rect').data(data)

        rects.exit().remove()
        rects.enter().append('rect')
            .attr('width', barWidth)
            .attr('height', d => innerHeight - y(d))
            .attr('x', (_, idx) => idx * (barWidth + gapWidth))
            .attr('y', d => y(d))

        rects.attr('width', barWidth)
            .attr('height', d => innerHeight - y(d))
            .attr('x', (_, idx) => idx * (barWidth + gapWidth))
            .attr('y', d => y(d))
    }, [data])

    return (
        <svg
            className='react-d3-templates-canvas'
            width={width}
            height={height}
        >
            <Axis data={data} y={y} width={width} height={height} margin={margin} />
            <g
                ref={canvas}
                width={innerWidth}
                height={innerHeight}
            />
        </svg>
    )
}
export default BarChart;