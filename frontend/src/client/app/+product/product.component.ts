import { Component, OnInit }	from '@angular/core';
import { EdekaService }			from '../services/edeka.service';
import { ActivatedRoute, Params } 		from '@angular/router';
// import {DROPDOWN_DIRECTIVES} 	from 'ng2-bs-dropdown';
// import { DropdownComponent }   	from '../dropdown/dropdown.component';

@Component({
  selector: 'sd-product',
  templateUrl: 'app/+product/product.component.html',
  styleUrls: ['app/+product/product.component.css'],
})
/**
 * This class represents the lazy loaded ProductComponent.
 */
export class ProductComponent implements OnInit {
	scrapedData: any[];
	totalData: any;
	currentData: any;
	apiAllData: any = [];
	nutrients: any;
	apiCurrentData: any = { weight: ''};

	constructor(private edekaService: EdekaService, private route: ActivatedRoute) {

		var object = this.edekaService.getStorage();
		
		this.scrapedData = JSON.parse(object['resultData']);

		this.apiAllData = this.edekaService.getApiAllData();

		if(this.apiAllData.length == 0)
		{	
			this.edekaService.getProductFromDB()
				.subscribe((p:any) => { 
					this.edekaService.setApiAllData(p);

	  				this.apiCurrentData = p.find((obj: any) => obj.id === '00001'+this.currentData.sku);
	  				console.log("+++++++++++++++++++++++++++++++");
	  				console.log("API: ", this.apiCurrentData.nutrients);
				});
		}
	}

	ngOnInit(): void {
		let sku: any;

	    this.route.params.forEach((params: Params) => {
	    	sku = params['sku'];
	    });

		console.log("ID: ", typeof sku);

	    if (sku == undefined) {
	    	console.log("Id is nll");
	    	this.currentData = this.scrapedData[0];

	    	this.apiCurrentData = this.apiAllData.find((obj: any) => obj.id === '00001' + this.currentData.sku)
	    		|| { weight: '', brand: '', description: '', manufacturer: ''};
			this.nutrients = JSON.parse(this.currentData['nutrients']);

	    } else {
	    	console.log("ND: ", sku);
	    	this.currentData = this.scrapedData.find((obj: any) => obj.sku === sku);

	    	this.apiCurrentData = this.apiAllData.find((obj: any) => obj.id === '00001' + this.currentData.sku);

	    	this.nutrients = JSON.parse(this.currentData['nutrients']);
	    	console.log('CDE: ', this.currentData)
	    }
	}
}


