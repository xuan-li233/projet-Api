import $ from 'jquery';
import Background from "./background";

export default class Activity{

	constructor(){
		this.initEls();   //initialiser
		this.initEvents();
	}

    initEls(){
		this.$els = {
			nameActiv: $('.name-activity'),
			detailActiv: $('.type'),
			accessActiv: $('.accessibility'),
			priceActiv:$('.price'),
			container:$('.activity')
		}


	}
	initEvents(){
		this.getActiv();

	}

	getActiv(){

	    	const api = {
			endpoint: 'http://www.boredapi.com/api/activity',
			params:{
				'per_page':1,

			}

		    };




		$.ajaxSetup({cache: false});
		$.getJSON(api.endpoint, api.params)
			.then((response) => {
				console.log(response);
				this.renderActiv(response.activity,response.type,response.accessibility,response.price)
			})
			.catch((e) => {
				console.log('Error',e)
			});

	};
	renderActiv(activity,type,accessibility,price){
	    	this.$els.nameActiv.text(activity);
		    this.$els.detailActiv.text("Type: "+type);
		    this.$els.accessActiv.text("Accessibility: "+accessibility);
		    this.$els.priceActiv.text("Price: "+price);
		    this.$els.container.addClass('is-ready');
		    new Background(activity);

	        }


    }
