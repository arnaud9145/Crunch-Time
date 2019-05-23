const initialState = {
  games: [
    {
      key: 0,
      type: 'button',
      image: 'Image1.png',
      text:
        'Vous arrivez dans la salle principale où a été commis le vol. Immédiatement, votre oeil de détective avisé repère plusieurs éléments intéressants. Malheureusement vous n’avez qu’une seule boîte à indice, et vous ne pouvez donc repartir qu’avec un seul des éléments suivants:',
      buttons: [
        {
          key: 1,
          text: 'La liste des suspects',
          link: '/history/2'
        },
        {
          key: 2,
          text: 'Des morceaux de vitres brisés'
        },
        {
          key: 3,
          text: 'La matraque du gardien'
        }
      ],
      link: '/history/1',
      addCours: {
        key: 1,
        name: 'Variable',
        text:
          'La boîte à indice représente une variable, cette boîte a un nom elle contient une valeur qui peut changer au cours du temps.'
      }
    },
    {
      key: 1,
      type: 'drag',
      image: 'Image2.png',
      text: "Remettez les actions dans l'ordre pour identifier le suspect",
      lines: [
        {
          key: 1,
          line: 'Choisir un suspect'
        },
        {
          key: 2,
          line: 'Le mettre en garde à vue'
        },
        {
          key: 3,
          line: 'Si le suspect est moustachu :'
        },
        {
          key: 4,
          line: 'Sinon :'
        },
        {
          key: 5,
          line: 'Rassembler les suspects'
        },
        {
          key: 6,
          line: 'Le laisser partir'
        },
        {
          key: 7,
          line: 'Arrêter d’observer les moustaches'
        },
        {
          key: 8,
          line: 'Observer un autre suspect'
        }
      ],
      combinations: [[5, 1, 3, 2, 4, 6, 8, 7]],
      link: '/history/3',
      addCours: {
        key: 2,
        name: 'Boucles',
        text:
          'Vous venez de construire une boucle conditionnelle, elle permet d’effectuer une action si une condition est vérifiée et vous pouvez la recommencer autant de fois que nécessaire'
      }
    },
    {
      key: 2,
      type: 'button',
      image: 'Image3.png',
      text: 'Trois actions s’offrent à vous :',
      buttons: [
        {
          key: 1,
          text:
            'Appeler le commissaire Gilbert pour qu’il attrape vite le voleur que vous lui désignez',
          link: '/history/4'
        },
        {
          key: 2,
          text: 'Tenter de prendre une photo de lui'
        },
        {
          key: 3,
          text: 'Lui courir après'
        }
      ],
      addCours: {
        key: 3,
        name: 'Fonctions',
        text:
          'Vous venez d’utiliser une fonction, c’est une action que vous avez préalablement établi et qu’il vous suffit d’appeler pour exécuter. Elle peut prendre en compte un ou plusieurs paramètres. Ici, c’est le voleur à attraper le paramètre. Le commissaire Gilbert sait déjà interpeler un suspect mais il doit savoir qui.'
      }
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
