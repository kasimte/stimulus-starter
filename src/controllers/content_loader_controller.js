// src/controllers/content_loader_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
    connect() {
	this.load()

	if (this.data.has("refreshInterval")) {
	    this.startRefreshing()
	}
    }

    load() {
	fetch(this.data.get("url"))
	    .then(response => response.text())
	    .then(html => {
		console.log("Loaded asynchronously...")
		this.element.innerHTML = html
	    })
    }

    disconnect() {
	this.stopRefreshing()
    }

    startRefreshing() {
	this.refreshTimer = setInterval(() => {
	    this.load()
	}, this.data.get("refreshInterval"))
    }

    stopRefreshing() {
	if (this.refreshTimer) {
	    clearInterval(this.refreshTimer)
	}
    }
}

