export function getDataSetItemColour(itemLabel) {

  let colour = [];
  
  switch (itemLabel) {
    case 'All motor vehicles':
      colour = ['rgba(205, 92, 92, 0.2)'];
      break;
    case 'Cars and Taxis':
      colour = ['rgba(240, 128, 128, 0.2)'];
      break;
    case 'Two wheeled motor vehicles':
      colour = ['rgba(250, 128, 114, 0.2)'];
      break;
    default:
      colour = ['rgba(255, 160, 122, 0.2)'];
  }
  
  return colour;
}
// be nice to use constants here
