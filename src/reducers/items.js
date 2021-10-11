import {DRAW_LOAD_ITEM} from '../constants'

const items = (state = [], action) => {
    switch (action.type) {
      case DRAW_LOAD_ITEM:
        return action.items.map((item) => {
          return {
            userId: item.userId,
            id: item.id,
            title: item.title,
            body: item.body,
          };
        });
  
     
      default:
        return state;
    }
  };
  
  export default items;
  