import React, { useEffect } from 'react';

import Axis from '../axis';
import { max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { line } from 'd3-shape'

const LineChart = ({ data = [], width = 500, height = 400 }) => {

    let canvas = React.createRef();
    const margin = { top: 20, right: 30, bottom: 20, left: 30 }
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const y = scaleLinear()
        .domain([0, max(data)])
        .range([height - margin.top - margin.bottom, 0])
        .nice();

    useEffect(() => {
        const barWidth = innerWidth / data.length;
        const svgCanvas = select(canvas.current).style('transform', 'translate(' + margin.left + 'px,' + margin.top + 'px)');
        svgCanvas.selectAll('path').remove()
        const path = svgCanvas.append('path').datum(data)
        path.attr("d", line().x((_, idx) => idx * barWidth + barWidth / 2).y(d => y(d)));
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
export default LineChart;