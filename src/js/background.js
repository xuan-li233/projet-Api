
import $ from 'jquery';




export default class Background{
    constructor(activity){
        this.initEls(activity);
        this.initEvents();

    }

    initEls(activity){
        this.$els = {
            background: $('.background'),
        }
        this.url = 'https://source.unsplash.com/weekly?';
        this.content = activity.split(" ");
        console.log(this.content);



    }
    initEvents(){
        this.loadImage();

    }
    loadImage(){
        const  promise = new Promise( (resolve, reject) => {
            const image = new Image();
            image.src = `${this.url}/${this.content}`;
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
