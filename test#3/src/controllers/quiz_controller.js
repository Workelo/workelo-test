import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["page1", "page2", "page3", "results", "answer"]

  goTo2() {
    this.page1Target.classList.add("d-none")
    this.page2Target.classList.remove("d-none")
  }

  goTo3() {
    this.page2Target.classList.add("d-none")
    this.page3Target.classList.remove("d-none")
  }

  goBackTo1() {
    this.page1Target.classList.remove("d-none")
    this.page2Target.classList.add("d-none")
  }
  goBackTo2() {
    this.page2Target.classList.remove("d-none")
    this.page3Target.classList.add("d-none")
  }
  goToResults() {
    this.page3Target.classList.add("d-none")
    this.resultsTarget.classList.remove("d-none")
  }

  select() {
    console.log(this.answerTargets)
    this.answerTargets.forEach((answer) => {
      console.log(answer)
    });

  }
}
