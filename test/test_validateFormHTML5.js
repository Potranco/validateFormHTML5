/* Test validateFormHTML5 class */

var assert = require("assert");
var jsdom = require("jsdom").jsdom;
var validateFormHTML5 = require("../src/validateFormHTML5.js");



describe("Validate Form with HTML5 by default",function(){

        it('Create empty object', function() {
            var validate=new validateFormHTML5('',{});
            assert(validate);
        });

        it('Form id exist', function() {
            var validate=new validateFormHTML5('',{});
            assert.notEqual(undefined,validate.idform);
        });

        it('Json exist', function() {
            var validate=new validateFormHTML5('',{});
            assert.notEqual(undefined,validate.jsonValidate);
        });
        
        it('Regexp exist', function() {
              var validate=new validateFormHTML5('',{});
              assert.notEqual(0,validate.regexps.length);
        });

        it('Settings exist', function() {
            var validate=new validateFormHTML5('',{});
            assert.notEqual(undefined,validate.settings);
        });

        
        describe('Attribute inputs for default', function() {
            var validate=new validateFormHTML5('',{});
            it('Required exist', function() {
              assert.equal('REQUIRED',validate.AttributeInputs.required);
            });
            it('Minlength exist', function() {
              assert.equal('minlength',validate.AttributeInputs.minLength);
            });
            it('Maxlength exist', function() {
              assert.equal('maxlength',validate.AttributeInputs.maxLength);
            });
        });
        
        describe('Regexp for default values', function() {
            var validate=new validateFormHTML5('',{});
            it('url exist', function() {
              assert(validate.regexps['url']);
            });
            it('email exist', function() {
              assert(validate.regexps['url']);
            });
            it('url exist', function() {
              assert(validate.regexps['email']);
            });
            it('creditCard exist', function() {
              assert(validate.regexps['creditCard']);
            });
            it('alphaNumeric exist', function() {
              assert(validate.regexps['alphaNumeric']);
            });
            it('numeric exist', function() {
              assert(validate.regexps['numeric']);
            });
            it('timeString exist', function() {
              assert(validate.regexps['timeString']);
            });
            it('dateString exist', function() {
              assert(validate.regexps['dateString']);
            });
            it('usZipCode exist', function() {
              assert(validate.regexps['usZipCode']);
            });
            it('caPostalCode exist', function() {
              assert(validate.regexps['caPostalCode']);
            });
            it('ukPostCode exist', function() {
              assert(validate.regexps['ukPostCode']);
            });
            it('nanpPhone exist', function() {
              assert(validate.regexps['nanpPhone']);
            });
            it('eppPhone exist', function() {
              assert(validate.regexps['eppPhone']);
            });
            it('socialSecurityNumber exist', function() {
              assert(validate.regexps['socialSecurityNumber']);
            });
            it('affirmative exist', function() {
              assert(validate.regexps['affirmative']);
            });
            it('hexadecimal exist', function() {
              assert(validate.regexps['hexadecimal']);
            });
            it('hexColor exist', function() {
              assert(validate.regexps['hexColor']);
            });
            it('ipv4 exist', function() {
              assert(validate.regexps['ipv4']);
            });
            it('ipv6 exist', function() {
              assert(validate.regexps['ipv6']);
            });
            it('ip exist', function() {
              assert(validate.regexps['ip']);
            });
                       
        });
        
    
    
     it('Create window object', function() {
        var document = jsdom("hello world");
        var window = document.defaultView;

        assert(window);
     });
     it('Create document', function() {
        var document = jsdom();
        var window = document.defaultView;

        assert(document);
     });
    
     it('Create form element', function() {
        var document = jsdom("<form id='Form1'></form>");
        var window = document.defaultView;
        var form=document.getElementById('Form1');

        assert(document.getElementById('Form1'));
     });
    
});

