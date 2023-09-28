import { createElement } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

class AudioPlayerComp extends HTMLElement {
	connectedCallback() {
		render(createElement(AudioPlayer), this);
	}

	disconnectedCallback() {
		unmountComponentAtNode(AudioPlayer as any);
	}
}

customElements.define("GCP-CRUD-React-Widget", AudioPlayerComp);
