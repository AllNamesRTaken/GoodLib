import { should } from "chai";  // Using Should style
import { MyClass } from "../lib/MyClass";  // Using Should style

should();  // Modifies `Object.prototype`

describe("DataStore",
    function () {
        it("should load correct data when cell ports are used",
            function () {
                let foo = new MyClass();
                foo.foo.should.equal("bar");
            }
        );
    }
);