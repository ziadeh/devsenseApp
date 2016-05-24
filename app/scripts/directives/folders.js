'use strict';

/**
 * @ngdoc directive
 * @name devsenseApp.directive:folders
 * @description
 * # folders
 */

angular.module('devsenseApp')
  .directive('folders', function (api,$interpolate, $compile, $base64) {
/*	return {
		restrict: "E",
		template: "<button addbuttons>Click to add buttons</button>"
	}*/

    return {
      restrict: 'E',
      scope: {
      	type: '@',
      	label: '@',
      	elempath: '@'
      },
      template: '<li class="nodeFolder" data-open="" id="{{label}}"><a href="" ng-class="{\'openedFolder\':opened }" ng-click="openFolder(label, label);opened = !opened">{{label}}</a></li>',
       link: function(scope, elem, attrs) {

		scope.isActive = false;
		scope.activeRoot = function() {
			scope.isActive = !scope.isActive;
		}  
		
        scope.openFolder  = function (param, elemlab) {
        	console.log(elemlab);
        	var specialName = param.replace(/[/]/g, "");
        	var hasLoaded = elem.find('ul.'+elemlab).length;
        	if(hasLoaded < 1) {
        	elem.find('li#'+ elemlab + 'ul').parents('ul').first().hide();
			elem.find('li#'+ elemlab).toggleClass('active');
			var url = api.apiUrl(param);
			url.then(function(data) {
				scope.folders = data.data;
				var folderName = scope.folders.data.label;
				var innerData = scope.folders.data.children || [];
				var currentFolder = folderName;
				var elemnt;
				elem.find('li#'+elemlab).append("<ul class='"+elemlab+"'></ul>");
				for(var i=0; i < innerData.length; i++) {
					var elemLabel = scope.folders.data.children[i].label;
					 switch(scope.folders.data.children[i].type) {
				 		case 0:
				 			elemnt = $('<li class="nodeFolder" href="" id="'+elemLabel+'"><a data-path="'+ folderName + '/' + elemLabel +'" ng-class="{\'openedSubFolder\':opened }" ng-click="openFolder(\''+param  +'/'+elemLabel+'\', \''+elemLabel+'\'); opened = !true">'+elemLabel + '</a></li>').appendTo(elem.find('ul.'+elemlab));
				 			break;
				 		case 1: 
				 			elemnt = $('<li class="nodeImage"><a href="#/picture/'+ $base64.encode(param) + '?id=' + elemLabel +'" ng-click="openFolder(\''+ param  +'/'+elemLabel+'\')">'+elemLabel + '</a></li>').appendTo(elem.find('ul.'+elemlab));
				 		break;
					 }
					 $compile(elemnt)(scope);
				 	var radius = 300;
					var fields = $('ul.'+elemlab+' li'), container = $('.list-group-item li li'), width = container.width(), height = container.height();
					var angle = -0.3, step = (Math.PI) / fields.length;
					fields.each(function() {
					    var x = Math.round(radius * Math.cos(angle));
					    var y = Math.round(radius * Math.sin(angle) );
					    $(this).css({
					        left: x + 'px',
					        top: y + 'px'
					    });
					    angle += step;
					});
				}
				
			});
			} else {
				$('ul.'+elemlab).toggleClass('hidden');
			elem.find('li#'+ elemlab).toggleClass('active');
			}
        } 
		var radius = 300;
		var fields = $('.list-group-item li li'), container = $('.list-group-item'), width = container.width(), height = container.height();
		var angle = 0, step = (Math.PI) / fields.length;
		fields.each(function() {
		    var x = Math.round(radius * Math.cos(angle)-100);
		    var y = Math.round(radius * Math.sin(angle));
		    $(this).css({
		        left: x + 'px',
		        top: y + 'px'
		    });
		    angle += step;
		});
      }
    } 
  });