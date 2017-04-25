import { Component } 			from '@angular/core';
import { EdekaService }			from '../services/edeka.service';

@Component({
  selector: 'sd-dashboard',
  templateUrl: 'app/+dashboard/dashboard.component.html',
  styleUrls: ['app/+dashboard/dashboard.component.css'],
  providers: [EdekaService]
})
/**
 * This class represents the lazy loaded DashboardComponent.
 */
export class DashboardComponent {
	scrapedData: any[];
	totalData: number;
	interId: any;
	scrapyStatus: any;

	constructor(private edekaService: EdekaService) {
		// this.edekaService.getProductFromDB().subscribe((p:any) => { console.log("BBBB: ", p[0]); });

		this.edekaService
			.getScrapedData()
			.subscribe((p:any) => { 
				// console.log("Scraped_EDEKA: ", Object.values(JSON.parse(p['resultData'])));
				this.scrapedData = JSON.parse(p['resultData']);
				this.totalData = this.scrapedData.length;
				// console.log('data: ', p['resultData']);
			});
	}	

	onStartScrapy() {
		// this.edekaService.getFoods().subscribe((p:any) => { console.log("111EDEKA: ", p); });
		this.edekaService.postStartScrapy().subscribe((p:any) => { console.log("POST_EDEKA: ", p); });
		
		this.interId = setInterval( () => {
			this.edekaService.getScrapedData().subscribe((p:any) => { 
				console.log("Scraped_EDEKA: ", JSON.parse(p['resultData']));
					this.scrapedData = JSON.parse(p['resultData']);
					this.totalData = this.scrapedData.length;
					this.scrapyStatus = p['scrapyStatus'];
					console.log("status: ", this.scrapyStatus);

					if ( this.scrapyStatus === 'finished' ) {
						clearInterval(this.interId);
					}
				})
			}
			,
			1000
		);
	
	}

	onEndScrapy() {
		this.edekaService.postEndScrapy().subscribe((p:any) => { console.log("End Service: ", p); });
		clearInterval(this.interId);
	}

	productDetail(sku: any) {
		console.log("SSS: ", sku);
	}
}