import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class HotelsService {
  private data: Hotel[] = [
    {
      'id': 1,
      'img': 'https://unsplash.it/600/400',
      'address': '9675 Northridge Street',
      'phone': '376-495-2460',
      'name': 'Hijack That Went South, The (Kaappari)',
      'water': 48,
      'temperature': 30,
      'icon': 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
      'followers': 705,
      'following': 757,
      'type': 'maestro'
    },
    {
      'id': 2,
      'img': 'https://unsplash.it/600/400',
      'address': '37 Donald Park',
      'phone': '772-805-5293',
      'name': 'Breaking the Rules',
      'water': 84,
      'temperature': 45,
      'icon': 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
      'followers': 949,
      'following': 1353,
      'type': 'jcb'
    },
    {
      'id': 3,
      'address': '3270 Ryan Place',
      'img': 'https://unsplash.it/600/400',
      'phone': '265-828-3666',
      'name': 'Souper, Le (Supper, The)',
      'water': 30,
      'temperature': 44,
      'icon': 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
      'followers': 304,
      'following': 705,
      'type': 'jcb'
    },
    {
      'id': 4,
      'address': '405 Holmberg Circle',
      'img': 'https://unsplash.it/600/400',
      'phone': '183-130-6322',
      'name': 'Wind Will Carry Us, The (Bad ma ra khahad bord)',
      'water': 60,
      'temperature': 100,
      'icon': 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
      'followers': 721,
      'following': 661,
      'type': 'switch'
    },
    {
      'id': 5,
      'address': '88982 Shelley Avenue',
      'img': 'https://unsplash.it/600/400',
      'phone': '479-859-9097',
      'name': 'Melvin and Howard',
      'water': 70,
      'temperature': 28,
      'icon': 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
      'followers': 340,
      'following': 1326,
      'type': 'mastercard'
    },
    {
      'id': 6,
      'address': '3508 Hooker Lane',
      'img': 'https://unsplash.it/600/400',
      'phone': '915-529-0488',
      'name': 'My Boyfriends\' Dogs',
      'water': 26,
      'temperature': 56,
      'icon': 'http://dummyimage.com/100x100.jpg/dddddd/000000',
      'followers': 405,
      'following': 874,
      'type': 'jcb'
    },
    {
      'id': 7,
      'address': '3 West Alley',
      'img': 'https://unsplash.it/600/400',
      'phone': '784-697-3076',
      'name': 'Kill Bill: Vol. 1',
      'water': 91,
      'temperature': 95,
      'icon': 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
      'followers': 447,
      'following': 400,
      'type': 'visa'
    },
    {
      'id': 8,
      'address': '426 Loftsgordon Court',
      'img': 'https://unsplash.it/600/400',
      'phone': '228-578-5997',
      'name': 'Red Balloon, The (Ballon rouge, Le)',
      'water': 91,
      'temperature': 24,
      'icon': 'http://dummyimage.com/100x100.jpg/dddddd/000000',
      'followers': 437,
      'following': 1933,
      'type': 'jcb'
    },
    {
      'id': 9,
      'address': '2 Granby Crossing',
      'img': 'https://unsplash.it/600/400',
      'phone': '531-467-5847',
      'name': 'Aviator\'s Wife, The (La femme de l\'aviateur)',
      'water': 77,
      'temperature': 90,
      'icon': 'http://dummyimage.com/100x100.jpg/dddddd/000000',
      'followers': 583,
      'following': 671,
      'type': 'jcb'
    },
    {
      'id': 10,
      'address': '7 Mayer Park',
      'img': 'https://unsplash.it/600/400',
      'phone': '424-301-0619',
      'name': 'Mummy\'s Tomb, The',
      'water': 15,
      'temperature': 27,
      'icon': 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
      'followers': 888,
      'following': 1728,
      'type': 'diners-club-us-ca'
    },
    {
      'id': 11,
      'address': '2133 Lillian Alley',
      'img': 'https://unsplash.it/600/400',
      'phone': '857-223-6775',
      'name': 'Pekka ja Pätkä salapoliiseina',
      'water': 16,
      'temperature': 33,
      'icon': 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
      'followers': 305,
      'following': 622,
      'type': 'visa'
    },
    {
      'id': 12,
      'address': '2899 Ridgeview Terrace',
      'img': 'https://unsplash.it/600/400',
      'phone': '581-954-8871',
      'name': 'Christmas Eve',
      'water': 81,
      'temperature': 66,
      'icon': 'http://dummyimage.com/100x100.jpg/dddddd/000000',
      'followers': 136,
      'following': 807,
      'type': 'mastercard'
    },
    {
      'id': 13,
      'address': '620 Milwaukee Lane',
      'img': 'https://unsplash.it/600/400',
      'phone': '875-476-5152',
      'name': '3 Backyards',
      'water': 70,
      'temperature': 66,
      'icon': 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
      'followers': 520,
      'following': 1868,
      'type': 'jcb'
    },
    {
      'id': 14,
      'address': '280 Village Green Trail',
      'img': 'https://unsplash.it/600/400',
      'phone': '845-179-4425',
      'name': 'Petulia',
      'water': 8,
      'temperature': 18,
      'icon': 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
      'followers': 934,
      'following': 172,
      'type': 'mastercard'
    },
    {
      'id': 15,
      'address': '444 Oxford Terrace',
      'img': 'https://unsplash.it/600/400',
      'phone': '792-534-4703',
      'name': 'Go Fish',
      'water': 44,
      'temperature': 30,
      'icon': 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
      'followers': 855,
      'following': 531,
      'type': 'maestro'
    },
    {
      'id': 16,
      'address': '38 Iowa Center',
      'img': 'https://unsplash.it/600/400',
      'phone': '392-878-0220',
      'name': 'Louis C.K.: Chewed Up',
      'water': 45,
      'temperature': 81,
      'icon': 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
      'followers': 687,
      'following': 1749,
      'type': 'visa'
    },
    {
      'id': 17,
      'address': '854 Twin Pines Parkway',
      'img': 'https://unsplash.it/600/400',
      'phone': '693-670-6005',
      'name': 'Wadd: The Life & Times of John C. Holmes',
      'water': 81,
      'temperature': 78,
      'icon': 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
      'followers': 931,
      'following': 1910,
      'type': 'jcb'
    },
    {
      'id': 18,
      'address': '4 Killdeer Junction',
      'img': 'https://unsplash.it/600/400',
      'phone': '102-828-0001',
      'name': 'Regarding Henry',
      'water': 18,
      'temperature': 99,
      'icon': 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
      'followers': 433,
      'following': 1848,
      'type': 'mastercard'
    },
    {
      'id': 19,
      'address': '12357 Marcy Alley',
      'img': 'https://unsplash.it/600/400',
      'phone': '572-731-0527',
      'name': 'The Bone Snatcher',
      'water': 58,
      'temperature': 15,
      'icon': 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
      'followers': 157,
      'following': 1710,
      'type': 'visa'
    },
    {
      'id': 20,
      'address': '65 Old Gate Plaza',
      'img': 'https://unsplash.it/600/400',
      'phone': '637-345-7231',
      'name': 'Lady with the Dog, The (Dama s sobachkoy)',
      'water': 97,
      'temperature': 96,
      'icon': 'http://dummyimage.com/100x100.jpg/cc0000/ffffff',
      'followers': 619,
      'following': 1415,
      'type': 'china'
    }];

  public getHotels(): Observable<Hotel[]> {
    return Observable.of(this.data);
  }

}
