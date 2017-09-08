var component = function module(f) {
    var width = f['width'] || 400,
        height = f['height'] || 400;
    
    var comp = {};
    
    comp.width = function(_width) {
        if(arguments.length == 0)
            return width;
        width = _width;
        return comp;
    }
    comp.height = function(_height) {
        if(arguments.length == 0)
            return height;
        height = _height
        return comp;
    }    
    
    return comp;
};


var pipe = function module (f) {
	comp = component (f)

	comp.accept = function (selection, graph) {
        var svg = selection.append("svg")
            .attr("width", width)
            .attr("height", height);

        var cola_ = cola.d3adaptor(d3)
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

        comp.group = svg
			.selectAll(".group")
            .data(graph.groups)
          	.enter().append("rect")
            .attr("class", "flowChartGroup");

		var groupLabel = svg.selectAll(".flowChartGroupLabel")
			.data(graph.groups)
			.enter()
			.append("text")
			.attr("class", "flowChartGroupLabel")
			.text(function (d) { 
				return d.name; 
			});

        var link = svg
			.selectAll(".link")
            .data(graph.links)
			.enter().append("line")
            .attr("class", "link");

        var pad = 3;

        comp.node = svg
			.selectAll(".node")
            .data(graph.nodes)
          	.enter().append("rect")
            .attr("class", "node")
            .attr("width", function (d) { 
				return d.width - 2 * pad; 
			})
            .attr("height", function (d) { 
				return d.height - 2 * pad; 
			})
            .attr("class", "flowChartNode");

        var label = svg.selectAll(".label")
            .data(graph.nodes)
           .enter().append("text")
            .attr("class", "flowChartLabel")
            .text(function (d) { return d.name; });

        comp.node
			.append("title")
            .text(function (d) { return d.name; });

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

        comp.node
				.attr("x", function (d) { 
					return d.x - d.width / 2 + pad; 
				})
                .attr("y", function (d) { 
					return d.y - d.height / 2 + pad; 
				});
            
            comp.group
				.attr("x", function (d) { return d.bounds.x; })
                .attr("y", function (d) { return d.bounds.y; })
                .attr("width", function (d) { return d.bounds.width(); })
                .attr("height", function (d) { return d.bounds.height(); });


            label.attr("x", function (d) { return d.x; })
                 .attr("y", function (d) {

                     var h = this.getBBox().height;

                     return d.y + h/4;

                 });

			groupLabel
				.attr("x", function (d) { 
					return d.bounds.x; 
				})
				.attr("y", function (d) {
					// console.log(d.bounds);
					return d.bounds.y - 2 * pad;
				});
        });
	}

    comp.setGroupActive = function (i) {
        comp.group
            .classed("flowChartActive", function (d, j) { return i == j; })
        console.log("h");
    }

    comp.setNodeActive = function (i) {
        comp.node
            .classed("flowChartActive", function (d, j) { return i == j; })
        console.log("h");
    }

	return comp;
}

