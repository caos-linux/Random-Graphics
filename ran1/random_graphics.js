function myFunction() {
    var f = document.getElementById("frm1");
    seed=parseInt(f.elements[0].value);
    n=parseInt(f.elements[1].value);
    
    var m = new Rand(1,seed);
    x =[];
    y=[];
    var i;

        var trace1 = {
	x: [],
	y: [],
	mode: 'markers'
    };

    for (var i=1;i<=n;i++) {
//    console.log(m.rand1())
	x.push(m.rand1());
	y.push(m.rand1());
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
