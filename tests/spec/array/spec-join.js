define(['src/array/join'], function(join) {

    describe('array/join()', function() {

        it('should join strings in the array', function() {
            var arr = ['foo', 'bar'];

            expect( join(arr, ', ') ).toEqual('foo, bar');
        });

        it('should default to blank separator', function() {
            var arr = ['foo', 'bar'];
            expect( join(arr) ).toEqual('foobar');
        });

        it('should exclude null and empty values', function() {
            var arr = [null, 'foo', '', 'bar', undefined, 'baz'];
            expect( join(arr, '-') ).toEqual('foo-bar-baz');
        });

    });

});
