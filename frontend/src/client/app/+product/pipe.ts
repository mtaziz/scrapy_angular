import { Component, Pipe, PipeTransform } 			from '@angular/core';

@Pipe({name: 'values', pure: false})
export class ValuesPipe implements PipeTransform {
	transform(value: any, args:any[] = null): any {
		return Object.keys(value).map(key => value[key]);
	}
}

@Pipe({name: 'dictToList', pure: false})
export class ValuesPipe implements PipeTransform {
	transform(value: any, args:any[] = null): any[] {
		var arr = []
		for (var key in value) {
			 if (value.hasOwnProperty(key)) {
		        arr.push( {'name':key, 'perUnit':value[key]} );
		    }
		}
		console.log("AAAAA: ", arr);
		return arr;
	}
}