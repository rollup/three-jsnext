import { InterpolateDiscrete } from '../../constants';
import { KeyframeTrackConstructor } from '../KeyframeTrackConstructor';
import { KeyframeTrackPrototype } from '../KeyframeTrackPrototype';

/**
 *
 * A Track that interpolates Strings
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */

function StringKeyframeTrack ( name, times, values, interpolation ) {
	this.isStringKeyframeTrack = true;

	KeyframeTrackConstructor.call( this, name, times, values, interpolation );

};

StringKeyframeTrack.prototype =
		Object.assign( Object.create( KeyframeTrackPrototype ), {

	constructor: StringKeyframeTrack,

	ValueTypeName: 'string',
	ValueBufferType: Array,

	DefaultInterpolation: InterpolateDiscrete,

	InterpolantFactoryMethodLinear: undefined,

	InterpolantFactoryMethodSmooth: undefined

} );


export { StringKeyframeTrack };
