customElements.define(
  "video-dropper",
  class VideoDropper extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById("video-dropper-template");
      const templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(templateContent.cloneNode(true));

      this._internals = this.attachInternals();
    }

    handleDrop(event) {
      event.preventDefault();
      this._internals.states.delete("drag");
      console.log(event);
    }

    handleDragOver(event) {
      event.preventDefault();
    }

    handleDragEnter(event) {
      this._internals.states.add("drag");
    }

    handleDragLeave(event) {
      this._internals.states.delete("drag");
    }

    connectedCallback() {
      this.addEventListener("drop", this.handleDrop);
      this.addEventListener("dragover", this.handleDragOver);
      this.addEventListener("dragenter", this.handleDragEnter);
      this.addEventListener("dragleave", this.handleDragLeave);
    }

    disconnectedCallback() {
      this.removeEventListener("drop", this.handleDrop);
      this.removeEventListener("dragover", this.handleDragOver);
      this.removeEventListener("dragenter", this.handleDragEnter);
      this.removeEventListener("dragleave", this.handleDragLeave);
    }
  },
);
