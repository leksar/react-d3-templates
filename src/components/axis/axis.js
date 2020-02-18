import React, { createRef, useEffect } from 'react';
import { select } from 'd3-selection';
import { axisLeft } from 'd3-axis';

const Axis = ({ margin, y, width }) => {

    const yScale = createRef();
    const yGrid = createRef();

    useEffect(() => {
        select(yGrid.current)
            .attr('class','y grid')
            .style('transform', 'translate(' + margin.left + 'px,' + margin.top + 'px)')
            .call(axisLeft(y).tickSize(-width).ticks(5).tickFormat(''))

        select(yScale.current)
            .attr("class", "y axis")
            .style('transform', 'translate(' + margin.left + 'px,' + margin.top + 'px)')
            .call(axisLeft(y));
    }, [y])

    return (
        <>
            <g ref={yScale} />
            <g ref={yGrid} />
        </>
    )
}

export default Axis;