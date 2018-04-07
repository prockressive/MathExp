/**
 * Author: M. Topaloglu
 * Date: 07.04.2018
 * Version: 1.0
 */

/**
 * 
 */


class MathExp {
	
    constructor() {
		  
    	console.log('\n\n\nStarting MathExp...');
    	//read expression from command line 
        this.exp = process.argv[2];
        //print expression
        console.log('\nyour expression: ' + this.exp);
    }

    evaluate() {
        
    	//replace sqrt by Math.sqrt
    	this.exp = this.exp.replace('sqrt', 'Math.sqrt');
    	//evaluate arithmetic expression
    	this.result = eval(this.exp);
    	
    }
    showResult() {
    	
    	//print the result
    	console.log('\n... and the result: ' + this.result);
    }
}


var mathexp = new MathExp();
mathexp.evaluate();
mathexp.showResult();

