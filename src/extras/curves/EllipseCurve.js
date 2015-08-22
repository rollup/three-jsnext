import { Vector2 } from '../../math/Vector2';
import { Curve } from '../core/Curve';

/**************************************************************
 *	Ellipse curve
 **************************************************************/

function EllipseCurve ( aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise ) {
	this.isEllipseCurve = true;

	this.aX = aX;
	this.aY = aY;

	this.xRadius = xRadius;
	this.yRadius = yRadius;

	this.aStartAngle = aStartAngle;
	this.aEndAngle = aEndAngle;

	this.aClockwise = aClockwise;

};

EllipseCurve.prototype = Object.create( Curve.prototype );
EllipseCurve.prototype.constructor = EllipseCurve;

EllipseCurve.prototype.getPoint = function ( t ) {

	var deltaAngle = this.aEndAngle - this.aStartAngle;

	if ( deltaAngle < 0 ) deltaAngle += Math.PI * 2;
	if ( deltaAngle > Math.PI * 2 ) deltaAngle -= Math.PI * 2;

	var angle;

	if ( this.aClockwise === true ) {

		angle = this.aEndAngle + ( 1 - t ) * ( Math.PI * 2 - deltaAngle );

	} else {

		angle = this.aStartAngle + t * deltaAngle;

	}
	
	var vector = new Vector2();

	vector.x = this.aX + this.xRadius * Math.cos( angle );
	vector.y = this.aY + this.yRadius * Math.sin( angle );

	return vector;

};


export { EllipseCurve };