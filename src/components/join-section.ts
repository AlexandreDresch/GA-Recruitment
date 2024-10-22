import { Component } from "./component";

export class JoinUsSection extends Component {
  render(): string {
    return /*html*/ `
      <section id="join-us" aria-labelledby="join-us-heading">
        <h2 id="join-us-heading" class="section-title" data-text="JOIN US">Join Us</h2>
        <p class="overview">Submit your data to be considered for recruitment by The City Administration. Only those with the necessary skills and qualifications will be contacted.</p>      
        
        <form class="form-container" id="join-us-form" aria-describedby="form-description">
          <div id="form-description" class="sr-only">All fields are required. Please fill out the form to be considered for recruitment.</div>

          <div class="input-container group">
            <input type="email" name="floating_email" id="floating_email" class="peer" placeholder="" required aria-required="true" aria-label="Email address" />
            <label for="floating_email" class="peer-focus:font-medium peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>

          <div class="input-grid">
            <div class="input-container group">
              <input type="text" name="floating_first_name" id="floating_first_name" class="peer" placeholder="" required aria-required="true" aria-label="First name" />
              <label for="floating_first_name" class="peer-focus:font-medium peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>

            <div class="input-container group">
              <input type="text" name="floating_last_name" id="floating_last_name" class="peer" placeholder="" required aria-required="true" aria-label="Last name" />
              <label for="floating_last_name" class="peer-focus:font-medium peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
          </div>

          <div class="input-grid">
          <div class="input-container group">
              <input type="tel" pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="peer" placeholder="" required aria-required="true" aria-label="ID code" />
              <label for="floating_phone" class="peer-focus:font-medium peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-6">ID Code (format: 12-345-6789)</label>
            </div>

            <div class="input-container group">
              <input type="text" name="floating_augmentation" id="floating_augmentation" class="peer" placeholder="" required aria-required="true" aria-label="Physical augmentation log" />
              <label for="floating_augmentation" class="peer-focus:font-medium peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-6">Physical Augmentation Log</label>
            </div>
          </div>

          <button type="submit" class="glitch-button" data-text="SUBMIT" aria-label="Submit recruitment form">Submit</button>
        </form>

        <div id="toast" class="toast-container hidden" role="alert" aria-live="polite">
          Your application has been successfully submitted. Await further instructions from The City Administration.
        </div>
      </section>
    `;
  }

  mount(target: HTMLElement): void {
    super.mount(target);

    const form = document.getElementById("join-us-form") as HTMLFormElement;
    const toast = document.getElementById("toast") as HTMLElement;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.showToast(toast);
      form.reset();
    });
  }

  showToast(toast: HTMLElement): void {
    toast.classList.remove("hidden");
    toast.classList.add("block");

    setTimeout(() => {
      toast.classList.remove("block");
      toast.classList.add("hidden");
    }, 3000);
  }
}
