// Write code to return the the number of vowels in `str`

// var vowelCount = function(str) {
//     var result = 0;
//     var vowels = ["a", "e", "i", "o", "u"];

//     for (var i = 0; i < str.length; i++) {
//         var letter = str[i].toLowerCase();

//         if (vowels.indexOf(letter) !== -1) {
//             result += 1;
//         }
//     }
//     return result;
// };




// alternatively, this problem could have been solved without the use of indexOf, but by using the logical OR (||) operator to check for each vowel
var vowelCount = function(str) {
    var result = 0;

    for (var i = 0; i < str.length; i++) {
        var letter = str[i].toLowerCase();

        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            result += 1;
        }
    }
    return result;
};






var expect = chai.expect;

describe("vowelCount", function() {
  it('should return the number 3 when given the string "programmer"', function() {
    var str = "programmer";

    var result = vowelCount(str);

    expect(result).to.eql(3);
  });

  it('should return the number 8 when given the string "I think, therefore I am."', function() {
    var str = "I think, therefore I am.";

    var result = vowelCount(str);

    expect(result).to.eql(8);
  });

  it("should return the number 0 when given an empty string.", function() {
    var str = "";

    var result = vowelCount(str);

    expect(result).to.eql(0);
  });
});
