// >> settimeout-time-picker-configure-code
import { Component } from "@angular/core";
import { setTimeout } from "timer";
import { Color } from "color";

@Component({
    selector: "settimeout-timer-module-example",
    styleUrls: ["./settimeout-example.css"],
    templateUrl: "./settimeout-example.html"
})

export class SetTimeoutComponent {
    public counter = 0;
    public buttonstyle = "btn btn-primary btn-rounded-sm";

    constructor() { }

    public increase(args) {
        args.object.backgroundColor = new Color("#3078FE");
        let that = this;
        setTimeout(function () {
            that.counter++;
            args.object.backgroundColor = new Color("#30BCFF");
        }, 1000);
        this.buttonstyle = "btn btn-rounded-sm btn-active";
    }
    public decrease(args) {
        args.object.backgroundColor = new Color("#3078FE");
        let that = this;
        setTimeout(function () {
            that.counter--;
            args.object.backgroundColor = new Color("#30BCFF");
        }, 1000);
    }
}
// << settimeout-time-picker-configure-code
