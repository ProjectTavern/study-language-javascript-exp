const labte = {};
Object.defineProperty(labte, "item", {
    set: function ( param ) {
        this.sports = param;
    }
});

labte.item = "Baseball";
console.log(labte.sports);