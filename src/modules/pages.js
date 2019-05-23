const initialState = {
  pages: [
    {
      image: 'Image5.png',
      text: 'Paris, la nuit dernière.',
      link: '/history/1'
    },
    {
      image: 'Image6.png',
      text:
        'Un des plus beaux tableau du Louvres, la Joconde, vient d’être dérobé. Le commissaire de police fait appel à vous pour retrouver le coupable. Les policiers sont débordés, vous êtes #name, le détective le plus efficace de la capitale. N’oubliez pas, le temps presse et tout le monde compte sur vous. \n Dans un premier temps, vous décidez de chercher des indices',
      link: '/game/0'
    },
    {
      image: 'Image2.png',
      text:
        'Maintenant que vous avez visité la salle du délit, il est temps de confronter les suspects qui attendent dans une des pièces du musée. Cependant, juste avant que vous partiez, quelqu’un vous interpelle. Il s’agit du gardien, qui vient de se rappeler un détail important, le voleur est moustachu.',
      link: '/game/1'
    },
    {
      image: 'Image3.png',
      text:
        'Grâce à cette analyse de vos suspects, vous n’avez plus que quelques voleurs potentiels devant vous. Soudain, vous vous apercevez que l’un d’eux semble cacher quelque chose sous sa veste… C’est la toile du tableau! Cependant il s’aperçoit que vous l’avez vu et s’enfuit! Il vous faut absolument le rattraper et vite.. ',
      link: '/game/2'
    },
    {
      image: 'Image4.png',
      text:
        'Félicitation ! Grâce à votre appel, le commissaire Gilbert interrompt la course du voleur avant même qu’il n’arrive au bout de la rue. Vous ne vous étiez pas trompé, c’est bien  lui le coupable. Tout Paris vous félicite pour cette enquête et vous remercie pour votre efficacité remarquable!',
      link: '/'
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
