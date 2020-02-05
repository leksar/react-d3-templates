import React, { useEffect } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data }) => {

    const CANVAS_WIDTH = 600;
    const CANVAS_HEIGHT = 400;
    let canvas = React.createRef();

    useEffect(() => {
        const svgCanvas = d3.select(canvas.current);

        svgCanvas.append("path")
            .datum(data)
            .attr("d", d3.line().x((_,idx) => idx*25).y(d => CANVAS_HEIGHT - d*10));
    }, [data])

    return (
        <svg width={CANVAS_WIDTH} height={CANVAS_HEIGHT} ref={canvas} />
    )
}
export default LineChart;