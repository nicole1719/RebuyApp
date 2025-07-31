import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  // mock data
  private offers: Offer[] = [
    {
      id: 'i,11379918',
      title: 'Sony PlayStation 5',
      description: 'Look forward to ultra-fast loading times with an ultra-fast SSD, a more realistic gaming experience thanks to haptic feedback, adaptive trigger buttons and 3D audio, and a whole new generation of incredible PlayStation games. The PS5 Digital Edition is a fully digital version of the PS5 console without a disc drive. Sign in to your PlayStation Network account and open the PlayStation Store to purchase and download games.',
      price: 408.99,
      imageUrl: 'https://images.rebuy.com/roaxVEVp2vHbJNsL5uQW6sM_6p0=/fit-in/1280x800/noupscale/rebuy-akeneo/3/3/d/d/33dd823a05f8d950cbca5e47f906154c719d6b23_frontcover_electronics_11379918.jpeg?t=1751371682',
      votes: 12
    },
    {
      id: 'i,12684547',
      title: 'Apple iPhone 14 Pro 128GB space black',
      description: "The Apple iPhone 14 Pro 128GB space black is the perfect choice for anyone who values design and functionality. The model has been on the market since 2022 and is available from us in the classic Space Black color. The 128 gigabyte internal memory provides ample space for apps, photos, and music. With 5G technology, you are already prepared for the future and can benefit from higher transfer rates, whether you are surfing, gaming, or streaming. With a screen diagonal of 6.1 inches, the phone fits comfortably in your hand while offering a high level of user comfort and enough space to display a wide variety of content. If you like taking photos with your phone, you'll certainly be impressed by the 48 MP resolution of the main camera.",
      price: 556.99,
      imageUrl: 'https://images.rebuy.com/UV_hED0UtOPJQhd_PT1_-3fQKyU=/fit-in/1280x800/noupscale/rebuy-akeneo/4/f/e/3/4fe3a74570f41238d390d4ae0a2a0d82507c6ad9_frontcover_electronics_file_12684547_10186496.jpeg?t=1750864911',
      votes: 34
    },
    {
      id: 'i,10392136',
      title: 'Sony DSC-HX60 black',
      description: 'Screen diagonal: 76.2 mm (3") Digital zoom: 10x Camera resolution: 20.4 MP Optical zoom: 30x Touchscreen: no Product type: Compact camera',
      price: 320.99,
      imageUrl: 'https://images.rebuy.com/ssR3pC3XSEIyFtTcOe1bYPGB4tY=/fit-in/1280x800/noupscale/rebuy-akeneo/6/a/f/8/6af8db2613d509980f1f260bfd5912abe0f76598_frontcover_electronics_10392136.jpeg?t=1739813667',
      votes: 23
    },
    {
      id: 'i,12684561',
      title: 'Apple iPhone 14 128GB polar star',
      description: 'Das Apple iPhone 14 128GB polarstern ist die perfekte Wahl für alle, die Wert auf Design und Funktionalität legen. Eine tolle Optik in Polarstern macht das Handy aus dem Jahr 2022 zu einem tollen Begleiter. Mit 128 Gigabyte internem Speicher ist reichlich Platz für viele Apps, Fotos und Musik vorhanden. Das Handy ist mit der 5G-Technologie ausgestattet. Sie sorgt für höhere Geschwindigkeiten und niedrigere Latenzzeiten. Mit einer Bildschirmdiagonale von 6,1 Zoll liegt das Handy gut in der Hand und bietet gleichzeitig einen guten Bedienkomfort und genügend Platz für die Darstellung verschiedenster Inhalte. Die Hauptkamera nimmt Fotos mit einer Auflösung von 12 MP auf – das ist groß genug, damit die Bilder später auch auf dem PC-Bildschirm gut aussehen oder sich auf DIN-A4-Format vergrößern lassen.',
      price: 402.99,
      imageUrl: 'https://images.rebuy.com/_w-vJlvE3jX2rhDHnka1sHNhs90=/fit-in/1280x800/noupscale/rebuy-akeneo/0/5/5/d/055dacf68c1796485d128ecb8f183edeb3407777_frontcover_electronics_file_12684561_10186687.jpeg?t=1750864943',
      votes: 8
    },
    {
      id: 'i,11374382',
      title: 'Apple iPad Air 4 10,9" 64GB [Wi-Fi] space grey',
      description: "The iPad Air can do more than a computer. Everything feels easier, almost like magic. And with more features and possibilities, it's now more versatile than ever.",
      price: 312.99,
      imageUrl: 'https://images.rebuy.com/6PtwzQaSrA3xogiqJgeBJlLkd_c=/fit-in/1280x800/noupscale/rebuy-akeneo/7/a/5/5/7a55999732001c75827b0de69bc807a5a265b166_frontcover_electronics_11374382.jpeg?t=1751547775',
      votes: 49
    },
    {
      id: 'i,15513567',
      title: 'Apple iPhone 16 128GB black',
      description: "The iPhone 16 was developed for Apple Intelligence, the personal intelligence system that helps you write, express yourself, and get things done effortlessly. Groundbreaking privacy features give you peace of mind that no one else can access your data — not even Apple.",
      price: 747.99,
      imageUrl: 'https://images.rebuy.com/tXqIEhm27aOqYf23q_cj5YbtLJ8=/fit-in/1280x800/noupscale/rebuy-akeneo/a/0/4/1/a04194305dfca3e3f29d2ef9ca01509f313e6783_frontcover_electronics_file_15513567.jpeg?t=1750865170',
      votes: 4
    },
    {
      id: 'i,11161391',
      title: 'Nintendo Switch 32 GB',
      description: "Have you ever had to stop playing a game because you didn't have enough time to play? The Nintendo Switch console adapts to your situation so that you can play the games you want to play despite your busy daily schedule.",
      price: 179.99,
      imageUrl: 'https://images.rebuy.com/TAqX5_-MsLOFG0FzyUTozBBW9QA=/fit-in/1280x800/noupscale/rebuy-akeneo/e/0/5/0/e05017b7071b0a4876cb5da3fff8c5896257821c_frontcover_electronics_11161391.jpeg?t=1751371682',
      votes: 32
    },
    {
      id: 'i,13410448',
      title: 'Sony PlayStation VR2',
      description: "Manufacturer: Sony Europe B.V., Zweigniederlassung Deutschland, Kemperplatz 1, Berlin, Deutschland, 10785, https://www.sony.de/",
      price: 330.99,
      imageUrl: 'https://images.rebuy.com/zrzEUPqiQARn-bny2ZT88bFkcd4=/fit-in/1280x800/noupscale/rebuy-akeneo/a/c/2/d/ac2df0c7da7760f0240307b7864c513abc8f8e71_frontcover_electronics_file_13410448.jpg?t=1751371712',
      votes: 32
    },

  ]

  private offersSubject = new BehaviorSubject<Offer[]>(this.offers);

  //tracking the offers on which the user has already voted
  private upvotedOffers: string[] = [];
  private downvotedOffers: string[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  getOffers() {
    // return observable of offers
    return this.offersSubject.asObservable();
  }

  getOfferById(id: string) {
    // returns offer with given ID
    return this.offers.find((offer) => offer.id == id)
  }

  getUpvotedOffers(): string[] {
    return this.upvotedOffers;
  }

  getDownvotedOffers(): string[] {
    return this.downvotedOffers;
  }

  loadFromLocalStorage() {
    // loads cached data from local storage 
    try {
      const cachedOffers = localStorage.getItem('offers');
      const upvotedOffers = localStorage.getItem('upvote');
      const downvotedOffers = localStorage.getItem('downvote');

      if (cachedOffers) {
        this.offers = JSON.parse(cachedOffers);
        this.offersSubject.next(this.offers);
        this.saveToLocalStorage();
        this.upvotedOffers = upvotedOffers ? JSON.parse(upvotedOffers) : [];
        this.downvotedOffers = downvotedOffers ? JSON.parse(downvotedOffers) : [];
      }
    }
    catch (error) {
      console.error("could not retrieve data from local storage", error)
    }

  }

  saveToLocalStorage() {
    // save data in local storage
    try {
      localStorage.setItem('offers', JSON.stringify(this.offers));
      localStorage.setItem('upvote', JSON.stringify(this.upvotedOffers));
      localStorage.setItem('downvote', JSON.stringify(this.downvotedOffers));
    }
    catch (error) {
      console.error("failed saving data in local storage", error)
    }

  }

  upvote(id: string) {
    // find offer by id and upvote it
    let offer = this.offersSubject.getValue().find((offer) => offer.id == id);
    if (!offer) {
      console.error("could not find offer with given ID: ", id);
      return;
    }
    offer.votes++;
    this.offersSubject.next(this.offers)

    // saving the vote of the given id

    try {
      if (!this.upvotedOffers.includes(id)) {
        this.upvotedOffers.push(id);
        this.saveToLocalStorage();
      }

      // allow downvoting 
      if (this.downvotedOffers.includes(id)) {
        let idx = this.downvotedOffers.indexOf(id)
        this.downvotedOffers.splice(idx, 1)
        this.saveToLocalStorage()
      }
    }
    catch (error) {
      console.error("failed upvoting", error)
    }

  }

  downvote(id: string) {
    let offer = this.offersSubject.getValue().find((offer) => offer.id == id);
    if (!offer) {
      console.error("could not find offer with given ID", id)
      return;
    }
    offer.votes--;
    this.offersSubject.next(this.offers)

    // saving the vote of the given id

    try {
      if (!this.downvotedOffers.includes(id)) {
        this.downvotedOffers.push(id);
        this.saveToLocalStorage();
      }
      // allow upvoting 
      if (this.upvotedOffers.includes(id)) {
        let idx = this.upvotedOffers.indexOf(id)
        this.upvotedOffers.splice(idx, 1)
        this.saveToLocalStorage()

      }
    }
    catch (error) {
      console.log("failed downvoting", error)
    }

  }

}
