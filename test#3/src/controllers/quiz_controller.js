import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["page1", "page2", "page3", "results", "selectAnswer"]

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
  select(event) {
    event.explicitOriginalTarget.classList.toggle("selected")
    this.selectAnswerTargets.forEach(element => {
      //console.log(element.children[1].innerHTML)
      //console.log(event.explicitOriginalTarget.lastElementChild.innerHTML)
      if (element.children[1].innerHTML === event.explicitOriginalTarget.lastElementChild.innerHTML ){
        //console.log(element.lastElementChild.classList)
        element.lastElementChild.classList.toggle("d-none")
        //console.log(element.lastElementChild.classList)
      }
    });
  }

}
