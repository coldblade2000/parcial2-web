import {useEffect, useRef, useState} from "react";
import * as d3 from "d3"

const Grafica = ({peliculas}) => {
    const [drawn, setDrawn] = useState(false)

    const canvasRef = useRef()

    useEffect(() => {
        const canvas = d3.select(canvasRef.current)
        if (peliculas.length > 0) renderGraph(canvas)
    }, [peliculas])

    const renderGraph = (canvas) => {
        var margin = {top: 30, right: 30, bottom: 70, left: 60},
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        let svg;
        if (!drawn) {
            svg = canvas
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");
        } else {
            return
        }


        // Parse the Data

        // X axis
            var x = d3.scaleBand()
                .range([0, width])
                .domain(peliculas.map(function (d) {
                    return d.id;
                }))
                .padding(0.2);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end");

        // Add Y axis
            var y = d3.scaleLinear()
                .domain([0, 10_000_000])
                .range([height, 0]);
            svg.append("g")
                .call(d3.axisLeft(y));

        // Bars
            svg.selectAll("mybar")
                .data(peliculas)
                .enter()
                .append("rect")
                .attr("x", function (d) {
                    return x(d.id);
                })
                .attr("y", function (d) {
                    return y(d.views);
                })
                .attr("width", x.bandwidth())
                .attr("height", function (d) {
                    return height - y(d.views);
                })
                .attr("fill", "#69b3a2")

        if (!drawn) setDrawn(true)
    }

    return (
        <div className="m-5">
            <div ref={canvasRef}></div>
        </div>
    )
}
export default Grafica
