import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})
export class DropDownDirective{
    @HostBinding("class.open") isOpen: boolean = false;

    @HostListener("click") toggleOpen(eventData: Event){
        this.isOpen = !this.isOpen;
    }
}