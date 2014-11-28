var chai = require('chai');
var should = chai.should();
var fs = require('fs');
var through = require('through');
var PigStream = require('./../index.js');
var util = require('util');

describe('Pig Stream', function(){

    describe('transform', function(){
	it('should transform input to pig latin', function(){
	    var input = 'why not?';
	    var pstream = new PigStream();
	    var exResult = 'ywhay otnay?';
	    var output = '';

	    pstream.pipe(through(function(data){
		output += data.toString();
	    }, function(data){
		output = output.trim();
		output.should.equal(exResult);
		sstream.close();
	    }));

	    pstream.write(input);
	});

	it('should allow changing vowel endings if word starts with vowel', function(){
	    var input = 'i am anne.';
	    var pstream = new PigStream({vowelEnding: 'er'});
	    var exResult = 'ier amer anneer.';
	    var output = '';

	    pstream.pipe(through(function(data){
		output += data.toString();
	    }, function(data){
		output = output.trim();
		output.should.equal(exResult);
		sstream.close();
	    }));

	    pstream.write(input);
	});

	it('should capitalize the first words too', function(){
	    var input = 'oh why bother...';
	    var pstream = new PigStream({capitalize: true});
	    var exResult = 'Ohway ywhay otherbay...';
	    var output = '';
	    pstream.pipe(through(function(data){
		output += data.toString();
	    }, function(){
		output = output.trim();
		output.should.equal(exResult);
		sstream.close();
	    }));

	    pstream.write(input);
	});
    });
});
