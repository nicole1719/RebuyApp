import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer-service';
import { RouterModule } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-offers',
  imports: [RouterModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent implements OnInit {
  constructor(private offerService: OfferService, private cdr: ChangeDetectorRef) {
  }
  offers: Offer[] = []
  openedOffer?: Offer;
  modalElement?: HTMLElement;
  modal?: bootstrap.Modal;
  upvotedOffers: string[] = [];
  downvotedOffers: string[] = [];


  ngOnInit(): void {
    // get offers and sort them
    this.offerService.getOffers().subscribe({
      next: (offers) => {
        this.offers = offers;
        this.sortOffersByVotes();
      },
      error: (error) => {
        console.error('Could not retrieve offers:', error);
      }
    });

    this.initModal();

    // retrieve voted offers to control vote button state
    this.upvotedOffers = this.offerService.getUpvotedOffers();
    this.downvotedOffers = this.offerService.getDownvotedOffers();
  }

  initModal() {
    // initialize bootstrap modal
    const element = document.getElementById('detailsModal');
    if (element) {
      this.modalElement = element;
      this.modal = new bootstrap.Modal(element);
    }
  }

  trackOfferAndShowModal(id: string) {
    // get offer with given id to be able to view data and show modal
    this.openedOffer = this.offerService.getOfferById(id);
    if(!this.openedOffer) {
      console.error('could not find offer with given ID: ', id)
      return;
    }
    this.cdr.detectChanges();
    this.modal?.show();
  }

  sortOffersByVotes() {
    // sorting offers by votes, highest to lowest
    this.offers.sort((a, b) => b.votes - a.votes)
  }

  upvote(id: string) {
    try {
      this.offerService.upvote(id);
      this.sortOffersByVotes();
    } catch (error) {
      console.error('failed upvoting:', error);
    }
  }

  downvote(id: string) {
    try {
      this.offerService.downvote(id);
      this.sortOffersByVotes();
    } catch (error) {
      console.error('failed downvoting:', error);
    }
  }
}
