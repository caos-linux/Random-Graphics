function myFunction() {
    var f = document.getElementById("frm1");
    seed=parseInt(f.elements[0].value);
    n=parseInt(f.elements[1].value);
    
    var m = new MersenneTwister(seed);
    x =[];
    y=[];
    var i;

        var trace1 = {
	x: [],
	y: [],
	mode: 'markers'
    };

    for (var i=1;i<=n;i++) {
	x.push(m.random());
	y.push(m.random());
    } 

    var trace1 = {
	x: x,
	y: y,
	mode: 'markers'
    };

    var data = [ trace1 ];

    var layout = {
	title:'Line and Scatter Plot'
    };

    Plotly.newPlot('myDiv', data, layout);
}
