import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["answerA", "answerB", "answerC"]

  selectA() {
    this.answerATarget.classList.toggle("selected")
    this.answerBTarget.classList.remove("selected")
    this.answerCTarget.classList.remove("selected")
  }

  selectB() {
    this.answerBTarget.classList.toggle("selected")
    this.answerATarget.classList.remove("selected")
    this.answerCTarget.classList.remove("selected")
  }

  selectC() {
    this.answerCTarget.classList.toggle("selected")
    this.answerATarget.classList.remove("selected")
    this.answerBTarget.classList.remove("selected")
  }

}
