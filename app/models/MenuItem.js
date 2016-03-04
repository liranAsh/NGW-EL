System.register([], function(exports_1) {
    var MenuItem;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by Liran on 04/03/2016.
             */
            MenuItem = (function () {
                function MenuItem(displayText, bIsCollapse, iconName, link) {
                    this.displayText = displayText;
                    this.bIsCollapse = bIsCollapse;
                    this.link = link;
                    this.iconName = iconName;
                }
                return MenuItem;
            })();
            exports_1("MenuItem", MenuItem);
        }
    }
});
//# sourceMappingURL=MenuItem.js.map