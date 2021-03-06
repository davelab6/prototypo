'use strict';

angular.module('prototypo.Component', [])
	.factory('Component', function( formulaLib, controls, initComponent, processComponent, mergeComponent, Point ) {

		function Component( formula, args ) {
			// new is optional
			if ( !( this instanceof Component ) ) {
				return new Component( formula, args );
			}

			this.formula = formula;
			this.segments = [];
			this.mergeAt = args.mergeAt || 0;
			this.after = args.after || true;
			this.params = args.params || function(){};


			this.context = {
				controls: controls,
				params: this.params,
				self: this.segments
			};

			this.init();

			this.components = formula.components.map(function( component ) {
				component.mergeAt = this.segments[ component.mergeAt ];
				return Component( formulaLib[ component.type ], component );
			});

			// it should be safe to reset the global curPos here
			args.curPos = Point(0,0);
		}

		Component.prototype = {
			init: function() { initComponent( this ); },
			process: function() { processComponent( this ); },
			mergeTo: function( glyph ) { mergeComponent( this, glyph ); }
		};

		return Component;
	})

	.factory('initComponent', function( Segment ) {
		return function( component, args ) {
			component.formula.forEach(function( segmentFormula, i ) {
				// only process non-empty segments
				if ( segmentFormula ) {
					component.segments[i] = Segment( segmentFormula( component.context ), args.curPos );
				}
			});
		};
	})

	.factory('processComponent', function( Segment ) {
		function processComponent( component, args, glyph ) {
			// initialize the drawing with the origin
			component.segments[0] = Segment( args.curPos );

			component.formula.forEach(function( segmentFormula, i ) {
				// only process non-empty segments
				if ( segmentFormula ) {
					component.segments[i] = Segment( segmentFormula( component.context ), args.curPos );
				}
			});

			component.mergeTo( glyph );

			component.components.forEach(function( component ) {
				component.process( args, glyph );
			});
		}

		return processComponent;
	})

	.factory('mergeComponent', function() {
		return function( component, glyph ) {
			var insertIndex = component.mergeAt === 0 ?
				0 :
				glyph.indexOf( component.mergeAt ) + ( component.after ? 0 : -1 );

			[].splice.apply( glyph, [insertIndex, 0].concat( component.segments ) );

			component.mergeAt.virtual = true;
		};
	});