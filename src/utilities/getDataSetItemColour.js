import COLOURS from '@/constants/colourValues.js';
export function getDataSetItemColour(itemLabel) {

  let colour = [];
  
  switch (itemLabel) {
    case 'All motor vehicles':
      colour = COLOURS.ALL_VEHICLES;
      break;
    case 'Cars and Taxis':
      colour = COLOURS.CARS_TAXIS;
      break;
    case 'Two wheeled motor vehicles':
      colour = COLOURS.MOTORCYCLES_SCOOTERS;
      break;
    case 'Bicycles':
      colour = COLOURS.PEDAL_CYCLES;
      break;
    case 'Buses & coaches':
      colour = COLOURS.BUSES_COACHES;
      break;
    case 'LGVs':
      colour = COLOURS.LGVS;
      break;
    case 'HGVs':
      colour = COLOURS.HGVS;
      break;
    default:
      colour = '#CCCCCC';
  }
  
  return colour;
}
// be nice to use constants here
