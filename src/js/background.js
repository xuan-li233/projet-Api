
import $ from 'jquery';




export default class Background{
    constructor(activity){
        this.initEls();
        this.initEvents();
    }

    initEls(){
        this.$els = {
            background: $('.background'),
        }
        this.url = 'https://source.unsplash.com/random';
        this.cat = '638440';
        this.size = '1920*1080';
        // this.maVar =true ;
    }
    initEvents(){
        this.loadImage();

    }
    loadImage(){
        const  promise = new Promise( (resolve, reject) => {
            const image = new Image();
            image.src = `${this.url}/${this.size}`;
            image.onload = () => {
                resolve(image);
            };
            image.onerror = (error) => {
                reject(error);
            }
        });

        promise.then( (image) => {
            console.log(image);
            this.addBackground(image);
        });
        promise.catch( (error) => {
            console.log('Error', error);
        });

    }


    addBackground(image){
        this.$els.background.css('background-image',`url(${image.src})`);
        this.$els.background.addClass('is-ready');

    }
}
