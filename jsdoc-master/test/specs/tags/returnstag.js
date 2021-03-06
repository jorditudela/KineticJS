describe("@returns tag", function() {
    var docSet = jasmine.getDocSetFromFile('test/fixtures/returnstag.js'),
        find = docSet.getByLongname('find')[0],
        bind = docSet.getByLongname('bind')[0];

    it('When a symbol has an @returns tag with a type and description, the doclet has a returns array that includes that return.', function() {
        expect(typeof find.returns).toBe('object');
        expect(find.returns.length).toBe(1);
        expect(find.returns[0].type.names.join(', ')).toBe('String, Array.<String>');
        expect(find.returns[0].description).toBe('The names of the found item(s).');
    });

    it('When a symbol has an @returns tag with only a description, the doclet has a returns array property that includes that return.', function() {
        expect(typeof bind.returns).toBe('object');
        expect(bind.returns.length).toBe(1);
        expect(bind.returns[0].description).toBe('The binding id.');
    });
});
