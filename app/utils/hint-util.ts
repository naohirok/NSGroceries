import { Color } from "color";
import { TextField } from "ui/text-field";

declare var NSAttributedString: any;
declare var NSDictionary: any;
declare var NSForegroundColorAttributeName: any;

export function setHintColor(args: { view: TextField, color: Color }) {

    //for android
    if (args.view.android) {
        args.view.android.setHintColor(args.color.android);
    }

    //for ios
    if (args.view.ios) {
        let dictionary = new NSDictionary(
            [args.color.ios],
            [NSForegroundColorAttributeName]
        );
    
        args.view.ios.attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(
            args.view.hint, dictionary
        );
    }
}
