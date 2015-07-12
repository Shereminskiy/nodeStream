//
//function foo() {
//    var bar;
//    quux = function zip() {
//        var quux;
//    }
//}

function foo() {
    var bar = zip;
    function zip() {
        var quux,
            bar = true;

    }
}




