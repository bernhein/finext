angular.module('prep').directive('ghVisualization', function () {

  // constants
  var margin = 20,
    width = 960,
    height = 500 - .5 - margin,
    color = d3.interpolateRgb("#f77", "#77f");

  return {
    restrict: 'E',
    transclude: true,
    template: '<div id="chart"></div>',

    controller: function ($scope, $element) {

      // Create and populate a data table.
      var data = new vis.DataSet();
      // create some nice looking data with sin/cos
      var counter = 0;
      var steps_x = $scope.model.divx; //50;  // number of datapoints will be steps*steps
      var steps_y = $scope.model.divy;

      var axis_x_Max = $scope.model.length; //314;
      var axis_y_Max = $scope.model.breadth;

      var axis_x_Step = axis_x_Max / steps_x; // axisMax / steps;
      var axis_y_Step = axis_y_Max / steps_y;

      for (var x = 0; x <= axis_x_Max; x += axis_x_Step) {
        for (var y = 0; y <= axis_y_Max; y += axis_y_Step) {
          var value = (Math.sin(x/50) * Math.cos(y/50) * 50 + 50);
          data.add({id:counter++,x:x,y:y,z:value,style:value});
        }
      }

      // specify options
      var options = {
        width:  '500px',
        height: '552px',
        style: 'surface',
        showPerspective: true,
        showGrid: true,
        showShadow: false,
        keepAspectRatio: true,
        verticalRatio: 0.5
      };

      // Instantiate our graph object.
      var container = document.getElementById('chart');
      var graph3d = new vis.Graph3d(container, data, options);



    /*  $scope.changeText = function(data){
        $scope.text = 'New directive text';
        $scope.data = data;

        var yaw=0.5,pitch=0.5, width=800 , height=300, drag=false;

        function dataFromFormular(func){
          var output=[];
          for(var x = -1 * $scope.data.inputs.divx; x<$scope.data.inputs.divx; x++){
            var f0=[];
            output.push(f0);
            for(var y= -1 * $scope.data.inputs.divy; y < $scope.data.inputs.divy; y++){
              f0.push(func(x,y));
            }
          }
          return output;
        }

        var surfaces=[
          {
            name: 'Dataset 1',
            data: dataFromFormular(function(x,y){
              return (Math.sqrt(x*x+y*y - 50));
            })
          }
        ];
        var selected=surfaces[0];
        //d3.selectAll().remove();

        /!*var ul=d3.select('body')
         .append('ul');*!/
        var svg=d3.select('#chart')
          .append('svg')
          .attr('height',height)
          .attr('width',width);

        var group = svg.append("g");

        var md=group.data([surfaces[0].data])
          .surface3D(width,height)
          .surfaceHeight(function(d){
            return d;
          }).surfaceColor(function(d){
            var c=d3.hsl((d+100), 0.6, 0.5).rgb();
            return "rgb("+parseInt(c.r)+","+parseInt(c.g)+","+parseInt(c.b)+")";
          });

        /!*ul.selectAll('li')
         .data(surfaces)
         .enter().append('li')
         .html(function(d){
         return d.name
         }).on('mousedown',function(){
         md.data([d3.select(this).datum().data]).surface3D()
         .transition().duration(500)
         .surfaceHeight(function(d){
         return d;
         }).surfaceColor(function(d){
         var c=d3.hsl((d+100), 0.6, 0.5).rgb();
         return "rgb("+parseInt(c.r)+","+parseInt(c.g)+","+parseInt(c.b)+")";
         });
         });*!/

        svg.on("mousedown",function(){
          drag=[d3.mouse(this),yaw,pitch];
        }).on("mouseup",function(){
          drag=false;
        }).on("mousemove",function(){
          if(drag){
            var mouse=d3.mouse(this);
            yaw=drag[1]-(mouse[0]-drag[0][0])/50;
            pitch=drag[2]+(mouse[1]-drag[0][1])/50;
            pitch=Math.max(-Math.PI/2,Math.min(Math.PI/2,pitch));
            md.turntable(yaw,pitch);
          }
        });

        console.log("from directive" + data)
      };

      $scope.$on('changeText',function(event, data){
        $scope.changeText(data)
      });
*/

    }
  }
});
