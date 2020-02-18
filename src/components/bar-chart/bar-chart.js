import React, { useEffect } from 'react';

import Axis from '../axis';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

const BarChart = ({ data = [], width = 400, height = 300 }) => {

    let canvas = React.createRef();
    const gapWidth = 1; //space between rects
    const margin = { top: 20, right: 30, bottom: 20, left: 30 }
    width = width - margin.left - margin.right;

    const y = scaleLinear()
        .domain([0, max(data)])
        .range([height, 0])
        .nice();

    useEffect(() => {
        const barWidth = (width - gapWidth * data.length) / data.length
        const svgCanvas = select(canvas.current).style('transform', 'translate(' + margin.left + 'px,' + margin.top + 'px)');
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
    }, [data])

    return (
        <svg
            className='react-d3-templates-canvas'
            width={width + margin.left + margin.right}
            height={height + margin.top + margin.bottom}
        >
            <Axis data={data} y={y} width={width} height={height} margin={margin} />
            <g
                ref={canvas}
                width={width - margin.left - margin.right}
                height={height - margin.top - margin.bottom}
            />
        </svg>
    )
}
export default BarChart;