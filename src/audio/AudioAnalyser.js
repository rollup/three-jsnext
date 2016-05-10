/**
 * @author mrdoob / http://mrdoob.com/
 */

function AudioAnalyser ( audio, fftSize ) {
	this.isAudioAnalyser = true;

	this.analyser = audio.context.createAnalyser();
	this.analyser.fftSize = fftSize !== undefined ? fftSize : 2048;

	this.data = new Uint8Array( this.analyser.frequencyBinCount );

	audio.getOutput().connect( this.analyser );

};

Object.assign( AudioAnalyser.prototype, {

	getData: function () {

		this.analyser.getByteFrequencyData( this.data );
		return this.data;

	}

} );


export { AudioAnalyser };