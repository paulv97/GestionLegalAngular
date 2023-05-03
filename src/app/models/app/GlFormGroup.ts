import { FormGroup } from "@angular/forms";

export class GlFormGroup extends FormGroup {

	markAllAsDirty() {
		Object.keys(this.controls).forEach(key => {
			this.get(key)?.markAsDirty()
		})
	}

}
