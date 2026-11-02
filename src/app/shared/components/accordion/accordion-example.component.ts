import { Component } from '@angular/core';

@Component({
  selector: 'nova-accordion-example',
  template: `
    <div class="example-container">
      <h3>Accordion Examples</h3>
      
      <h4>Single Expand Mode</h4>
      <nova-accordion [multi]="false" ariaLabel="FAQ accordion">
        <nova-accordion-item title="What is NOVA STORE?">
          <p>NOVA STORE is an e-commerce platform for selling products online.</p>
        </nova-accordion-item>
        <nova-accordion-item title="How do I create an account?">
          <p>You can create an account by clicking on the "Sign Up" button in the top right corner.</p>
        </nova-accordion-item>
        <nova-accordion-item title="Do you offer international shipping?">
          <p>Yes, we ship to most countries around the world.</p>
        </nova-accordion-item>
      </nova-accordion>

      <h4>Multiple Expand Mode</h4>
      <nova-accordion [multi]="true" ariaLabel="Filter options accordion">
        <nova-accordion-item title="Category">
          <p>Electronics, Clothing, Books, Home & Garden</p>
        </nova-accordion-item>
        <nova-accordion-item title="Price Range">
          <p>$0 - $50, $50 - $100, $100+</p>
        </nova-accordion-item>
        <nova-accordion-item title="Brand">
          <p>Apple, Samsung, Sony, Nike, Adidas</p>
        </nova-accordion-item>
      </nova-accordion>
    </div>
  `,
  styles: [`
    .example-container {
      padding: 20px;
    }
    
    h3, h4 {
      margin-top: 20px;
      margin-bottom: 10px;
    }
  `]
})
export class AccordionExampleComponent {
}