var flowChart = function () {

var width=80, 
    height=0;

var my = function (selection) {
    var cola_ = undefined;

    cola_ = cola.d3adaptor(d3)
    .linkDistance(100)
    .avoidOverlaps(true)
    .handleDisconnected(false)
    .size([width, height]);

    cola_
        .avoidOverlaps(true)
        .flowLayout('x', 150)
        .nodes(graph.nodes)
        .links(graph.links)
        .groups(graph.groups)
        .start();

    var group = svg.selectAll(".flowChartGroup")
        .data(graph.groups)
    .enter().append("rect")
        .attr("class", "flowChartGroup")
        .style("fill", "white");

    var pad = 3;
    var node = svg.selectAll(".flowChartNode")
        .data(graph.nodes)
    .enter().append("rect")
        .attr("class", "flowChartNode")
        .attr("width", function (d) { return d.width; })
        .attr("height", function (d) { 
            return d.height; 
        })
        .style("fill", "white")
        .style("stroke", "grey");

    var label = svg.selectAll(".flowChartLabel")
        .data(graph.nodes)
    .enter()
        .append("text")
        .attr("class", "flowChartLabel")
        .text(function (d) { return d.name; });

    var groupLabel = svg.selectAll(".flowChartGroupLabel")
        .data(graph.groups)
    .enter()
        .append("text")
        .attr("class", "flowChartGroupLabel")
        .text(function (d) { 
            console.log(d.name);
            return d.name; 
        });

    var link = svg.selectAll(".flowChartLink")
        .data(graph.links)
    .enter()
        .append("line")
        .attr("class", "flowChartLink");

    cola_.on("tick", function () {
        link
            .attr("x1", function (d) { 
                return d.source.x + d.source.width / 2; 
            })
            .attr("y1", function (d) { 
                return d.source.y; 
            })
            .attr("x2", function (d) { 
                return d.target.x - d.target.width / 2; 
            })
            .attr("y2", function (d) { return d.target.y; });

        node.attr("x", function (d) { return d.x - d.width / 2; })
            .attr("y", function (d) { return d.y - d.height / 2; });
        
        group.attr("x", function (d) { return d.bounds.x - pad; })
            .attr("y", function (d) { return d.bounds.y - pad; })
            .attr("width", function (d) { return d.bounds.width() + 2 * pad; })
            .attr("height", function (d) { return d.bounds.height() + 2 * pad; });

        label.attr("x", function (d) { return d.x; })
            .attr("y", function (d) {
                // console.log(d);
                var h = this.getBBox().height;
                return d.y + h/4;
            });

        groupLabel
            .attr("x", function (d) { 
                return d.bounds.x; 
            })
            .attr("y", function (d) {
                console.log(d.bounds);
                return d.bounds.y - 2 * pad;
            });
    });

}
    my.width = function(value) {
          if (!arguments.length) return width;
          width = value;
          return my;
        };

    my.height = function(value) {
            if (!arguments.length) return height;
            height = value;
            return my;
        };
return my;
}

