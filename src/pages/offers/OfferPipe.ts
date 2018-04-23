import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'mapToIterable'
})
export class MapToIterable implements PipeTransform {
  transform(dict: Object) {
    var a = [];
    for (var key in dict) {
      if (dict.hasOwnProperty(key)) {
       // a.push({key: key, val: dict[key]});
        for (let index = 0; index <  dict[key].OfferData.length; index++) {
if( dict[key].OfferData.length > 2){
  a.push({key: key, val: dict[key].OfferData[index]});
}else{
  a.push({key: key, val: dict[key].OfferData[index]});
}

        }
      }
    }
    return a;
  }
}
