import { FormGroup } from "@angular/forms";

export class VsFormGroup extends FormGroup {

	markAllAsDirty() {
		Object.keys(this.controls).forEach(key => {
			this.get(key)?.markAsDirty()
		})
	}

}
