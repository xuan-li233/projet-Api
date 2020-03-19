
import $ from 'jquery';

export default class Background {
  constructor (activity) {
    this.initEls(activity);
    this.initEvents();
  }

  initEls (activity) {
    this.$els = {
      background: $('.background'),
    };
    this.url = 'https://source.unsplash.com/weekly?';
    this.content = activity.split(' ');
    if (this.content[this.content.length - 1] === 'friends') {
      this.content = this.content[2] + ',' + this.content[3] + ',' + this.content[4];
    } else {
      this.content = this.content[this.content.length - 2] + ',' + this.content[this.content.length - 1];
    }

    console.log(this.content);
  }
  initEvents () {
    this.loadImage();
  }
  loadImage () {
    const promise = new Promise((resolve, reject) => {
      const image = new Image();
      image.src = `${this.url}/${this.content}`;
      image.onload = () => {
        resolve(image);
      };
      image.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((image) => {
      console.log(image);
      this.addBackground(image);
    });
    promise.catch((error) => {
      console.log('Error', error);
    });
  }

  addBackground (image) {
    this.$els.background.css('background-image', `url(${image.src})`);
    this.$els.background.addClass('is-ready');
  }
}
