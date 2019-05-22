

const initialState = {
  pages: [
    {
      image: 'Image1.png',
      text: 'Vous arrivez dans la salle principale où a été commis le vol. Immédiatement, votre oeil de détective avisé repère plusieurs éléments intéressants. Malheureusement vous n’avez qu’une seule boîte à indice, et vous ne pouvez donc repartir qu’avec un seul des éléments suivants:',
      link: '/history/1'
    },
    {
      image: 'Image2.png',
      text: 'Maintenant que vous avez visité la salle du délit, il est temps de confronter les suspects qui attendent dans une des pièces du musée. Cependant, juste avant que vous partiez, quelqu’un vous interpelle. Il s’agit du gardien, qui vient de se rappeler un détail important, le voleur est moustachu.',
      link: '/history/0'
    },
    {
      image: 'Image3.png',
      text: 'Grâce à cette analyse de vos suspects, vous n’avez plus que quelques voleurs potentiels devant vous. Soudain, vous vous apercevez que l’un d’eux semble cacher quelque chose sous sa veste… C’est la toile du tableau! Cependant il s’aperçoit que vous l’avez vu et s’enfuit! Il vous faut absolument le rattraper et vite.. ',
      link: '/history/0'
    },
    {
      image: 'Image4.png',
      text: 'Félicitation ! Grâce à votre appel, le commissaire Gilbert interrompt la course du voleur avant même qu’il n’arrive au bout de la rue. Vous ne vous étiez pas trompé, c’est bien  lui le coupable. Tout Paris vous félicite pour cette enquête et vous remercie pour votre efficacité remarquable!',
      link: '/history/0'
    }
  ]


}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}