import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]',
})
export class IfDirective {
  // 1. What to remove
  // 2. Form where to remove

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    console.log(template);
  }
  @Input() set appIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
