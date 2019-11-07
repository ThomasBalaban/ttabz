import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../../../models/contact-form';
import { ContactServiceService } from 'src/app/services/contact-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
  submitted = false;
  model = new ContactForm();
  error: {};
  private contactServerSubscription: Subscription;

  constructor(
    private contactServer: ContactServiceService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.contactServerSubscription = this.contactServer.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error,
      () => {
        this.submitSuccess();
      }
    );
  }

  submitSuccess() {
    console.log('success');
    this.submitted = true;
    this.contactServerSubscription.unsubscribe();
  }

}
