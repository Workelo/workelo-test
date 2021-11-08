import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["answerA", "answerB", "answerC", "answerD"]

  select(event) {
    console.log(event.explicitOriginalTarget)
    event.explicitOriginalTarget.classList.toggle("selected")
  }

  selectB() {
    this.answerBTarget.classList.toggle("selected")
    this.answerATarget.classList.remove("selected")
    this.answerCTarget.classList.remove("selected")
    this.answerDTarget.classList.remove("selected")
  }

  selectC() {
    this.answerCTarget.classList.toggle("selected")
    this.answerATarget.classList.remove("selected")
    this.answerBTarget.classList.remove("selected")
    this.answerDTarget.classList.remove("selected")
  }

  selectD() {
    this.answerDTarget.classList.toggle("selected")
    this.answerATarget.classList.remove("selected")
    this.answerCTarget.classList.remove("selected")
    this.answerBTarget.classList.remove("selected")
  }
}
