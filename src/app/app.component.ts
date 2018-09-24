import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SearchOneComponent} from './search-one/search-one.component';
import {SearchTwoComponent} from './search-two/search-two.component';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('searchTemplate', {read: ViewContainerRef}) container;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
  }


  changeSearchCondition(component: string) {
    this.container.clear();
    let factory: ComponentFactory<any>;

    switch (component) {
      case 'one':
        factory = this.resolver.resolveComponentFactory(SearchOneComponent);

        break;
      case 'two':
        factory = this.resolver.resolveComponentFactory(SearchTwoComponent);
        break;
    }

    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.onFormSubmit.subscribe((frmSearch: FormGroup) => {
      console.log(frmSearch.get('name').value);
    });


  }
}
