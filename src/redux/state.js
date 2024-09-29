

  let store = {
    _callSubscriber() {
      console.log('State was changed!!!!!!!!!')
    } ,

    _state : {
      profilePage: {
          posts: [
              {id: 1, message: 'Hi, how are you?', likesCount: 10},
              {id: 2, message: "It's my first post", likesCount: 15},
              {id: 3, message: "Bla Bla", likesCount: 15},
              {id: 4, message: "Dada", likesCount: 15}
              ],
          newPostText: 'it-kamasutra.com'       
      },
  
      dialogsPage: {
          dialogs: [
              {id: 1, name: 'Ruslan'},
              {id: 2, name: 'Dimych'},
              {id: 3, name: 'Sveta'},
              {id: 4, name: 'Victor'},
              {id: 5, name: 'Valera'}
            ],
          messages: [
              {id: 1, message: 'Hi'},
              {id: 2, message: 'How is your it-kamasutra?'},
              {id: 3, message: 'Yo'},
              {id: 4, message: 'Yo'},
              {id: 5, message: 'Yo'}
            ]
      }
      
    },

    getState() {
      // debugger;
      return this._state
    },


    addPost() {
      let newPost = {
        id: 6,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }; 
  
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber (this._state);
    },
  
    updateNewPostText(newText) {
  
      this._state.profilePage.newPostText = newText;
      this._callSubscriber (this._state);
    },
  
    subscribe(observer) {
      this._callSubscriber = observer;
    },

    

  }
  

  export default store;


  // window.store = store;