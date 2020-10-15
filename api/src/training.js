function getFib (fibIndex) {
	// Your code here:
    
    var fibOutput = new Array();

    for (var i = 0; i < fibIndex; i++){
        switch(i){
        case 0:
            fibOutput.push(1);
        break;
        case 1:
            fibOutput.push(1);
        break;
        default:
            fibOutput.push(fibOutput[i-1] + fibOutput[i-2]);
        break;
        }

        console.log(fibOutput[i]);
    }

    console.log('lenght:' + fibOutput.length);
    return fibOutput[fibOutput.length-1];
}

async function testPromise(){
    await runSlow().then(function(){console.log("ok timer")});
}

async function runSlow(){
    setTimeout(function () { console.log("waiting"); return "waiting";  }, 1000);
}

testPromise();
//getFib(40);