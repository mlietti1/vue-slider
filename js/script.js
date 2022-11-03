const { createApp } = Vue;

createApp ({

  data(){
    return{
      movies: [
        {
          name: 'Howl\'s Moving Castle',
          time: '119 min',
          img: 'img/howls-moving-castle.jpg'
        },
        {
          name: 'Kiki\'s Delivery Service',
          time: '102 min',
          img: 'img/kiki.jpg'
        },
        {
          name: 'Princess Mononoke',
          time: '133 min',
          img: 'img/princess-mononoke.jpg'
        },
        {
          name: 'Spirited Away',
          time: '125 min',
          img: 'img/spirited-away.jpg'
        },
        {
          name: 'My Neighbor Totoro',
          time: '86 min',
          img: 'img/totoro.jpg'
        }
      ],
      imgCounter: 0
    }
  }
}).mount('#app')