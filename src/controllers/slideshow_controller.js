// src/controllers/slideshow_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "slide" ]

    initialize() {
	const index = parseInt(this.data.get("index"))
	this.showSlide(index)
    }

    next() {
    	var newIndex = this.index + 1
    	if (newIndex >= this.numOfSlides) {
    	    newIndex = 0
    	}
    	this.index = newIndex
    }

    previous() {
    	var newIndex = this.index - 1
    	if (newIndex < 0) {
    	    newIndex = this.numOfSlides - 1
    	}
    	this.index = newIndex
    }



    get numOfSlides() {
	return this.slideTargets.length
    }

    showSlide(index) {
	this.index = index
	this.slideTargets.forEach((el, i) => {
	    el.classList.toggle("slide--current", index == i)
	})
    }

    showCurrentSlide() {
	this.slideTargets.forEach((el, i) => {
	    el.classList.toggle("slide--current", this.index == i)
	})
    }

    
    get index() {
	return parseInt(this.data.get("index"))
    }

    set index(value) {
	this.data.set("index", value)
	this.showCurrentSlide()
    }
}
