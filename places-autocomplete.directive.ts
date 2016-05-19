import {Directive, ElementRef, Output, EventEmitter} from '@angular/core';

declare var google: any;

@Directive({
	selector: '[places-autocomplete]'
})
export class PlacesAutocompleteDirective {

@Output() placeChange: EventEmitter<any> = new EventEmitter();
private autocomplete: any;

constructor(el: ElementRef){

	this.autocomplete = new google.maps.places.Autocomplete(el.nativeElement);

	google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
		this.placeChange.emite(this.autocomplete.getPlace());
	});

}




}
